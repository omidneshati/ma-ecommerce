import ProductType from '../Product/Product';

interface CartProductType {
  [x: number]: {
    product: ProductType;
    quantity: number;
  };
}

export default CartProductType;
