'use client';

import Link from 'next/link';

export default function CertificationsPage() {
  return (
    <div className="container">
      <Link href="/" className="back-link">← Back</Link>

      <h2 className="content-heading">Licenses & Certifications</h2>

      <ul className="certification-list">
        <li>
          <div className="cert-title">Introduction to Deep Learning & Neural Networks with Keras</div>
          <div className="cert-org">IBM</div>
          <div className="cert-date">2024</div>
        </li>

        <li>
          <div className="cert-title">Machine Learning with Python</div>
          <div className="cert-org">IBM</div>
          <div className="cert-date">2024</div>
        </li>

        <li>
          <div className="cert-title">AI Agents in LangGraph</div>
          <div className="cert-org">DeepLearning.AI</div>
          <div className="cert-date">2024</div>
        </li>

        <li>
          <div className="cert-title">Agentic AI</div>
          <div className="cert-org">Vanderbilt University</div>
          <div className="cert-date">2024</div>
        </li>

        <li>
          <div className="cert-title">Introduction to Generative AI</div>
          <div className="cert-org">Google Cloud</div>
          <div className="cert-date">2024</div>
        </li>

        <li>
          <div className="cert-title">Real Estate License</div>
          <div className="cert-org">State of Michigan</div>
          <div className="cert-date">Active</div>
        </li>
      </ul>
    </div>
  );
}
