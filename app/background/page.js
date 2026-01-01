'use client';

import Link from 'next/link';

export default function BackgroundPage() {
  return (
    <div className="container">
      <Link href="/" className="back-link">← Back</Link>

      <h2 className="content-heading">Background</h2>

      <p><strong>Education</strong></p>
      <p>Bachelor of Science in Computer Science<br />Oakland University, 2024</p>

      <p><strong>Professional Experience</strong></p>
      <p>Real Estate Agent<br />CENTURY 21 Professionals</p>
      <p>Serving clients in Southeast Michigan with a focus on Troy, Sterling Heights, and surrounding areas in Oakland and Macomb counties.</p>

      <p><strong>Technical Background</strong></p>
      <p>Expertise in machine learning, artificial intelligence, and deep learning with practical applications in real estate market analysis and property valuation modeling.</p>
    </div>
  );
}
