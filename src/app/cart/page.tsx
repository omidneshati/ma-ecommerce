'use client';

import CartProductCard from '@/components/CartProductCard/CartProductCard';
import getCartProducts from '@/utils/getCartProducts';

function Cart() {
  const cartProducts = getCartProducts();
  return (
    <main className="max-w-screen-lg p-1 sm:p-6">
      <div>
        به دلیل استفاده از localStorage به جای data base بعد از هر تغییر صفحه را بازنشانی(reload)
        کنید
      </div>
      <p className="p-4 mb-4 text-4xl font-bold bg-white">سبد خرید</p>
      <div className="flex flex-col gap-6">
        {cartProducts &&
          Object.keys(cartProducts).map((id) => {
            const { product, quantity } = cartProducts[Number(id)];
            return <CartProductCard key={id} product={product} quantity={quantity} />;
          })}
      </div>
      <button className="w-full p-6 mt-6 text-lg text-center text-white bg-indigo-800">
        پرداخت
      </button>
    </main>
  );
}

export default Cart;
