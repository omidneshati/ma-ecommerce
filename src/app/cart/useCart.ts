import CartProductType from '@/interfaces/Cart/CartProductType';
import getCartProducts from '@/utils/getCartProducts';
import { useEffect, useState } from 'react';

function useCart() {
  const [products, setProducts] = useState<CartProductType>();
  useEffect(() => {
    setProducts(getCartProducts());
  }, []);

  return { products };
}

export default useCart;
