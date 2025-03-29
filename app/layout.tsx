import type { Metadata } from 'next';
import { Geist, Geist_Mono, Funnel_Display } from 'next/font/google';
import './globals.css';
import Header from './components/ui/Header';
import { SessionProvider } from 'next-auth/react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const funnelDisplay = Funnel_Display({
  variable: '--font-funnel-display',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Aqutte',
  description: 'Shop quality products.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SessionProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${funnelDisplay.variable} antialiased 2xl:container 2xl:mx-auto hide-scrollbar relative`}>
          <Header />
          {children}
        </body>
      </SessionProvider>
    </html>
  );
}
