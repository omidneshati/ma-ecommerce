import AddToCartBtn from '@/components/AddToCartBtn/AddToCartBtn';
import ProductType from '@/interfaces/Product/Product';
import getProduct from '@/utils/getProduct';
import Image from 'next/image';
import React from 'react';

async function Product({ params }: { params: { slug: string } }) {
  try {
    const res: ProductType = await getProduct({ id: Number(params.slug) });

    const { image, title, description, category, price }: ProductType = res;
    return (
      <main className="grid grid-cols-1 sm:grid-cols-2 gap-6 [&>div]:bg-white [&>div]:rounded-md [&>div]:shadow-md">
        <Image
          src={image}
          alt={title}
          width={150}
          height={150}
          className="w-full bg-white rounded-md shadow-md p-[20%] sm:h-[70vh]"
        />
        <div className="flex flex-col justify-center gap-4 p-6">
          <div className="flex flex-col gap-6 text-justify" dir="ltr">
            <span className="text-3xl font-bold">{title}</span>
            <desc>{description}</desc>
          </div>
          <p className="p-5 text-2xl font-bold text-white bg-indigo-900">قیمت: {price}</p>
          <p>دسته بندی: {category}</p>
          <AddToCartBtn
            product={res}
            className="self-end px-6 py-4 text-white rounded-s-lg rounded-e-lg bg-cyan-700">
            افزودن به سبد خرید
          </AddToCartBtn>
        </div>
      </main>
    );
  } catch (err) {
    return <div>Something is Wrong</div>;
  }
}

export default Product;
