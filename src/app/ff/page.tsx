import ProductsSlider from '@/components/OfferSection/ProductSlider/ProductsSlider';
import ProductType from '@/interfaces/Product/Product';
import getProduct from '@/utils/getProduct';

async function FF() {
  try {
    const data: ProductType[] = await getProduct({ category: 'jewelery' });
    return <ProductsSlider productList={data} />;
  } catch (err) {
    console.log(err);
    return <div>dd</div>;
  }
}

export default FF;
