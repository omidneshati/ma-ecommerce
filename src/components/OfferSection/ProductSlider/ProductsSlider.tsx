'use client';

import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductType from '@/interfaces/Product/Product';
import ProductCard from '@/components/ProductCard/ProductCard';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function ProductsSlider({ productList }: { productList: ProductType[] }) {
  return (
    // <ProductCard {...productList[0]} />
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={3}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}>
      {productList.map((item) => (
        <SwiperSlide key={item.title} className="my-3">
          <ProductCard {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ProductsSlider;
