import React from 'react';
import './ChatArea.css';
import MessageList from './MessageList/MessageList';
import ChatHeroHeader from './ChatHeroHeader/ChatHeroHeader';

const ChatArea = React.memo(function ChatArea({ messages = [], isOffline = false }) {
    return (
        <div className="chat-area">
            <ChatHeroHeader isOffline={isOffline} />
            <MessageList messages={messages} />
        </div>
    );
});

export default ChatArea;
