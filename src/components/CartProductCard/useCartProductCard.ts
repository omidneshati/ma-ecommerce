import ProductType from '@/interfaces/Product/Product';
import addToCart from '@/utils/addToCart';
import removeFromCart from '@/utils/removeFromCart';
import { useState } from 'react';

function useCartProductCard({ product, quantity }: { product: ProductType; quantity: number }) {
  const [number, setNumber] = useState(quantity);
  const addToCartHandler = () => {
    addToCart(product);
    setNumber((v) => v + 1);
  };
  const removeFromCartHandler = () => {
    removeFromCart(product);
    setNumber((v) => v - 1);
  };

  return {
    number,
    addToCartHandler,
    removeFromCartHandler
  };
}

export default useCartProductCard;
