import  { React, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import '../home/BannerCard.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// import required modules
import { EffectCards } from 'swiper/modules';


function BannerCard() {
    return (
        <div className='banner'>
            <Swiper
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards,Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default BannerCard;