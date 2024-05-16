import React from 'react'
import Style from './Layout.module.css'
import  Navbar  from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </div>
  )
}

export default Layout
