import HeroBanner from '@/components/HeroBanner/HeroBanner';
import HomeFooter from '@/components/HomeFooter/HomeFooter';
import OfferSection from '@/components/OfferSection/OfferSection';

export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="flex flex-col justify-center w-full max-w-screen-xl p-3">
        <HeroBanner />
        <OfferSection />
        <HomeFooter />
      </div>
    </main>
  );
}
