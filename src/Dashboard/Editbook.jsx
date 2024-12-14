import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, Textarea, TextInput } from "flowbite-react";
import { useLoaderData, useParams } from 'react-router-dom';

function Editbook() {
  const { id } = useParams()
  const { bookTitle, authorName, imageUrl, bookPdfUrl, category, price, description } = useLoaderData()
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
  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategory[''])

  const handleCategoryChange = (e) => {
    console.log(e.target.value)
    setSelectedBookCategory(e.target.value)
  }
  const handleUpdate = (e) => {
    e.preventDefault()
    const form = e.target;
    const bookTitle = form.bookTitle.value;
    // console.log(bookTitle)
    const authorName = form.authorName.value;
    const imageUrl = form.imageUrl.value;
    const price = form.price.value;
    const category = form.categoryName.value;
    const description = form.description.value;
    const bookPdfUrl = form.bookPdfUrl.value;
    const updateBook = {
      bookTitle,
      authorName,
      imageUrl,
      price,
      category,
      description,
      bookPdfUrl
    }
    //console.log(updatebook);
    // update books
    fetch('http://localhost:5001/book/'+id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updateBook)
    })
    .then(res => res.json())
    .then(data => {
      alert('book updated successfully')
      window.location.href = '/admin/dashboard/manage'
    })
    .catch(err => console.log(err))

    // fetch('http://localhost:5001/upload-book',{
    //   method: 'POST',
    //   headers:{'Content-Type': 'application/json'},
    //   body: JSON.stringify(bookObjt)
    // })
    // .then(res=>res.json())
    // .then(data=>{
    //   alert('book uploaded successfully')
    //   form.reset();
    // })
    // .catch(err=>console.log(err))
  }

  return (
    <div className='px-4 my-12'>
      <h1 className='mb-8 text-3xl font-bold text-blue-950'>Update this Book</h1>
      <form onSubmit={handleUpdate} className="flex lg:w-[900px] flex-wrap flex-col gap-4">
        {/* first row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput id="bookTitle" type="text" name='bookTitle' placeholder="Book Name" defaultValue={bookTitle} shadow required />
          </div>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput id="authorName" defaultValue={authorName} name='authorName' type="text" placeholder="Author Name" shadow required />
          </div>
        </div>
        {/* second row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageUrl" value="Image Link" />
            </div>
            <TextInput id="imageUrl" type="text" defaultValue={imageUrl} name='imageUrl' placeholder="Book Image Link" shadow required />
          </div>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <Select id='inputState' className='w-full rounded' name='categoryName'
              defaultValue={selectedBookCategory} onChange={handleCategoryChange} shadow
              required>
              <option>Select Category</option>
              {bookCategory.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </Select>
            {/* <Select id='inputState' className='w-full rounded' name='categoryName'
              value={selectedBookCategory} defaultValue={category} onChange={handleCategoryChange} shadow
              required>
              <option>Select Category</option>
              {bookCategory.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </Select> */}
          </div>
        </div>

        {/* third row */}
        <div>
          <div className='lg:w-full'>
            <div className="mb-2 block">
              <Label htmlFor="description" value="Book Description" />
            </div>
            <Textarea id="description" defaultValue={description} type="text" name='description'
              placeholder="Write your book description here" rows={5} shadow required />
          </div>
        </div>

        {/* fourth row */}

        <div className="flex gap-8">
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookPdfUrl" value="Book PDF Link" />
            </div>
            <TextInput id="bookPdfUrl" type="text" defaultValue={bookPdfUrl} name='bookPdfUrl' placeholder="Book PDF Link" shadow required />
          </div>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="price" value="Book Price" />
            </div>
            <TextInput id="price" type="text" defaultValue={price} name='bookPdfUrl' placeholder="Book price" shadow required />
          </div>
        </div>
        <Button type='submit'>Update</Button>
      </form>
    </div>
  )
}

export default Editbook