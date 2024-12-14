import React from 'react'
import { useLoaderData } from 'react-router-dom';

function Singlebook() {
  const { _id, bookTitle, imageUrl, description, authorName, category, price, } = useLoaderData();
  return (
    <div className='bg-teal-100 pt-12 pb-60'>
      <div className='mt-28 bg-white p-4 rounded grid grid-cols-10 mx-4 lg:mx-24'>
        <div className='lg:col-span-4 md:col-span-10 lg:order-first order-last md:order-last mb-4 col-span-10 md:items-center'>
          <img src={imageUrl} alt={bookTitle} className='h-96 rounded' />
        </div>
        <div className='lg:col-span-6 md:col-span-10 col-span-10 mb-8'>
          <h1 className='text-4xl font-bold mt-8 text-blue-900'>{bookTitle}</h1>
          <h2 className='text-xl font-bold'>{authorName}</h2>
          <h6 className='text-lg font-bold text-teal-400'>{category}</h6>
          <p className='font-bold'>{description}</p>
          {/* <a href={bookPdfUrl} className='text-blue-700 font-semibold underline-offset-0'>Download PDF</a> */}
          <h2 className='text-2xl font-bold mt-6 bg-lime-500 p-2 w-32 rounded-lg'>Price: ${price}</h2>
        </div>
      </div>
    </div>
  )
}

export default Singlebook;