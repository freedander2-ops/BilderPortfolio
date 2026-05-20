import './globals.css';
import { Montserrat, Playfair_Display } from 'next/font/google';
import Header from '@/components/layout/Header';
import CustomCursor from '@/components/ui/CustomCursor';
import AmbientAtmosphere from '@/components/ui/AmbientAtmosphere';
import Footer from '@/components/layout/Footer';
import StickyMobileActions from '@/components/ui/StickyMobileActions';

const montserrat = Montserrat({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '700']
});

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-playfair',
  style: ['normal', 'italic'],
  weight: ['400', '500', '700']
});

export const metadata = {
  title: 'Максим Сергеевич | Премиальная отделка интерьеров',
  description: 'Высококачественная отделка квартир и домов в Москве. Опыт более 15 лет. Гарантия на все работы.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${montserrat.variable} ${playfair.variable} font-sans bg-[#050505] text-white selection:bg-orange-500/30`}>
        <AmbientAtmosphere />
        <CustomCursor />
        <StickyMobileActions />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
