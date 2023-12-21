import React from 'react'
import NavbarComponent from '../Navbar'
import { Outlet } from 'react-router-dom'

const FarmerPannel = () => {
  return (
    <div>
        <NavbarComponent sellCrops='Sale Crops'/>
        <Outlet/>
    </div>
  )
}

export default FarmerPannel