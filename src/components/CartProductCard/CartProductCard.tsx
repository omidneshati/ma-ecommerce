'use client';

import Image from 'next/image';
import ProductType from '@/interfaces/Product/Product';
import useCartProductCard from './useCartProductCard';

function CartProductCard({ product, quantity }: { product: ProductType; quantity: number }) {
  const { addToCartHandler, number, removeFromCartHandler } = useCartProductCard({
    product,
    quantity
  });

  if (number === 0) return null;

  return (
    <div className="flex items-center justify-between w-full gap-2 p-2 bg-white rounded-md sm:gap-6 sm:p-6">
      <div className="flex gap-4">
        <div className="flex items-center justify-center w-24 h-24">
          <Image
            src={product.image}
            alt={product.title}
            width={100}
            height={100}
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-between text-sm sm:text-base">
          <span className="max-w-xs text-center" dir="ltr">
            {product.title}
          </span>
          <span>قیمت: {product.price}</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <span className="font-bold sm:text-xl whitespace-nowrap">تعداد: {number}</span>
        <div>
          <button
            className="top-0 right-0 flex items-center justify-center p-2 text-3xl text-white w-14 h-14 bg-green-800/70 "
            onClick={addToCartHandler}>
            +
          </button>
          <button
            className="top-0 right-0 flex items-center justify-center p-2 text-3xl text-white w-14 h-14 bg-red-800/70 "
            onClick={removeFromCartHandler}>
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartProductCard;
