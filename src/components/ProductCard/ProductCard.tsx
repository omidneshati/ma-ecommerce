import ProductType from '@/interfaces/Product/Product';
import toFarsiNumber from '@/utils/toFarsiNumber';
import Image from 'next/image';
import Link from 'next/link';
import AddToCartBtn from '../AddToCartBtn/AddToCartBtn';

function ProductCard({ ...product }: ProductType) {
  return (
    <div className="relative w-full">
      <Link
        href={`/product/${product.id}`}
        className="inline-flex flex-col items-center w-full gap-2 p-1 bg-white border border-gray-600 rounded-lg h-72">
        <div className="flex items-center grow">
          <Image src={product.image} alt={product.title} width={100} height={100} />
        </div>
        <span className="px-3 leading-none text-left">{product.title}</span>
        <span className="font-bold">{toFarsiNumber(product.price)} تومان</span>
      </Link>
      <AddToCartBtn
        product={product}
        className="absolute top-0 right-0 flex items-center justify-center p-2 text-3xl text-white w-14 h-14 rounded-ss-md bg-green-800/70 rounded-ee-md">
        +
      </AddToCartBtn>
    </div>
  );
}

export default ProductCard;
