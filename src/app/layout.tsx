import './globals.css';
import FooterMobileNavbar from '@/components/FooterMobileNavbar/FooterMobileNavbar';
import Header from '@/components/Header/Header';

export const metadata = {
  title: 'ما کامرس',
  description: 'توسعه داده شده توسط امید نشاطی'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="font-vazir">
        <div className="mb-40" />
        <Header />
        {children}
        <FooterMobileNavbar />
      </body>
    </html>
  );
}
