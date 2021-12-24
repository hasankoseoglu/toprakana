import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/navigation"
import 'swiper/css';
import SwiperCore, {
        Navigation
      } from 'swiper';
      SwiperCore.use([Navigation]);
export default () => {
        return (
                <Swiper navigation={true} className="mySwiper">
                        <SwiperSlide>
                                <img src="/images/toprakana-restaurant.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                                <img src="/images/toprakana-restaurant.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                                <img src="/images/toprakana-restaurant.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                                <img src="/images/toprakana-restaurant.jpg" alt="" />
                        </SwiperSlide>
                
                </Swiper>
        );
};