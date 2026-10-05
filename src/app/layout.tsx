import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import LayoutClientWrapper from '@/components/LayoutClientWrapper';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'VT Logistic Services | Enterprise Fleet Solutions & Verified Drivers',
  description:
    'Premier B2B fleet operations, Pan-India jockey movement, and 10,000+ verified commercial drivers based in Jhajjar, Haryana. Guaranteed SLA governance and zero-damage transit.',
  keywords: [
    'Logistics Services',
    'Jockey Movement',
    'Commercial Drivers',
    'Fleet Management',
    'Jhajjar Haryana Logistics',
    'B2B Logistics India',
    'Vehicle Relocation',
  ],
  authors: [{ name: 'VT Logistic Services' }],
  icons: {
    icon: '/images/logo.jpeg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable} scroll-smooth`}>
      <body className="bg-[#F8FAFC] text-slate-800 antialiased selection:bg-brand-600 selection:text-white">
        <LayoutClientWrapper>{children}</LayoutClientWrapper>
      </body>
    </html>
  );
}
