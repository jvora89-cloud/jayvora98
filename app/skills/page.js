'use client';

import Link from 'next/link';

export default function SkillsPage() {
  return (
    <div className="container">
      <Link href="/" className="back-link">← Back</Link>

      <h2 className="content-heading">Skills & Expertise</h2>

      <p><strong>Technical Skills</strong></p>
      <ul className="skill-category">
        <li>Machine Learning</li>
        <li>Deep Learning & Neural Networks</li>
        <li>AI Agents & Agentic AI</li>
        <li>Generative AI</li>
        <li>Python Programming</li>
        <li>Data Analysis</li>
        <li>Computer Vision</li>
      </ul>

      <p><strong>Real Estate Expertise</strong></p>
      <ul className="skill-category">
        <li>Residential Real Estate</li>
        <li>Property Valuation</li>
        <li>Market Analysis</li>
        <li>Buyer Representation</li>
        <li>Seller Representation</li>
        <li>Investment Property Analysis</li>
        <li>Negotiation</li>
      </ul>

      <p><strong>Southeast Michigan Markets</strong></p>
      <ul className="skill-category">
        <li>Oakland County (Troy, Birmingham, Royal Oak, etc.)</li>
        <li>Macomb County (Sterling Heights, Warren, etc.)</li>
        <li>Wayne County (Detroit metro area)</li>
        <li>Livingston County</li>
        <li>Washtenaw County</li>
      </ul>
    </div>
  );
}
