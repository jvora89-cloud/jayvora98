'use client';

import Link from 'next/link';

export default function ConnectPage() {
  return (
    <div className="container">
      <Link href="/" className="back-link">← Back</Link>

      <h2 className="content-heading">Connect</h2>

      <p>Connect with Jay Vora for real estate services, technical collaboration, or professional inquiries.</p>

      <ul className="social-links">
        <li>
          <a href="https://www.linkedin.com/in/jayvora98/" target="_blank" rel="noopener noreferrer">
            LinkedIn Profile
          </a>
        </li>
        <li>
          <a href="https://www.century21.com/real-estate-agent/profile/jay-vora-P48936604" target="_blank" rel="noopener noreferrer">
            CENTURY 21 Profile
          </a>
        </li>
      </ul>

      <p><strong>Real Estate Services</strong></p>
      <p>For inquiries about buying, selling, or investing in Southeast Michigan real estate, please reach out through the links above.</p>

      <p><strong>Professional Network</strong></p>
      <p>Connect on LinkedIn for professional networking, AI/tech discussions, or real estate industry collaboration.</p>
    </div>
  );
}
