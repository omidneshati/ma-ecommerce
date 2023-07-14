'use client';

import CartProductCard from '@/components/CartProductCard/CartProductCard';
import useCart from './useCart';

function Cart() {
  const { products } = useCart();
  return (
    <main className="p-1 sm:p-6">
      <div>
        به دلیل استفاده از localStorage به جای data base بعد از هر تغییر صفحه را بازنشانی(reload)
        کنید
      </div>
      <p className="p-4 mb-4 text-4xl font-bold bg-white">سبد خرید</p>
      <div className="flex flex-col gap-6">
        {products &&
          Object.keys(products).map((id) => {
            const { product, quantity } = products[Number(id)];
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
