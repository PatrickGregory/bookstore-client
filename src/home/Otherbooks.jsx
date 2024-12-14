import BookCard from '../components/BookCard'
import {React, useEffect, useState } from 'react'

function Otherbooks() {
    const [books, setBooks] = useState([])

    useEffect(()=>{
        fetch('http://bookstore-serve.onrender.com/all-books')
        .then(res=>res.json())
        // .then(data=>console.log(data))
        .then(data=>setBooks(data.slice(4, 12)))
        .catch(err=>console.log(err))
    },[])
  return (
    <div>
      <BookCard books={books} headline='Other Books'/>
    </div>
  )
}

export default Otherbooks
