import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';

// Renders a message body. The bot replies come back as markdown (bold, lists,
// links, tables…), so they go through react-markdown; the user's own text is
// shown verbatim — it was typed literally and must not be reinterpreted.
//
// Security: react-markdown builds React elements (no innerHTML) and does not
// render raw HTML, so bot/LLM output can't inject markup. Links are forced to
// open safely in a new tab.
const markdownComponents = {
    a: ({ node, ...props }) => (
        <a target="_blank" rel="noopener noreferrer" {...props} />
    ),
};

const MessageContent = React.memo(function MessageContent({ type, content }) {
    if (type !== 'bot' || typeof content !== 'string') {
        return content;
    }

    return (
        <div className="markdown-body">
            <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkBreaks]}
                components={markdownComponents}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
});

export default MessageContent;
