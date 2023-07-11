import HeroBanner from '@/components/HeroBanner/HeroBanner';
import HomeFooter from '@/components/HomeFooter/HomeFooter';
import OfferSection from '@/components/OfferSection/OfferSection';

export default function Home() {
  return (
    <main className="flex flex-col justify-center w-full p-3">
      <HeroBanner />
      <OfferSection />
      <HomeFooter />
    </main>
  );
}
