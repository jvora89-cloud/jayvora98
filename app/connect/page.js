'use client';

import Link from 'next/link';

export default function ConnectPage() {
  return (
    <div className="container">
      <Link href="/" className="back-link">← Back</Link>

      <h2 className="content-heading">Let's Connect</h2>

      <p className="connect-intro">Ready to discuss your real estate needs or explore how AI-powered insights can transform your property decisions? I'd love to hear from you.</p>

      <div className="contact-cards">
        <div className="contact-card">
          <div className="contact-icon">🏠</div>
          <h3>Real Estate Services</h3>
          <p>Buying, selling, or investing in Southeast Michigan? Let's discuss how data-driven insights can help you make smarter decisions.</p>
          <a href="https://www.century21.com/real-estate-agent/profile/jay-vora-P48936604" target="_blank" rel="noopener noreferrer" className="contact-cta">
            View CENTURY 21 Profile →
          </a>
        </div>

        <div className="contact-card">
          <div className="contact-icon">💬</div>
          <h3>Chat with AI Assistant</h3>
          <p>Have questions about the market, specific properties, or investment strategies? Chat with my AI-powered assistant anytime.</p>
          <Link href="/chat" className="contact-cta">
            Start Conversation →
          </Link>
        </div>

        <div className="contact-card">
          <div className="contact-icon">💼</div>
          <h3>Professional Network</h3>
          <p>Connect for professional networking, AI/tech collaboration, or real estate industry discussions.</p>
          <a href="https://www.linkedin.com/in/jayvora98/" target="_blank" rel="noopener noreferrer" className="contact-cta">
            Connect on LinkedIn →
          </a>
        </div>
      </div>

      <div className="response-promise">
        <h3>Response Commitment</h3>
        <p>I typically respond to all inquiries within 24 hours. For urgent real estate matters, use the CENTURY 21 profile link above for the fastest response.</p>
      </div>

      <div className="service-highlight">
        <h3>What to Expect</h3>
        <div className="expectations-list">
          <div className="expectation-item">
            <strong>Personalized Consultation</strong>
            <p>Every client's situation is unique. I take time to understand your specific goals and requirements.</p>
          </div>
          <div className="expectation-item">
            <strong>Data-Driven Insights</strong>
            <p>Receive AI-powered market analysis and predictive modeling tailored to your interests.</p>
          </div>
          <div className="expectation-item">
            <strong>No Pressure Approach</strong>
            <p>Whether you're ready to move forward or just exploring options, I'm here to provide information and guidance.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
