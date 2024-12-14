import { React, useContext, useEffect, useState } from 'react'
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6"
import { Link } from 'react-router-dom'
import {AuthContext} from '../contexts/AuthProvider'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const {user} = useContext(AuthContext)
  console.log(user)

  //toggle menu
  const toggleMenu = () => { setIsMenuOpen(!isMenuOpen) };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => { window.removeEventListener('scroll', handleScroll) };
  }, [])

  // navItems here
  const navItems = [
    { link: 'About', path: '/about' },
    { link: 'Shop', path: '/shop' },
    { link: 'Sell Book', path: '/admin/dashboard' },
    { link: 'Blog', path: '/blog' },
  ]
  return (
    <header className='w-full bg-transparent fixed top-0 left-0 transition-all ease-in duration-300'>
      <nav className={`py-4 lg:px-24 p-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-500" : ""}`}>
        <div className='flex justify-between text-center text-base gap-8'>
          {/* logo */}
          <Link to="/" className='text-2xl font-bold text-blue-700 flex items-center gap-2'><FaBlog className='inline-block' />Books</Link>
          {/* nav item for lg device */}
          <ul className='md:flex space-x-20 hidden'>
            {
              navItems.map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className=' block text-base text-black uppercase cursor-pointer hover:text-blue-700'>{item.link}</Link>
                </li>
              ))
            }
          </ul>
          {/* button for large device */}
          <div className='space-x-20 hidden lg:flex items-center'>
            <button className='bg-blue-800 text-white py-3 px-5 hover:bg-blue-500'>
              <FaBarsStaggered />
            </button>
            {
              user ?
              <div className='flex items-center gap-2'>
                  <Link to='/profile' className='text-blue-800'>{user.email}</Link>
                  <Link to={'/logout'} className=' text-blue-800'>Logout</Link>
              </div>
              :
              <Link to='/login' className='text-sm text-blue-800 3xl'>Login</Link>
            }
          </div>

          {/* menu for mobile device */}
          <div className='md:hidden'>
            <button onClick={toggleMenu} className='text-black focus:outline-none'>
              {
                isMenuOpen
                  ? <FaXmark className='h-5 w-5 text-black' />
                  : <FaBarsStaggered className='h-5 w-5 text-black' />
              }
            </button>
          </div>
          {/* Navbar for small screen */}
          <div className={`space-x-4 px-4 mt-16 py-7 bg-blue-950 ${isMenuOpen? "block fixed top-0 right-0 left-0":"hidden"}`}>
            {
              navItems.map((item, index) =>
              (<Link to={item.path} onClick={toggleMenu} className=' block text-sm text-white uppercase cursor-pointer hover:text-blue-700'>{item.link}</Link>
              ))
            }
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar