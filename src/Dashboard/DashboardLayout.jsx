import React from 'react'
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';
function DashboardLayout() {
  return (
    <div className='flex gap-4 md:flex-row bg-teal-50'>
      <div className='row-span-3'><SideBar /></div>
      <div className='row-span-8'><Outlet/></div>
    </div>
  )
}

export default DashboardLayout;