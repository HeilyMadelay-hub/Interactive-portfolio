import React, { useState, useRef, useEffect, useCallback } from 'react';
import Modal from '../Modal/Modal';
import ConversationItem from './ConversationItem.jsx';
import { useT } from '../../professional_page/i18n/LanguageContext.jsx';
import './Sidebar.css';

// Controlled component: the collapsed state lives in ChatPage and comes in
// via props, so the whole page shares a single source of truth.
const Sidebar = React.memo(function Sidebar({
    conversations = [],
    activeConversationId,
    collapsed = false,
    onToggleCollapse,
    onSelectConversation,
    onNewConversation,
    onRenameConversation,
    onDeleteConversation,
    onTogglePin
}) {
    const t = useT().chat;

    // Modal states
    const [isRenameModalOpen, setIsRenameModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedConvId, setSelectedConvId] = useState(null);
    const [newConvName, setNewConvName] = useState('');

    // Pinned conversations get their own collapsible group at the top of the list,
    // so a long history never buries the ones the visitor deliberately kept.
    const [isPinnedGroupOpen, setIsPinnedGroupOpen] = useState(true);
    const pinnedConversations = conversations.filter(c => c.pinned);
    const otherConversations = conversations.filter(c => !c.pinned);

    // Scroll + highlight of the selected row, without touching the DOM via querySelector:
    // each row registers itself in itemRefs and the highlight is plain React state.
    const itemRefs = useRef({});
    const highlightTimer = useRef(null);
    const [highlightId, setHighlightId] = useState(null);

    const setItemRef = useCallback((el) => {
        if (el) itemRefs.current[el.dataset.sectionId] = el;
    }, []);

    useEffect(() => () => clearTimeout(highlightTimer.current), []);

    const handleSelect = useCallback((convId) => {
        onSelectConversation?.(convId);

        // Small delay so the sidebar finishes expanding before scrolling
        setTimeout(() => {
            itemRefs.current[convId]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);

        setHighlightId(convId);
        clearTimeout(highlightTimer.current);
        highlightTimer.current = setTimeout(() => setHighlightId(null), 1500);
    }, [onSelectConversation]);

    const handleFloatingClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        onToggleCollapse?.(false);
    };

    // Rename handlers
    const handleRename = useCallback((e, convId) => {
        e.stopPropagation();
        const conv = conversations.find(c => c.id === convId);
        setSelectedConvId(convId);
        setNewConvName(conv?.nombre || '');
        setIsRenameModalOpen(true);
    }, [conversations]);

    const confirmRename = () => {
        if (newConvName.trim()) {
            onRenameConversation?.(selectedConvId, newConvName.trim());
            setIsRenameModalOpen(false);
            setNewConvName('');
            setSelectedConvId(null);
        }
    };

    // Delete handlers
    const handleDelete = useCallback((e, convId) => {
        e.stopPropagation();
        setSelectedConvId(convId);
        setIsDeleteModalOpen(true);
    }, []);

    const confirmDelete = () => {
        onDeleteConversation?.(selectedConvId);
        setIsDeleteModalOpen(false);
        setSelectedConvId(null);
    };

    // Pin handler. Pinning while the group is folded would look like the row
    // vanished, so anchoring always reveals where the conversation landed.
    const handlePin = useCallback((e, convId) => {
        e.stopPropagation();
        const conv = conversations.find(c => c.id === convId);
        if (!conv?.pinned) setIsPinnedGroupOpen(true);
        onTogglePin?.(convId);
    }, [conversations, onTogglePin]);

    const getConvName = (convId) => {
        return conversations.find(c => c.id === convId)?.nombre || '';
    };

    const renderConversation = (conv) => (
        <ConversationItem
            key={conv.id}
            conv={conv}
            isActive={activeConversationId === conv.id}
            isHighlighted={highlightId === conv.id}
            itemRef={setItemRef}
            labels={t.sidebar}
            onSelect={handleSelect}
            onRename={handleRename}
            onPin={handlePin}
            onDelete={handleDelete}
        />
    );

    return (
        <>
            <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
                <div className="sidebar-header">
                    <h2>{t.sidebar.title}</h2>
                    <button
                        className="menu-btn"
                        onClick={() => onToggleCollapse?.(!collapsed)}
                        title={t.sidebar.hideMenu}
                        type="button"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                <div className="new-conversation-wrapper">
                    <button className="new-conversation-btn" onClick={onNewConversation}>
                        <svg className="new-conv-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="new-conv-text">{t.sidebar.newConversation}</span>
                    </button>
                </div>

                <div className="sidebar-sections">
                    {conversations.length === 0 ? (
                        <div className="sidebar-empty">
                            <svg className="sidebar-empty-icon" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                            </svg>
                            <p className="sidebar-empty-title">{t.sidebar.emptyTitle}</p>
                            <p className="sidebar-empty-hint">{t.sidebar.emptyHint}</p>
                        </div>
                    ) : (
                        <>
                            {pinnedConversations.length > 0 && (
                                <div className="sidebar-group">
                                    <button
                                        type="button"
                                        className={`sidebar-group-header ${isPinnedGroupOpen ? '' : 'collapsed'}`}
                                        onClick={() => setIsPinnedGroupOpen(open => !open)}
                                        aria-expanded={isPinnedGroupOpen}
                                        aria-controls="pinned-group-items"
                                        title={isPinnedGroupOpen ? t.sidebar.pinnedCollapse : t.sidebar.pinnedExpand}
                                    >
                                        <span className="sidebar-group-title">{t.sidebar.pinnedGroup}</span>
                                        <svg className="sidebar-group-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M6 9l6 6 6-6" />
                                        </svg>
                                        <span className="sidebar-group-count">{pinnedConversations.length}</span>
                                    </button>

                                    {isPinnedGroupOpen && (
                                        <div className="sidebar-group-items" id="pinned-group-items">
                                            {pinnedConversations.map(renderConversation)}
                                        </div>
                                    )}
                                </div>
                            )}

                            {otherConversations.map(renderConversation)}
                        </>
                    )}
                </div>
            </div>

            {collapsed && (
                <div
                    className="floating-menu-btn"
                    onClick={handleFloatingClick}
                    onMouseDown={(e) => e.preventDefault()}
                    role="button"
                    tabIndex={0}
                    aria-label={t.sidebar.openMenu}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            )}

            {/* Rename Modal */}
            <Modal
                isOpen={isRenameModalOpen}
                onClose={() => {
                    setIsRenameModalOpen(false);
                    setNewConvName('');
                }}
                title={t.modals.renameTitle}
                confirmText={t.modals.renameConfirm}
                cancelText={t.modals.cancel}
                onConfirm={confirmRename}
            >
                <input
                    type="text"
                    value={newConvName}
                    onChange={(e) => setNewConvName(e.target.value)}
                    placeholder={t.modals.renamePlaceholder}
                    autoFocus
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') confirmRename();
                        if (e.key === 'Escape') setIsRenameModalOpen(false);
                    }}
                />
            </Modal>

            {/* Delete Modal */}
            <Modal
                isOpen={isDeleteModalOpen}
                onClose={() => {
                    setIsDeleteModalOpen(false);
                    setSelectedConvId(null);
                }}
                title={t.modals.deleteTitle}
                confirmText={t.modals.deleteConfirm}
                cancelText={t.modals.cancel}
                confirmVariant="danger"
                onConfirm={confirmDelete}
            >
                <p>
                    {t.modals.deleteQuestion} "<strong>{getConvName(selectedConvId)}</strong>"? {t.modals.deleteWarning}
                </p>
            </Modal>
        </>
    );
});

export default Sidebar;
