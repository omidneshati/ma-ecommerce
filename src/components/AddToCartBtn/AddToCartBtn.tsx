'use client';

import ProductType from '@/interfaces/Product/Product';
import addToCart from '@/utils/addToCart';
import { ReactNode } from 'react';

function AddToCartBtn({
  product,
  className,
  children
}: {
  product: ProductType;
  className: string;
  children: ReactNode;
}) {
  const addToCartHandler = () => {
    addToCart(product);
  };
  return (
    <button className={className} onClick={addToCartHandler}>
      {children}
    </button>
  );
}

export default AddToCartBtn;
