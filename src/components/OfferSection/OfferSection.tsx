import getProduct from '@/utils/getProduct';
import ProductsSlider from './ProductSlider/ProductsSlider';

async function OfferSection() {
  try {
    const bestSellerList = await getProduct({ limit: 10 });
    const NewOffer = await getProduct({ limit: 10, sort: 'desc' });
    return (
      <div className="flex flex-col gap-3 my-3">
        <div className="p-3 bg-white shadow-lg">
          <label className="font-bold">پر فروش ترین‌ها</label>
          <ProductsSlider productList={bestSellerList} />
        </div>
        <div className="p-3 bg-white shadow-lg">
          <label className="font-bold">‌پیشنهاد شگفت انگیز</label>
          <ProductsSlider productList={NewOffer} />
        </div>
      </div>
    );
  } catch (err) {
    return <div className="flex items-center justify-center text-red-700 text-9xl">ERROR</div>;
  }
}

export default OfferSection;
