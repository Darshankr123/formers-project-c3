import axios from 'axios';
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { customFetch } from '../../utils';
import { toast } from 'react-toastify';

const AddCategory = () => {

    const [category,setCategory] = useState("");

    const postCategory=async(data)=>{
       const newData = await customFetch.post("/AddCategory",data);
       console.log(newData);
       toast.success("category added")
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);
        postCategory(data)
    }
  return (
    <div className='m-auto' style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        minHeight:"90vh"
    }}>
        <h4>Add Categories</h4>
        <div className='m-2'>

        <Form onSubmit={handleSubmit} className='d-flex flex-column gap-2 '>
        <div>
            
        <label htmlFor="" className='fs-5'>Category</label>
        <input type="text" 
          name='category'
          value={category}
          onChange={(e)=>setCategory(e.target.value)}
          style={{
              border:"none",
              outline:"none",
              background:"#fca5a5",
              borderRadius:"0.2rem",
              padding:"0.5rem 1rem",
              fontSize:"16px",
              marginLeft:"1rem"
            }}/>
            </div>
             <Button variant='danger' type='submit'>Submit</Button>
        </Form>
        </div>

       
    </div>
  )
}

export default AddCategory