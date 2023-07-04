import ProductCard from '@/components/ProductCard/ProductCard';
import ProductType from '@/interfaces/Product/Product';
import getProduct from '@/utils/getProduct';

async function FF() {
  try {
    const data: ProductType[] = await getProduct({ category: 'jewelery' });
    return <ProductCard {...data[0]} />;
  } catch (err) {
    console.log(err);
    return <div>dd</div>;
  }
}

export default FF;
