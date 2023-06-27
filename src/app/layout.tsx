import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ما کامرس',
  description: 'توسعه داده شده توسط امید نشاطی'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
