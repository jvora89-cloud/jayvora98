'use client';

import './globals.css';
import { AuthProvider } from '@/components/AuthProvider';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Jay Vora - AI-Powered Real Estate Agent | Troy & Sterling Heights, MI</title>
        <meta name="description" content="Michigan real estate agent combining computer science expertise with 7+ years experience. Serving Troy, Sterling Heights & Southeast Michigan with AI-powered market analysis and data-driven insights." />
        <meta name="keywords" content="Jay Vora, real estate agent, Troy MI, Sterling Heights, Michigan, AI real estate, CENTURY 21, computer science, machine learning, Oakland County, Macomb County" />
        <meta name="author" content="Jay Vora" />

        {/* Open Graph / Social Media */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Jay Vora - AI-Powered Real Estate Agent | Michigan" />
        <meta property="og:description" content="Michigan real estate agent combining computer science expertise with 7+ years experience. AI-powered market analysis for Southeast Michigan." />
        <meta property="og:url" content="https://jayvora.dev" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jay Vora - AI-Powered Real Estate Agent" />
        <meta name="twitter:description" content="Michigan real estate agent with computer science background. AI-powered insights for Troy, Sterling Heights & Southeast MI." />

        {/* Additional SEO */}
        <meta name="geo.region" content="US-MI" />
        <meta name="geo.placename" content="Troy, Sterling Heights, Michigan" />
        <link rel="canonical" href="https://jayvora.dev" />
      </head>
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
