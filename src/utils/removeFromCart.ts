import CartProductType from '@/interfaces/Cart/CartProductType';
import ProductType from '@/interfaces/Product/Product';
import getCartProducts from './getCartProducts';

const removeFromCart = (product: ProductType) => {
  const storedCart = getCartProducts();

  const newCart: CartProductType = {
    ...storedCart,
    [product.id]: {
      product,
      quantity: storedCart && storedCart[product.id] ? storedCart[product.id].quantity + 1 : 1
    }
  };

  localStorage.setItem('cart', JSON.stringify(newCart));
};

export default removeFromCart;
