import type { Metadata } from 'next';
import { Inter, Literata, Geist_Mono } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--f-inter', display: 'swap' });
const lit = Literata({ subsets: ['latin'], weight: ['300', '400', '500', '600'], style: ['normal', 'italic'], variable: '--f-lit', display: 'swap' });
const geist = Geist_Mono({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--f-geist', display: 'swap' });

export const metadata: Metadata = {
  title: 'RMI Agentic — Insurance for AI agents that handle your money',
  description: 'Insurance that protects you and your customers every time your AI agent pays.',
  icons: { icon: '/rmi-logo-dark.svg', apple: '/rmi-logo-dark.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${lit.variable} ${geist.variable}`}>
      <body>
        <noscript><style>{'.reveal{opacity:1!important;transform:none!important}'}</style></noscript>
        <div className="page">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
