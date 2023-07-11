import Image from 'next/image';
import Link from 'next/link';

interface CategoryCardProps {
  label: string;
  img: string;
}
function CategoryCard({ label, img }: CategoryCardProps) {
  return (
    <Link
      href={`/category/${label.replace(' ', '-')}`}
      className="flex flex-col items-center justify-between w-full gap-4 px-3 py-8 bg-white border border-gray-100 rounded-md shadow-md">
      <Image className="grow" src={img} width="90" height="70" alt={label} />
      <span className="font-bold justify-self-end">{label}</span>
    </Link>
  );
}

export default CategoryCard;
