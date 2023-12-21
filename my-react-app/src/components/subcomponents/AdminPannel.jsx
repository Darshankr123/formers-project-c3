import React from 'react'
import NavbarComponent from '../Navbar'
import { Outlet } from 'react-router-dom'

const AdminPannel = () => {
  return (
    <div>
        <NavbarComponent admin='Add Type' addCategory="Add Category"/>
        <Outlet/>
    </div>
  )
}

export default AdminPannel