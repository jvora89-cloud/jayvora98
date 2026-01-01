'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useAuth } from '@/components/AuthProvider';

export default function ChatPage() {
  const { user, signInWithGoogle } = useAuth();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');

    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage })
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle specific error cases
        if (response.status === 429) {
          setMessages((prev) => [...prev, {
            role: 'assistant',
            content: 'The AI service is currently at capacity. Please contact Jay directly through the Connect page for assistance.'
          }]);
        } else {
          setMessages((prev) => [...prev, {
            role: 'assistant',
            content: data.error || 'Sorry, I encountered an error. Please try again or contact Jay directly.'
          }]);
        }
        return;
      }

      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages((prev) => [...prev, {
        role: 'assistant',
        content: 'Sorry, I encountered a connection error. Please try again or visit the Connect page to reach Jay directly.'
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="container">
      <header>
        <div className="chat-header">
          <Link href="/" className="back-link">← Back</Link>
          <div>
            <h1>Chat with Jay</h1>
            <p className="subtitle">AI-powered conversation about real estate, tech, and more</p>
          </div>
        </div>

        <div id="auth-status">
          {user ? (
            <div id="user-info">
              <img
                src={user.photoURL || ''}
                className="user-photo-small"
                alt={user.displayName || 'User'}
              />
              <span id="user-name-display">{user.displayName || 'User'}</span>
            </div>
          ) : (
            <div id="auth-required">
              <p>Please sign in to chat</p>
              <button onClick={signInWithGoogle} className="auth-btn">
                Sign In with Google
              </button>
            </div>
          )}
        </div>
      </header>

      <main id="chat-container">
        <div id="chat-messages">
          <div className="ai-message welcome-message">
            <div className="message-content">
              <p>Hi! I&apos;m Jay Vora (AI assistant). I&apos;m here to help answer your questions about:</p>
              <ul>
                <li>Real estate in Southeast Michigan</li>
                <li>AI and machine learning technologies</li>
                <li>My background and expertise</li>
                <li>How I can help you find your dream home</li>
              </ul>
              <p>What would you like to know?</p>
            </div>
          </div>

          {messages.map((msg, index) => (
            <div key={index} className={msg.role === 'user' ? 'user-message' : 'ai-message'}>
              <div className="message-content">
                <p>{msg.content}</p>
              </div>
            </div>
          ))}

          {loading && (
            <div id="loading-indicator">
              <div className="typing-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <p>Jay is typing...</p>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {user && (
          <div id="chat-input-container">
            <div id="chat-input-form">
              <textarea
                id="message-input"
                placeholder="Type your message..."
                rows="2"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button
                id="send-btn"
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                className="primary-btn"
              >
                Send
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
