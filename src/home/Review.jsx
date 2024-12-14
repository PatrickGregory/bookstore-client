import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Avatar } from "flowbite-react";
import AvatarOne from '../assets/bookimages/avatarone.avif'
import AvatarTwo from '../assets/bookimages/avatartwo.avif'
import AvatarThree from '../assets/bookimages/avatarthree.avif'
import AvatarFour from '../assets/bookimages/avatarfour.avif'
import AvatarFive from '../assets/bookimages/avatarfive.jpg'
import AvatarSix from '../assets/bookimages/avatarsix.avif'

// Import Swiper styles
// import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { FaStar } from 'react-icons/fa6';

function Review() {
    return (
        <div className='my-12 px-4 lg:px-24'>
            <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>
            <div>
                <div>
                    <Swiper
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: true,
                        }}
                        slidesPerView={1}
                        spaceBetween={10}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                        }}
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className='shadow-xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                                <div className='flex text-amber-500'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <div className='mt-7'>
                                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                                        ex molestiae quidem iure. Voluptatum suscipit distinctio labore eligendi, et
                                        sunt ipsa consectetur non odio fugit,
                                        similique incidunt
                                        exercitationem laborum repudiandae!</p>
                                    <div className='flex gap-4'>
                                        <Avatar img={AvatarOne} alt="avatar of Jese" className='w-10 mb-4' rounded />
                                        <div>
                                            <h5 className='text-lg font-medium'>Mark Ping</h5>
                                            <p className='text-base'>CEO, ABC Company</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='shadow-xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                                <div className='flex text-amber-500'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <div className='mt-7'>
                                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                                        ex molestiae quidem iure. Voluptatum suscipit distinctio labore eligendi, et
                                        sunt ipsa consectetur non odio fugit,
                                        similique incidunt
                                        exercitationem laborum repudiandae!</p>
                                    <div className='flex gap-4'>
                                        <Avatar img={AvatarTwo} className='w-10 mb-4' alt="avatar of Jese" rounded />
                                        <div>
                                            <h5 className='text-lg font-medium'>Mark Ping</h5>
                                            <p className='text-base'>CEO, ABC Company</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='shadow-xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                                <div className='flex text-amber-500'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <div className='mt-7'>
                                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                                        ex molestiae quidem iure. Voluptatum suscipit distinctio labore eligendi, et
                                        sunt ipsa consectetur non odio fugit,
                                        similique incidunt
                                        exercitationem laborum repudiandae!</p>
                                    <div className='flex gap-4'>
                                        <Avatar img={AvatarThree} className='w-10 mb-4' alt="avatar of Jese" rounded />
                                        <div>
                                            <h5 className='text-lg font-medium'>Mark Ping</h5>
                                            <p className='text-base'>CEO, ABC Company</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='shadow-xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                                <div className='flex text-amber-500'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <div className='mt-7'>
                                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                                        ex molestiae quidem iure. Voluptatum suscipit distinctio labore eligendi, et
                                        sunt ipsa consectetur non odio fugit,
                                        similique incidunt
                                        exercitationem laborum repudiandae!</p>
                                    <div className='flex gap-4'>
                                        <Avatar img={AvatarFour} className='w-10 mb-4' alt="avatar of Jese" rounded />
                                        <div>
                                            <h5 className='text-lg font-medium'>Mark Ping</h5>
                                            <p className='text-base'>CEO, ABC Company</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='shadow-xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                                <div className='flex text-amber-500'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <div className='mt-7'>
                                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                                        ex molestiae quidem iure. Voluptatum suscipit distinctio labore eligendi, et
                                        sunt ipsa consectetur non odio fugit,
                                        similique incidunt
                                        exercitationem laborum repudiandae!</p>
                                    <div className='flex gap-4'>
                                        <Avatar img={AvatarFive} className='w-10 mb-4' alt="avatar of Jese" rounded />
                                        <div>
                                            <h5 className='text-lg font-medium'>Mark Ping</h5>
                                            <p className='text-base'>CEO, ABC Company</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='shadow-xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                                <div className='flex text-amber-500'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <div className='mt-7'>
                                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                                        ex molestiae quidem iure. Voluptatum suscipit distinctio labore eligendi, et
                                        sunt ipsa consectetur non odio fugit,
                                        similique incidunt
                                        exercitationem laborum repudiandae!</p>
                                    <div className='flex gap-4'>
                                        <Avatar img={AvatarSix} className='w-10 mb-4' alt="avatar of Jese" rounded />
                                        <div>
                                            <h5 className='text-lg font-medium'>Mark Ping</h5>
                                            <p className='text-base'>CEO, ABC Company</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Review;
