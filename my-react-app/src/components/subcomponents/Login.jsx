import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { customFetch } from '../../utils';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [userType,setUserType] = useState('farmer');

    const navigate = useNavigate();

    const postLoginType = async(data)=>{
      const newData = await customFetch.post("/UserLogin",data)
      console.log(newData);
 
      if(newData.data === 'customer'){
        navigate("/customer")
        sessionStorage.setItem("customer",JSON.stringify(data))
        // console.log(data);
      }
      else if(newData.data === 'farmer'){
        navigate("/farmer")
      }
      else {
        navigate("/admin")
      }
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);
        // console.log(data);
        postLoginType({...data,userType:userType})
        
    }
  return (
    <section className='d-flex flex-column  justify-content-center  align-items-center ' style={{
        height:"90vh",
        // background:"#cbd5e1"
    }}>

        <div className='mb-2 d-flex  gap-2'>
          <Button variant='secondary' onClick={(e)=>setUserType("customer")} style={userType === "farmer" ? {display:"flex"} : {display:"none"}} >Farmer</Button>
          <Button variant='secondary' onClick={(e)=>setUserType("admin")} style={userType === "customer" ? {display:"flex"} : {display:"none"}} >Customer</Button>
          <Button variant='secondary' onClick={(e)=>setUserType("farmer")} style={userType === "admin" ? {display:"flex"} : {display:"none"}} >Admin</Button>
        </div>
        <p style={{
        color:"mediumBlue",
        letterSpacing:"2px",
        fontWeight:600,
        fontSize:"1.5rem"
        }}>Login as <span
          style={{
            textTransform:"capitalize",
            color:"green"
          }}
        >{userType}</span></p>
    <div >
       <Form onSubmit={handleSubmit} className='d-flex justify-content-center flex-column  align-align-items-center bg-body-secondary p-4 text-spacing'>
        <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          email
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder='email'
          type='email'
          name='email'
          />
      </InputGroup>

      

      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          password
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder='password'
          type='password'
          name='password'
          />
      </InputGroup>
      <Button variant='secondary text-spacing' type='submit'>Submit</Button>
    </Form>
    </div>
   
    </section>
  )
}

export default Login