import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, Textarea, TextInput } from "flowbite-react";

function Uploadbook() {
  const bookCategory = [
    'Fiction',
    'Non-Fiction',
    "Children's",
    "Sci-Fi",
    "Travel",
    "Self-Help",
    "Horror",
    "Poetry",
    "Biography",
    "Cookbook",
    "Education",
    "Religion",
    "Science",
    "Technology",
    "Mythology",
    "Literature",
    "Research",
    "Fantasy",
    "Programming",
    "Magazines",
    "Art",
    "Thriller",
    "Romance",
    "Mystery",
    "Adventure",
    "Health and Fitness",
    "Cooking",
    "Baking",
    "Business",
    "Finance",
    "Politics",
    "History",
    "Geography",
  ]
  const [selectedBookCategory, setSelectedBookCategory] = useState([0])

  const handleCategoryChange = (e) => {
    console.log(e.target.value)
    setSelectedBookCategory(e.target.value)
  }
  const handleBookSubmit = (e) => {
    e.preventDefault()
    const form = e.target;
    const bookTitle = form.bookTitle.value;
    // console.log(bookTitle)
    const authorName = form.authorName.value;
    const imageUrl = form.imageUrl.value;
    const category = form.categoryName.value;
    const description = form.description.value;
    const bookPdfUrl = form.bookPdfUrl.value;
    const price = form.price.value;
    const bookObjt = {
      bookTitle,
      authorName,
      imageUrl,
      category,
      description,
      bookPdfUrl,
      price
    }
    console.log(bookObjt);
    // const newBook = {
    //   title:e.target.bookTitle.value,
    //   author: e.target.authorName.value,
    //   image: e.target.imageUrl.value,
    //   category: selectedBookCategory,
    //   description: e.target.description.value,
    //   bookPdfUrl: e.target.bookPdfUrl.value,
    // }
    // console.log(newBook);
    fetch('http://localhost:5001/upload-book', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookObjt)
    })
      .then(res => res.json())
      .then(data => {
        alert('book uploaded successfully')
        form.reset();
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='px-4 my-12'>
      <h1 className='mb-8 text-3xl font-bold text-blue-950'>Upload a New Book</h1>
      <form onSubmit={handleBookSubmit} className="flex lg:w-[900px] flex-wrap flex-col gap-4">
        {/* first row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput id="bookTitle" type="text" name='bookTitle' placeholder="Book Name" shadow required />
          </div>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput id="authorName" name='authorName' type="text" placeholder="Author Name" shadow required />
          </div>
        </div>
        {/* second row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageUrl" value="Image Link" />
            </div>
            <TextInput id="imageUrl" type="text" name='imageUrl' placeholder="Book Image Link" shadow required />
          </div>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <Select id='inputState' className='w-full rounded' name='categoryName'
              value={selectedBookCategory} onChange={handleCategoryChange} shadow
              required>
              <option>Select Category</option>
              {bookCategory.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </Select>
          </div>
        </div>

        {/* third row */}
        <div>
          <div className='lg:w-full'>
            <div className="mb-2 block">
              <Label htmlFor="description" value="Book Description" />
            </div>
            <Textarea id="description" type="text" name='description'
              placeholder="Write your book description here" rows={5} shadow required />
          </div>
        </div>

        {/* fourth row */}

        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookPdfUrl" value="Book PDF Link" />
            </div>
            <TextInput id="bookPdfUrl" type="text" name='bookPdfUrl' placeholder="Book PDF Link" shadow required />
          </div>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="price" value="Price" />
            </div>
            <TextInput id="price" type="text" name='price' placeholder="price" shadow required />
          </div>
        </div>
        <Button type='submit'>Add Book</Button>
      </form>
    </div>
  )
}

export default Uploadbook