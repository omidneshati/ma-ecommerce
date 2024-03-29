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

      <body className="flex justify-center bg-gray-100 font-vazir">
        <div className="w-full max-w-screen-xl">
          <div className="sm:mb-48" />
          <Header />
          {children}
          <div className="mt-16 sm:m-0" />
          <FooterMobileNavbar />
        </div>
      </body>
    </html>
  );
}
