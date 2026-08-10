// Save state
// Organize sidebar, chat, and input components
// Pass data to children

// User writes the URL
// - This file loads the chat only with / and with its sidebar, chatarea and messageinput

import React, { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import '../../App.css';
import Sidebar from '../../components/chat/Sidebar/Sidebar.jsx';
import ChatArea from '../../components/chat/ChatArea/ChatArea.jsx';
import ProjectView from '../../components/chat/ChatArea/ProjectView/ProjectView.jsx';
import MessageInput from '../../components/chat/MessageInput/MessageInput.jsx';
import chatService from '../../services/chat/chatServicio';
import { loadConversations, saveConversations } from '../../services/chat/conversationStorage';
import { PROJECTS } from '../../components/chat/Sidebar/projectsData.js';
import { useT } from '../../components/professional_page/i18n/LanguageContext.jsx';

// Stable unique id for messages/conversations (safe key for lists that grow or reorder)
const makeId = () =>
    (typeof crypto !== 'undefined' && crypto.randomUUID)
        ? crypto.randomUUID()
        : `id-${Date.now()}-${Math.random().toString(36).slice(2)}`;

// Matches the drawer breakpoint in App.css / Sidebar.css — below this the sidebar
// stops being a column beside the chat and becomes an overlay on top of it.
const MOBILE_BREAKPOINT = 768;
const MOBILE_QUERY = `(max-width: ${MOBILE_BREAKPOINT}px)`;
const isMobileViewport = () =>
    typeof window !== 'undefined' && window.matchMedia(MOBILE_QUERY).matches;

function ChatPage() {
    const t = useT().chat;

    // One snapshot of localStorage per mount: the three states below have to come
    // from the same read or the sidebar list and the visible messages drift apart.
    const [restored] = useState(loadConversations);

    const [conversations, setConversations] = useState(restored.conversations); // All conversations, each with its own message history
    const [activeConversationId, setActiveConversationId] = useState(restored.activeConversationId); // null = new, not-yet-saved conversation
    const [messages, setMessages] = useState( // Messages currently displayed (mirrors the active conversation)
        () => restored.conversations.find(c => c.id === restored.activeConversationId)?.messages ?? []
    );
    // Mirrors `messages` synchronously (unlike the render closure, never stale between calls).
    // Kept in sync at every write site below — avoids handleSendMessage reading a stale
    // `messages` array if it were captured via the render closure instead.
    const messagesRef = useRef(messages);
    // Single source of truth for the sidebar state. On mobile it starts collapsed:
    // there the sidebar is a drawer, and opening it by default would bury the chat
    // under 272px of conversation list on a 375px screen.
    const [sidebarCollapsed, setSidebarCollapsed] = useState(isMobileViewport);
    const [isOffline, setIsOffline] = useState(false); // Backend/LLM down → pre-set (offline) answers. Drives the header status.
    // Non-null while a "Proyectos" entry is open: swaps ChatArea for ProjectView
    // (README where the hero header would be) while MessageInput stays put below.
    const [activeProjectId, setActiveProjectId] = useState(null);

    // Sondeo del estado del backend: una vez al montar y luego cada 30s.
    // Antes solo se comprobaba al montar, así que si el backend caía (o
    // despertaba) entre la carga de la página y el primer mensaje, el punto del
    // header mentía hasta que se intentaba enviar algo. Este es el sondeo que
    // los campos muertos de chatServicio (lastHealthCheck/healthCheckInterval)
    // prometían y nunca existió.
    useEffect(() => {
        let cancelled = false;
        let inFlight = false; // Un status colgado no debe apilar peticiones detrás

        const check = async () => {
            // En pestañas ocultas no se sondea: nadie está mirando el punto, y un
            // backend dormido no merece tráfico de fondo cada 30s.
            if (inFlight || document.hidden) return;
            inFlight = true;
            const status = await chatService.getSystemStatus();
            inFlight = false;
            if (!cancelled) setIsOffline(!!status.error);
        };

        check();
        const intervalId = setInterval(check, 30000);
        return () => {
            cancelled = true;
            clearInterval(intervalId);
        };
    }, []);

    // El estado inicial solo cubre cómo se carga la página; estrechar la ventana
    // después dejaba el drawer abierto tapando el chat.
    //
    // Solo reaccionamos al *cruzar* el breakpoint, no en cada evento de resize:
    // en los navegadores móviles `resize` salta cada vez que se oculta o aparece
    // la barra de direcciones al hacer scroll, y sin esta comprobación el panel
    // se le cerraría solo al visitante mientras navega.
    useEffect(() => {
        let wasMobile = isMobileViewport();

        const handleResize = () => {
            const nowMobile = isMobileViewport();
            if (nowMobile === wasMobile) return;

            wasMobile = nowMobile;
            setSidebarCollapsed(nowMobile);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Mirror the history to localStorage on every change. Runs once on mount too,
    // writing back what we just read — idempotent, and it keeps the pruning rules
    // in conversationStorage as the only place that decides what survives.
    useEffect(() => {
        saveConversations(conversations, activeConversationId);
    }, [conversations, activeConversationId]);

    // Add to state a new user message and the corresponding bot response
    const handleSendMessage = useCallback((message, response) => {
        const now = Date.now();
        const offline = !!response.isEmergency; // Response came from the offline fallback, not the live LLM
        // El aviso "modo demo" aparece al ENTRAR en offline, no una única vez por
        // conversación. Antes bastaba con que existiera un aviso anterior para
        // callar los siguientes: si el backend se recuperaba y volvía a caer en la
        // misma conversación, la segunda caída era silenciosa y las respuestas
        // enlatadas parecían del LLM vivo. Ahora se mira cómo llegó la última
        // respuesta del bot (emergencyMode marca las suyas con metadata.isOffline):
        // solo se avisa en la transición vivo → offline, nunca en caídas seguidas.
        // Se lee messagesRef (siempre fresco) y no el closure de `messages`, para
        // seguir siendo correcto aunque una llamada previa no haya re-renderizado.
        const lastBot = [...messagesRef.current].reverse().find(m => m.type === 'bot');
        const wasOffline = !!lastBot?.metadata?.isOffline;

        const entries = [
            { id: makeId(), type: 'user', content: message, createdAt: now }, // The message sent by the user
        ];
        if (offline && !wasOffline) {
            entries.push({ id: makeId(), type: 'system', content: 'offline', createdAt: now });
        }
        entries.push(
            { id: makeId(), type: 'bot', content: response.response, metadata: response.metadata, createdAt: now } // The bot's response with its additional info
        );

        const updatedMessages = [...messagesRef.current, ...entries];
        messagesRef.current = updatedMessages;
        setMessages(updatedMessages);
        setIsOffline(offline); // Header reflects the current backend state on every exchange

        // `activeConversationId` is the app's own "does a saved conversation exist" signal
        // (null = none; set the moment one is created, cleared on new/delete) — reading this
        // scalar from the closure is safe and lets both setConversations branches below stay
        // side-effect-free updaters (no nested setState, which StrictMode would double-invoke).
        if (activeConversationId !== null) {
            setConversations(prev => prev.map(c =>
                c.id === activeConversationId ? { ...c, messages: updatedMessages } : c
            ));
            return;
        }

        // No active conversation yet: the first exchange creates and saves a new one
        const newId = `conv-${makeId()}`;
        const title = message.length > 28 ? `${message.slice(0, 28)}…` : message;
        const newConversation = {
            id: newId,
            nombre: title,
            nombreCompleto: message,
            pinned: false,
            messages: updatedMessages
        };
        setActiveConversationId(newId);
        setConversations(prev => [newConversation, ...prev]);
    }, [activeConversationId]);

    // Starts a fresh, empty conversation. Previous messages stay saved in the sidebar list.
    const handleNewConversation = useCallback(() => {
        setActiveConversationId(null);
        setActiveProjectId(null);
        messagesRef.current = [];
        setMessages([]);
    }, []);

    // Loads a saved conversation's messages back into view
    const handleSelectConversation = useCallback((conversationId) => {
        const conversation = conversations.find(c => c.id === conversationId);
        if (!conversation) return;

        setActiveProjectId(null);
        setActiveConversationId(conversationId);
        messagesRef.current = conversation.messages;
        setMessages(conversation.messages);
        // On desktop the sidebar sits beside the chat, so keep it visible. On mobile
        // it covers the chat, so picking a conversation has to get out of the way —
        // otherwise you tap a conversation and still can't see it.
        setSidebarCollapsed(isMobileViewport());
    }, [conversations]);

    // Opens a "Proyectos" entry: same idea as starting a new conversation, but
    // ProjectView (README) is shown in place of ChatArea until the visitor goes back.
    const handleSelectProject = useCallback((projectId) => {
        setActiveConversationId(null);
        setActiveProjectId(projectId);
        messagesRef.current = [];
        setMessages([]);
        setSidebarCollapsed(isMobileViewport());
    }, []);

    const handleRenameConversation = useCallback((conversationId, newName) => {
        setConversations(prev =>
            prev.map(c => (c.id === conversationId ? { ...c, nombre: newName } : c))
        );
    }, []);

    const handleDeleteConversation = useCallback((conversationId) => {
        setConversations(prev => prev.filter(c => c.id !== conversationId));
        if (activeConversationId === conversationId) {
            setActiveConversationId(null);
            messagesRef.current = [];
            setMessages([]);
        }
    }, [activeConversationId]);

    // Pinned conversations are kept at the top of the list
    const handleTogglePin = useCallback((conversationId) => {
        setConversations(prev =>
            prev.map(c => (c.id === conversationId ? { ...c, pinned: !c.pinned } : c))
        );
    }, []);

    // Accepts an explicit boolean (expand/collapse) or toggles when called without one
    const handleToggleSidebar = useCallback((next) => {
        setSidebarCollapsed(prev => (typeof next === 'boolean' ? next : !prev));
    }, []);

    const orderedConversations = useMemo(
        () => [...conversations].sort((a, b) => Number(!!b.pinned) - Number(!!a.pinned)),
        [conversations]
    );

    const activeProject = activeProjectId ? PROJECTS.find(p => p.id === activeProjectId) : null;

    return (
        <div className={`app ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
            <Sidebar
                conversations={orderedConversations}
                activeConversationId={activeConversationId}
                projects={PROJECTS}
                activeProjectId={activeProjectId}
                onSelectProject={handleSelectProject}
                collapsed={sidebarCollapsed}
                onToggleCollapse={handleToggleSidebar}
                onSelectConversation={handleSelectConversation}
                onNewConversation={handleNewConversation}
                onRenameConversation={handleRenameConversation}
                onDeleteConversation={handleDeleteConversation}
                onTogglePin={handleTogglePin}
            />

            {/* Backdrop del drawer móvil. Se renderiza siempre para que la opacidad
                pueda transicionar; en escritorio el CSS lo deja en display:none. */}
            <div
                className={`sidebar-overlay ${sidebarCollapsed ? '' : 'active'}`}
                onClick={() => handleToggleSidebar(true)}
                aria-hidden="true"
            />

            <div className="main-container">
                <div className="chat-wrapper">
                    {activeProject ? (
                        <ProjectView
                            project={activeProject}
                            messages={messages}
                            onBack={handleNewConversation}
                        />
                    ) : (
                        <ChatArea
                            messages={messages}
                            isOffline={isOffline}
                        />
                    )}
                    <MessageInput
                        onSendMessage={handleSendMessage}
                        isEmpty={messages.length === 0}
                        placeholder={activeProject ? t.projects.inputPlaceholder : undefined}
                        suggestions={activeProjectId ? t.projects.suggestions?.[activeProjectId] : undefined}
                        disclaimer={activeProject ? t.input.projectDisclaimer : undefined}
                    />
                </div>
            </div>
        </div>
    );
}

export default ChatPage;
