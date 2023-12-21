import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import InputGroup from 'react-bootstrap/InputGroup';
import { customFetch } from '../../utils';
import Form from 'react-bootstrap/Form';

const AddCropsAdmin = () => {

  const [cropImage,setCropImage] = useState();
  const [categories,setCategories] = useState([]);

  const [cropCategory,setCropCategory] = useState("fruits");

  useEffect(()=>{
     getCategories();
  },[])
  const postCrops =async(data)=> {
      const newData = await customFetch.post("/AddCrops",data);
      console.log(newData);
  }

  const getCategories=async()=>{
    const data = await customFetch.get("/GetCategories");
    // console.log(data.data);
    setCategories(data.data);
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    // console.log(data);
    postCrops({...data,cropImage:cropImage});
    e.currentTarget.reset();
    toast.success("Product added")
  }

  const handleCropImage=(e)=>{
    let file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload=()=>{
      setCropImage(reader.result);
    };
  };
  
  // console.log(categories);

  const filterdCategories = categories.map((item)=>item.category);
  // console.log(productCategory);
  return (
    <div className='m-auto' style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        minHeight:"90vh"
    }}>
        <h2>Add Products</h2>

        <select value={cropCategory} onChange={(e)=>setCropCategory(e.target.value)} style={{
          border:"none",
          outline:"none",
          padding:"0.5rem 1rem",
          background:"#fca5a5",
          fontWeight:500,
          borderRadius:"0.5rem"
        }}>
          {
            filterdCategories.map((product,index)=>{
              return <option key={index} >{product}</option>
            })
          }
        </select>
        <div>
          <Form onSubmit={handleSubmit} className='d-felx flex-column  m-4 '>
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
               crop name
              </InputGroup.Text>
              <Form.Control
                 aria-label="Default"
                 aria-describedby="inputGroup-sizing-default"
                  placeholder='crop name'
                 type='text'
                 name='cropName'
               />
            </InputGroup>
          
            <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
               crop category
              </InputGroup.Text>
              <Form.Control
                 aria-label="Default"
                 aria-describedby="inputGroup-sizing-default"
                 name='cropCategory'
                 type='text'
                 value={cropCategory}
                 onChange={(e)=>setCropCategory(e.target.value)}
               />
            </InputGroup>
            
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Crop Image</Form.Label>
                 <Form.Control type="file" onChange={handleCropImage} name='cropImage' />
           </Form.Group>

            <Button variant='danger ' className='m-2 ' type='submit'>Submit</Button>
          </Form>
        </div>
        
        <NavLink to='/login' className='text-decoration-none  text-capitalize bg-black p-2 rounded' style={{color:"#eee"}}>Back to Home</NavLink>
        
    </div>
  )
}

export default AddCropsAdmin