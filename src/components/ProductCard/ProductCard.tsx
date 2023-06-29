import Image from 'next/image';
import Link from 'next/link';

function ProductCard({
  id,
  imgSrc,
  title,
  price
}: {
  imgSrc: string;
  price: string;
  title: string;
  id: number;
}) {
  return (
    <Link href={`/product/${id}`} className="relative inline-flex flex-col items-center">
      <div className="absolute top-0 right-0 rounded-es-md rounded-ss-md">+</div>
      <Image src={imgSrc} alt={title} width={120} height={124} />
      <span>{title}</span>
      <span>{price}</span>
    </Link>
  );
}

export default ProductCard;
