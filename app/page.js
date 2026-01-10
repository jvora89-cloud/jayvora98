'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Comments from '@/components/Comments';

export default function Home() {
  return (
    <div className="container">
      <Header
        title="Jay Vora"
        subtitle="AI-Powered Real Estate Agent | Troy & Sterling Heights, Michigan"
      />

      <nav className="top-navigation">
        <Link href="/about" className="nav-link">About</Link>
        <Link href="/real-estate" className="nav-link">Real Estate</Link>
        <Link href="/background" className="nav-link">Background</Link>
        <Link href="/certifications" className="nav-link">Certifications</Link>
        <Link href="/skills" className="nav-link">Skills</Link>
        <Link href="/connect" className="nav-link">Connect</Link>
        <Link href="/chat" className="nav-link">Chat with Jay</Link>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h2 className="hero-headline">Combining Computer Science with Real Estate Excellence</h2>
            <p className="hero-subheadline">Data-driven insights, AI-powered market analysis, and personalized service for buyers, sellers, and investors across Southeast Michigan.</p>

            <div className="stats-row">
              <div className="stat-item">
                <div className="stat-number">7+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">AI</div>
                <div className="stat-label">Powered Analysis</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">SE MI</div>
                <div className="stat-label">Market Expert</div>
              </div>
            </div>

            <div className="cta-buttons">
              <Link href="/connect" className="cta-primary">Get in Touch</Link>
              <Link href="/real-estate" className="cta-secondary">View Services</Link>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="value-section">
          <h3 className="section-heading">Why Choose AI-Powered Real Estate?</h3>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎓</div>
              <h4>Computer Science Degree</h4>
              <p>Oakland University graduate bringing technical expertise to real estate</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤖</div>
              <h4>AI & ML Certified</h4>
              <p>IBM, Google Cloud, and Vanderbilt certifications in machine learning and generative AI</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h4>Data-Driven Insights</h4>
              <p>Advanced market analysis and predictive modeling for smarter decisions</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h4>CENTURY 21 Professional</h4>
              <p>Backed by one of the most recognized brands in real estate</p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section">
          <h3 className="section-heading">What Clients Say</h3>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-text">
                "Jay's unique approach combining AI analysis with traditional real estate knowledge helped us find the perfect home in Troy. His market insights were invaluable."
              </div>
              <div className="testimonial-author">
                <strong>Sarah M.</strong>
                <span>Home Buyer, Troy</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-text">
                "We sold our Sterling Heights home 10% above asking price in just 12 days. Jay's data-driven pricing strategy and marketing expertise made all the difference."
              </div>
              <div className="testimonial-author">
                <strong>Michael & Lisa R.</strong>
                <span>Home Sellers, Sterling Heights</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-text">
                "As an investor, I appreciate Jay's analytical approach. His AI-powered ROI projections and market forecasts have helped me make confident investment decisions."
              </div>
              <div className="testimonial-author">
                <strong>David K.</strong>
                <span>Real Estate Investor</span>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="service-areas-section">
          <h3 className="section-heading">Serving Southeast Michigan</h3>
          <p className="section-intro">Specializing in Oakland and Macomb Counties with deep local market knowledge</p>
          <div className="areas-list">
            <span className="area-badge">Troy</span>
            <span className="area-badge">Sterling Heights</span>
            <span className="area-badge">Rochester Hills</span>
            <span className="area-badge">Royal Oak</span>
            <span className="area-badge">Birmingham</span>
            <span className="area-badge">Bloomfield Hills</span>
            <span className="area-badge">Novi</span>
            <span className="area-badge">Farmington Hills</span>
            <span className="area-badge">Warren</span>
          </div>
          <p className="areas-note">+ Extended coverage throughout Oakland & Macomb Counties</p>
        </section>

        {/* CTA Section */}
        <section className="final-cta-section">
          <h3 className="cta-heading">Ready to Experience AI-Powered Real Estate?</h3>
          <p className="cta-text">Whether buying, selling, or investing, let's discuss how data-driven insights can transform your real estate journey.</p>
          <div className="cta-buttons">
            <Link href="/chat" className="cta-primary">Chat with Jay</Link>
            <Link href="/connect" className="cta-secondary">Send a Message</Link>
          </div>
        </section>
      </main>

      <Comments />
    </div>
  );
}
