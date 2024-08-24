import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

function Markdown1() {
  const [markdown, setMarkdown] = useState('');

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', padding: '20px', boxSizing: 'border-box' }}>
      {/* Editor */}
      <textarea
        style={{
          flex: 1,
          padding: '10px',
          fontSize: '16px',
          marginBottom: '10px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          resize: 'none',
          width: '100%',
          height: '50%',
          boxSizing: 'border-box',
        }}
        value={markdown}
        onChange={handleChange}
        placeholder="Enter your markdown here..."
      />
      
      {/* Preview */}
      <div
        style={{
          flex: 1,
          padding: '10px',
          backgroundColor: '#f4f4f4',
          border: '1px solid #ddd',
          borderRadius: '4px',
          overflowY: 'auto',
          width: '100%',
          height: '50%',
          boxSizing: 'border-box',
        }}
      >
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}

export default Markdown1;
