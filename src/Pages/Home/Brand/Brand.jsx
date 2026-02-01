import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import brand  from '../../../assets/brands/amazon.png'
import brand1  from '../../../assets/brands/casio.png'
import brand2 from '../../../assets/brands/moonstar.png'
import brand3  from '../../../assets/brands/randstad.png'
import brand4  from '../../../assets/brands/star.png'
import brand5  from '../../../assets/brands/start_people.png'
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
const Brand = () => {
    return (
        <Swiper modules={[Autoplay]}
        autoplay={{
            delay:1000,
            disableOnInteraction:false
        }}
        slidesPerView={5}
      spaceBetween={30}
      loop={true}  >
            <SwiperSlide>
            <img src={brand} alt="" />
            </SwiperSlide>
            <SwiperSlide>
            <img src={brand1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
            <img src={brand2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
            <img src={brand3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
            <img src={brand4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
            <img src={brand5} alt="" />
            </SwiperSlide>
            <SwiperSlide>
            <img src={brand} alt="" />
            </SwiperSlide>

        </Swiper>
    );
};

export default Brand;