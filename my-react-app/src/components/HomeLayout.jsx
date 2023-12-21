import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'


const HomeLayout = () => {
  return (
    <div>
     <Navbar register='Register' login='Login'/>
     <Outlet/>
    </div>
  )
}

export default HomeLayout