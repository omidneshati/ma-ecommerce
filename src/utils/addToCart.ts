import CartProductType from '@/interfaces/Cart/CartProductType';
import ProductType from '@/interfaces/Product/Product';
import getCartProducts from './getCartProducts';

const addToCart = (product: ProductType) => {
  const storedCart = getCartProducts();

  if (storedCart && storedCart[product.id]) {
    if (storedCart[product.id].quantity > 1) {
      const newCart: CartProductType = {
        ...storedCart,
        [product.id]: {
          product,
          quantity: storedCart[product.id].quantity - 1
        }
      };

      localStorage.setItem('cart', JSON.stringify(newCart));
    } else {
      delete storedCart[product.id];
      localStorage.setItem('cart', JSON.stringify(storedCart));
    }
  }
};

export default addToCart;
