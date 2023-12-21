import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const NavbarComponent = ({register,login,sellCrops,admin,addCategory,buyproduct,CustomerQuaries}) => {
  return (
    <div>
        <div className=''>

        <Navbar className=" text-white " style={{
            background:"#dc2626"
        }}>
             <Container className='d-flex justify-content-center align-items-center'>
            <Navbar.Brand className='text-white t nav-logo'>Formers Market</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end ">
                <div className='d-flex justify-content-center align-items-center gap-2 text-spacing'>
                    <NavLink
                    to='/'
                    className='text-decoration-none text-white'>{register}</NavLink>
                    <NavLink 
                    to='login'
                    className='text-decoration-none text-white'>{login}</NavLink>
                    
                    <NavLink 
                    to=''
                    className='text-decoration-none text-white'>{buyproduct}</NavLink>

                    <NavLink 
                    to=''
                    className='text-decoration-none text-white'>{sellCrops}</NavLink>

                    <NavLink 
                    to=''
                    className='text-decoration-none text-white'>{admin}</NavLink>

                    <NavLink 
                    to='addCategory'
                    className='text-decoration-none text-white'>{addCategory}</NavLink>

                    <NavLink 
                    to='yourQuaries'
                    className='text-decoration-none text-white'>{CustomerQuaries}</NavLink>
                </div>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    </div>
  )
}

export default NavbarComponent