import ProductType from '@/interfaces/Product/Product';
import toFarsiNumber from '@/utils/toFarsiNumber';
import Image from 'next/image';
import Link from 'next/link';

function ProductCard({ id, image, title, price }: ProductType) {
  return (
    <Link
      href={`/product/${id}`}
      className="relative inline-flex flex-col items-center w-full gap-2 p-1 border border-gray-600 rounded-lg h-72">
      <div className="absolute top-0 right-0 flex items-center justify-center w-1/5 text-3xl text-white rounded-ss-md bg-green-800/70 rounded-ee-md h-1/6">
        +
      </div>
      <div className="flex items-center grow">
        <Image src={image} alt={title} width={100} height={100} />
      </div>
      <span className="px-3 leading-none text-left">{title}</span>
      <span className="font-bold">{toFarsiNumber(price)} تومان</span>
    </Link>
  );
}

export default ProductCard;
