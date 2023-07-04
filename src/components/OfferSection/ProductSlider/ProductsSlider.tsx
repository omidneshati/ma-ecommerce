'use client';

import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductType from '@/interfaces/Product/Product';
import ProductCard from '@/components/ProductCard/ProductCard';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';

function ProductsSlider({ productList }: { productList: ProductType[] }) {
  return (
    // <ProductCard {...productList[0]} />
    <Swiper
      className="flex justify-center"
      breakpoints={{
        768: {
          width: 768,
          slidesPerView: 5
        }
      }}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      navigation
      spaceBetween={5}
      slidesPerView={1}>
      {productList.map((item) => (
        <SwiperSlide
          key={item.title}
          style={{ display: 'flex', justifyContent: 'center', padding: '6px 0' }}>
          <ProductCard {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ProductsSlider;
