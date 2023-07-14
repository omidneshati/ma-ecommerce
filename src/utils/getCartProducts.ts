import CartProductType from '@/interfaces/Cart/CartProductType';

const getCartProducts = (): CartProductType | undefined => {
  const cartProducts = localStorage.getItem('cart');
  if (cartProducts) return JSON.parse(cartProducts);

  return undefined;
};

export default getCartProducts;
