import FooterMobileNavbar from '@/components/FooterMobileNavbar/FooterMobileNavbar';
import './globals.css';

export const metadata = {
  title: 'ما کامرس',
  description: 'توسعه داده شده توسط امید نشاطی'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="font-vazir">
        {children}
        <FooterMobileNavbar />
      </body>
    </html>
  );
}
