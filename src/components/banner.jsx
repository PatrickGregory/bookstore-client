import React from 'react'
import BannerCard from '../home/BannerCard';

function Banner() {
    return (
        <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
            <div className='flex flex-col md:flex-row justify-between w-full items-center gap-12 py-40'>
                {/* left side */}
                <div className='md:w-1/2 h-full'>
                    <h2 className='text-4xl font-bold leading-snug text-black'>Buy and Sell your books</h2>
                    <p className='md:w-4/5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia officiis amet reprehenderit,
                         ullam necessitatibus pariatur id! Magnam, distinctio deleniti. 
                        Minus unde corporis iste quam tempore dolorem assumenda dolore consequatur dolores!</p>
                    <div className='my-3'>
                        <input type='search' placeholder='Search for a book' name='search' id='search'
                        className='py-2 px-2 rounded-s-none outline-none'/>
                        <button className='bg-blue-700 text-white py-2 px-4 rounded-s-none hover:bg-black transition-all ease-in duration-200'>Search</button>
                    </div>
                </div>
                {/* right side */}
                <div>
                    <BannerCard/>
                </div>
            </div>
        </div>
    )
}

export default Banner;
