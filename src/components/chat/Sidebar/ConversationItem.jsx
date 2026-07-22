import React from 'react';

// A single conversation row in the sidebar: name, pinned indicator and
// rename / pin / delete actions. Memoized so the list only re-renders
// the rows whose props actually changed.
const ConversationItem = React.memo(function ConversationItem({
    conv,
    isActive,
    isHighlighted,
    itemRef,
    labels,
    onSelect,
    onRename,
    onPin,
    onDelete,
}) {
    return (
        <div
            ref={itemRef}
            data-section-id={conv.id}
            className={`sidebar-section ${isActive ? 'active' : ''} ${conv.pinned ? 'pinned' : ''} ${isHighlighted ? 'highlight' : ''}`}
            onClick={() => onSelect(conv.id)}
            title={conv.nombreCompleto}
        >
            {conv.pinned && (
                <svg className="pinned-indicator" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 12V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v8l-2 2v2h5.2v6h1.6v-6H18v-2l-2-2z" />
                </svg>
            )}
            <span className="section-name">{conv.nombre}</span>
            <span className="conversation-actions">
                <button
                    className="action-btn rename-btn"
                    onClick={(e) => onRename(e, conv.id)}
                    title={labels.rename}
                    aria-label={labels.rename}
                >
                    <svg className="rename-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                    </svg>
                </button>
                <button
                    className={`action-btn pin-btn ${conv.pinned ? 'pinned' : ''}`}
                    onClick={(e) => onPin(e, conv.id)}
                    title={conv.pinned ? labels.unpin : labels.pin}
                    aria-label={conv.pinned ? labels.unpin : labels.pin}
                >
                    <svg className="pin-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16 12V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v8l-2 2v2h5.2v6h1.6v-6H18v-2l-2-2z" />
                    </svg>
                </button>
                <button
                    className="action-btn delete-btn"
                    onClick={(e) => onDelete(e, conv.id)}
                    title={labels.delete}
                    aria-label={labels.delete}
                >
                    <svg className="delete-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                    </svg>
                </button>
            </span>
        </div>
    );
});

export default ConversationItem;
