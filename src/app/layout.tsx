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
      <body className="bg-gray-100 font-vazir">
        <div className="sm:mb-40" />
        <Header />
        {children}
        <div className="mt-16 sm:m-0" />
        <FooterMobileNavbar />
      </body>
    </html>
  );
}
