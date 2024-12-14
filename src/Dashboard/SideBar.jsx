import React, { useState, useEffect, useRef } from 'react'
import { Button, Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import LogoImage from "../../src/assets/bookimages/avatarone.avif";
import { HiArrowSmRight, HiChartPie, HiCloudUpload, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { BsChevronDoubleRight } from 'react-icons/bs';

function SideBar() {
  const [toggle, setToggle] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handleClose = (e) => {
        if (!menuRef.current.contains(e.target)){
          setToggle(false);
        }
    };
    document.addEventListener('mousedown', handleClose);
  });
  const {user} = useContext(AuthContext)
  return (
    <div className='fixed lg:relative flex flex-row' ref={menuRef}>
      <Sidebar className={`h-full ${toggle ? '':'hidden'}`} aria-label="Sidebar with content separator example">
        <Sidebar.Logo href="/">
        <img className='rounded-full w-1/6' src={user?.photoURL || LogoImage} alt="Profile logo" />
          <span className='w-0.5 text-wrap'>{user?.displayName|| 'Demo user'}</span>
        </Sidebar.Logo>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item href="/admin/dashboard/upload" icon={HiCloudUpload}>
              Upload Books
            </Sidebar.Item>
            <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
              Manage
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiUser}>
              Users
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag}>
              Products
            </Sidebar.Item>
            <Sidebar.Item href="/signup" icon={HiArrowSmRight}>
              Sign In
            </Sidebar.Item>
            <Sidebar.Item href="/logout" icon={HiTable}>
              Sign Out
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie}>
              Upgrade to Pro
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiViewBoards}>
              Documentation
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={BiBuoy}>
              Help
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
      <Button className='h-10 bg-slate-100 ml-[-10px]' onClick={()=>setToggle(!toggle)}><BsChevronDoubleRight className='text-lg text-red-800'/></Button>
    </div>
  )
}

export default SideBar