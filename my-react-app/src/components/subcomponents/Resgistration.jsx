import React, { useState } from 'react'
import { Button, Toast } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { customFetch } from '../../utils';
import { toast } from 'react-toastify';


const Resgistration = () => {

  const [userType,setUserType] = useState('farmer');

    const postCoustomerData = async(data)=>{
        const newData = await customFetch.post("/AddCustomer",{...data})
        // console.log(newData); 
    }
    
    const postFarmerData = async(data)=>{
      const newData = await customFetch.post("/AddFarmer",{...data})
      // console.log(newData); 
    }
    const postAdminData=async(data)=>{
      const newData = await customFetch.post("/AddAdmin",{...data})
      console.log(newData);
    }

    const handleCustomerSubmit=(e)=>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);
        console.log(data);
        postCoustomerData(data)
        e.currentTarget.reset();
        toast.success("signed up as a Customer")
    }

    const handleFarmerSubmit=(e)=>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);
        console.log(data);
        postFarmerData(data)
        e.currentTarget.reset();
        toast.success("signed up as a Farmer")
    }

    const handleAdminSubmit=(e)=>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);
        // console.log(data);
        postAdminData(data)
        e.currentTarget.reset();
        toast.success("signed up as a Admin")
    }

   
  //  console.log(userType);
  return (
    <section className='d-flex flex-column  justify-content-center  align-items-center ' style={{
        height:"90vh",
        // background:"#cbd5e1"
    }}>

      <div className='mb-2 d-flex  gap-2'>
          <Button variant='secondary' onClick={(e)=>setUserType("customer")} style={userType === "farmer" ? {display:"flex"} : {display:"none"}} >Farmer</Button>
          <Button variant='secondary' onClick={(e)=>setUserType("farmer")} style={userType === "customer" ? {display:"flex"} : {display:"none"}} >Customer</Button>
          
        </div>
      <p style={{
        color:"mediumBlue",
        letterSpacing:"2px",
        fontWeight:600,
        fontSize:"1.5rem"
        }}>Sign up as <span
          style={{
            textTransform:"capitalize",
            color:"green"
          }}
        >{userType}</span></p>
    <div >
      {
        userType === "farmer" ? 
       ( <Form onSubmit={handleFarmerSubmit} className='d-flex justify-content-center flex-column  align-align-items-center bg-body-secondary p-4 text-spacing'>
       
        <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Name
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder='name'
          name="name"
          />
      </InputGroup>

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
          mobile number
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder='mobile number'
          type='number'
          name="mobile"
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
    </Form>)
        :
       
         (
          <Form onSubmit={handleCustomerSubmit} className='d-flex justify-content-center flex-column  align-align-items-center bg-body-secondary p-4 text-spacing'>
         
          <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Name
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            placeholder='name'
            name="name"
            />
        </InputGroup>
  
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
            mobile number
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            placeholder='mobile number'
            type='number'
            name="mobile"
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
         )     
      }  
    </div>
   
    </section>
  )
}

export default Resgistration