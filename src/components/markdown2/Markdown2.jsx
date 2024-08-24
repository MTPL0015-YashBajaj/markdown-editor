import React, { useState } from 'react';
import {marked} from 'marked';

function Markdown2() {
  const [markdown, setMarkdown] = useState('');

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  const getMarkdownText = () => {
    const rawMarkup = marked(markdown, { sanitize: true });
    return { __html: rawMarkup };
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Editor */}
      <textarea
        style={{ width: '50%', padding: '10px', fontSize: '16px' }}
        value={markdown}
        onChange={handleChange}
        placeholder="Enter your markdown here..."
      />
      
      {/* Preview */}
      <div
        style={{
          width: '50%',
          padding: '10px',
          backgroundColor: '#f4f4f4',
          borderLeft: '1px solid #ddd',
          overflowY: 'scroll'
        }}
        dangerouslySetInnerHTML={getMarkdownText()}
      />
    </div>
  );
}

export default Markdown2;
