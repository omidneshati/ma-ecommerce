import ProductCard from '@/components/ProductCard/ProductCard';
import ProductType from '@/interfaces/Product/Product';
import getProduct from '@/utils/getProduct';
import React from 'react';

async function Category({ params }: { params: { slug: string } }) {
  try {
    const products: ProductType[] = await getProduct({ category: params.slug.replace('-', ' ') });
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    );
  } catch (err) {
    return <div>Something wrong</div>;
  }
}

export default Category;
