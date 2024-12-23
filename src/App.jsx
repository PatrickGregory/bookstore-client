import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import MyFooter from './components/Footer'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('Backend API URL:', import.meta.env.VITE_API_URL);
    // Example fetch request
   fetch(`${import.meta.env.VITE_API_URL}/https://bookstore-serve.onrender.com/all-books`)
      .then((response) => response.json())
      .then((data) => console.log(data))
    .catch((error) => console.error('Error fetching data:', error));
   }, []);

  return (
    <>
      <Navbar />

      <div className='min-h-screen'>
        <Outlet />
      </div>
      <MyFooter />
    </>
  )
}

export default App
