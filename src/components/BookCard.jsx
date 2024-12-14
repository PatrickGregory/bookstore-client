import { React, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import {FaCartShopping} from 'react-icons/fa6'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

function BookCard({ headline, books }) {
    return (
        <div className='my-16 px-4 lg:px-24'>
            <h1 className='text-5xl text-blue-950 font-bold text-center my-5'>{headline}</h1>
            <div>
                <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                }}
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        '@0.00': {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        '@0.75': {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        '@1.00': {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        '@1.50': {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination,Autoplay]}
                    className="mySwiper w-full h-full"
                >
                    {books.map((book)=>(  
                    <SwiperSlide key={book._id}>
                        <Link to={`/book/${book._id}`}>
                            <div className='relative'>
                                <img src={book.imageUrl}/>
                                <div className='absolute top-3 right-3 bg-blue-600 hover:bg-blue-950 p-2 rounded'>
                                    <FaCartShopping className='text-white w-4 h-4'/>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h2>{book.bookTitle}</h2>
                                    <h2>{book.authorName}</h2>
                                </div>
                                <div>
                                    <p>${book.price}.00</p>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default BookCard
