import ProductType from '@/interfaces/Product/Product';
import Image from 'next/image';
import Link from 'next/link';

function ProductCard({ id, image, title, price }: ProductType) {
  return (
    <Link href={`/product/${id}`} className="relative inline-flex flex-col items-center">
      <div className="absolute top-0 right-0 rounded-es-md rounded-ss-md">+</div>
      <Image src={image} alt={title} width={120} height={124} />
      <span>{title}</span>
      <span>{price}</span>
    </Link>
  );
}

export default ProductCard;
