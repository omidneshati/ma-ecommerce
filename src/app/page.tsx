import HeroBanner from '@/components/HeroBanner/HeroBanner';

export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="flex flex-col justify-center w-full max-w-screen-xl p-3">
        <HeroBanner />
      </div>
    </main>
  );
}
