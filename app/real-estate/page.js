'use client';

import Link from 'next/link';

export default function RealEstatePage() {
  return (
    <div className="container">
      <Link href="/" className="back-link">← Back</Link>

      <h2 className="content-heading">Real Estate Services</h2>

      <p>As a real estate agent with CENTURY 21 Professionals, Jay Vora provides comprehensive real estate services throughout the Troy and Sterling Heights areas of Michigan.</p>

      <div className="highlight">
        <p><strong>CENTURY 21 Professionals</strong></p>
        <p>Part of one of the most recognized brands in real estate, offering clients access to extensive resources and market reach.</p>
      </div>

      <p><strong>Service Areas - Michigan</strong></p>

      <p>Jay serves clients throughout Southeast Michigan, specializing in the greater Detroit metropolitan area with deep expertise in Oakland and Macomb counties.</p>

      <p><strong>Primary Markets:</strong></p>
      <ul className="skill-category">
        <li>Troy</li>
        <li>Sterling Heights</li>
        <li>Rochester & Rochester Hills</li>
        <li>Royal Oak</li>
        <li>Birmingham</li>
        <li>Bloomfield Hills</li>
        <li>Novi</li>
        <li>Farmington & Farmington Hills</li>
        <li>Warren</li>
        <li>Clinton Township</li>
      </ul>

      <p><strong>Extended Coverage:</strong> Auburn Hills, Southfield, West Bloomfield, Shelby Township, Macomb Township, Utica, and surrounding Oakland and Macomb County communities.</p>

      <p>With deep knowledge of Southeast Michigan&apos;s diverse neighborhoods, school districts, and market dynamics, Jay provides localized expertise backed by AI-powered market analysis.</p>

      <p><strong>Approach</strong></p>

      <p>Combining technical knowledge with real estate expertise, Jay provides clients with data-driven market insights, thorough property analysis, and strategic guidance throughout the buying or selling process.</p>

      <ul className="service-list">
        <li>
          <div className="service-title">Buyer Representation</div>
          <div className="service-description">Helping clients find and secure the right property with comprehensive market analysis and skilled negotiation.</div>
        </li>

        <li>
          <div className="service-title">Seller Representation</div>
          <div className="service-description">Marketing properties effectively and maximizing value through strategic pricing and professional presentation.</div>
        </li>

        <li>
          <div className="service-title">Market Analysis</div>
          <div className="service-description">Providing detailed, data-driven insights into local market conditions and property values.</div>
        </li>

        <li>
          <div className="service-title">Investment Properties</div>
          <div className="service-description">Assisting investors in identifying opportunities and analyzing potential returns.</div>
        </li>
      </ul>

      <p>Whether you&apos;re entering the market for the first time or are an experienced buyer or seller, Jay&apos;s goal is to provide professional service and expert guidance at every step.</p>
    </div>
  );
}
