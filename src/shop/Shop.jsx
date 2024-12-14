import { Card } from 'flowbite-react';
import React, { useState } from 'react'
import { useEffect } from 'react';

function Shop() {
  const [books, setBooks] = useState([])

  useEffect(()=>{
    fetch('http://localhost:5001/all-books')
   .then(res=>res.json())

   .then(data=>setBooks(data))
   .catch(err=>console.log(err))
  },[])
  return (
    <div className='mt-24 mx-4 lg:mx-24'>
      <h1 className='text-5xl font-bold text-center text-blue-950'>Welcome to the BookStore</h1>
      <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
        {books.map(book=>(
          <Card className='max-w-sm' key={book._id}>
            <img src={book.imageUrl} alt={book.bookTitle} className='h-72'/>
            <h5 className='text-2xl font-bold'>{book.bookTitle}</h5>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Shop;
