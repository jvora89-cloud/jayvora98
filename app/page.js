'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Comments from '@/components/Comments';

export default function Home() {
  return (
    <div className="container">
      <Header
        title="Jay Vora"
        subtitle="Michigan Real Estate Agent | AI & Computer Science"
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
        <section>
          <p>Welcome to my website. Use the navigation above to explore my background, real estate services, and expertise in AI and computer science.</p>
        </section>
      </main>

      <Comments />
    </div>
  );
}
