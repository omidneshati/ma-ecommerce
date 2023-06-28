import Image from 'next/image';
import Link from 'next/link';

function HeroBanner() {
  return (
    <div className="sm:h-[60vh] grid sm:grid-cols-3 sm:grid-rows-2 gap-3">
      <Link href="" className="relative block h-full col-span-2 row-span-2 ">
        <Image src="/images/img1.png" alt="img1" fill className="rounded-md" />
      </Link>
      <Link href="" className="relative block h-full col-span-1 row-span-1 ">
        <Image src="/images/img2.png" alt="img2" fill className="rounded-md" />
      </Link>
      <Link href="" className="relative block h-full col-span-1 row-span-1 ">
        <Image src="/images/img3.png" alt="img3" fill className="rounded-md" />
      </Link>
    </div>
  );
}

export default HeroBanner;
