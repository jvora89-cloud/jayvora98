'use client';

import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="container">
      <Link href="/" className="back-link">← Back</Link>

      <h2 className="content-heading">About</h2>

      <p>Jay Vora is a real estate professional serving the Troy and Sterling Heights areas of Michigan who stands at the intersection of artificial intelligence and real estate. With a Computer Science degree from Oakland University and advanced certifications in machine learning, deep learning, and AI agents, Jay brings a truly modern approach to real estate that leverages cutting-edge technology.</p>

      <div className="highlight">
        <p><strong>AI-Powered Real Estate</strong></p>
        <p>Combining computer science expertise with certifications from IBM, Google Cloud, and Vanderbilt University in machine learning and generative AI to deliver data-driven insights clients can&apos;t find elsewhere.</p>
      </div>

      <p>Based in Troy, Michigan, Jay works with CENTURY 21 Professionals serving clients throughout Southeast Michigan. With deep expertise in Oakland and Macomb counties—including Troy, Sterling Heights, Rochester, Royal Oak, Birmingham, Bloomfield Hills, Novi, Farmington Hills, Warren, and surrounding communities—Jay brings together advanced AI capabilities and local market knowledge to the greater Detroit metropolitan area.</p>

      <p><strong>A Unique Technical Edge</strong></p>

      <p>Jay&apos;s expertise spans machine learning, deep learning with neural networks, AI agents, and generative AI—technologies that are revolutionizing how real estate decisions are made. This technical foundation enables sophisticated property valuation modeling, predictive market analysis, and data-driven investment strategies that go far beyond traditional comparative market analysis.</p>

      <p><strong>Certifications That Matter</strong></p>

      <p>With recent certifications in Introduction to Deep Learning & Neural Networks (IBM), Machine Learning with Python (IBM), AI Agents and Agentic AI (Vanderbilt), and Introduction to Generative AI (Google Cloud), Jay stays at the forefront of AI technology and applies these capabilities directly to real estate practice.</p>

      <p><strong>The Result</strong></p>

      <p>Whether you&apos;re buying your first home, selling a property, or building an investment portfolio, Jay&apos;s unique combination of AI expertise and real estate experience provides insights that transform how you approach property decisions. This isn&apos;t just real estate with a tech-savvy agent—it&apos;s real estate powered by artificial intelligence and backed by over 7 years of market experience.</p>
    </div>
  );
}
