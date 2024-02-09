// src/UrlChecker.js
import React, { useState } from 'react';

function UrlChecker() {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState('');

  const checkUrl = async () => {
    try {
      const response = await fetch('/api/check-url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      if (response.ok) {
        const data = await response.json();
        setResult(data.message);
      } else {
        setResult('URL not found');
      }
    } catch (error) {
      setResult('Error checking URL');
    }
  };

  return (
    <div>
      <h1>URL Checker</h1>
      <div>
        <input
          type="text"
          placeholder="Enter URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button onClick={checkUrl}>Check</button>
      </div>
      {result && <p>Result: {result}</p>}
    </div>
  );
}

export default UrlChecker;
