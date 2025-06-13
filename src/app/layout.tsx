import { Inter } from 'next/font/google';

import Footer from '@/components/layout/Footer';
import '@/styles/globals.css';
import Navbar from '@/components/layout/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Smart Technology Solutions',
  description: 'Providing cutting-edge technology solutions for homes and businesses',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <main className="min-h-screen pt-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}