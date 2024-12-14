import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'

function Logout() {
    const {logout} = useContext(AuthContext)

   const handlelogout = async () =>{
        await logout()
        window.location.href = '/';
    }
    return (
        <div className='h-screen bg-teal-100 flex items-center justify-center'>
            <button onClick={handlelogout} className='bg-red-700 rounded text-white px-4 py-2'>
                Logout
            </button>
            <p className='ml-2 2xl'>Are you sure you want to logout?</p>
        </div>
    )
}

export default Logout

