'use client';

import ProductType from '@/interfaces/Product/Product';
import removeFromCart from '@/utils/removeFromCart';
import { ReactNode } from 'react';

function RemoveFromCartBtn({
  product,
  className,
  children
}: {
  product: ProductType;
  className: string;
  children: ReactNode;
}) {
  const removeFromCartHandler = () => {
    removeFromCart(product);
  };
  return (
    <button className={className} onClick={removeFromCartHandler}>
      {children}
    </button>
  );
}

export default RemoveFromCartBtn;
