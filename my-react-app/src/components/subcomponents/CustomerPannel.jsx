import React from 'react'
import NavbarComponent from '../Navbar'
import { Outlet } from 'react-router-dom'

const CustomerPannel = () => {
  return (
    <div>
        <NavbarComponent buyproduct="Buy Products" CustomerQuaries="Your Quaries"/>
        <Outlet/>
    </div>
  )
}

export default CustomerPannel