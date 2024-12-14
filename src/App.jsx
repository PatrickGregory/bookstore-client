import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import MyFooter from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

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
