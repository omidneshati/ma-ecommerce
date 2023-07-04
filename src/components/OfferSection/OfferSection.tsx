import getProduct from '@/utils/getProduct';
import ProductsSlider from './ProductSlider/ProductsSlider';

async function OfferSection() {
  try {
    const productList = await getProduct({ limit: 10 });
    return (
      <div>
        <ProductsSlider productList={productList} />
      </div>
    );
  } catch (err) {
    return <div>ERROR</div>;
  }
}

export default OfferSection;