'use client'

import React from 'react'
import Navbar from '../../../components/seller/Navbar'
import SideBar from '../../../components/seller/Sidebar'

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className='flex w-full'>
        <SideBar />
        {children}
      </div>
    </div>
  )
}

export default Layout