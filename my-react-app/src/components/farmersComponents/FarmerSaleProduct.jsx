import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { customFetch } from '../../utils'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Form } from 'react-bootstrap';
import { toast } from 'react-toastify';


export const loader=async({params})=>{

  const id = params.id;
  // console.log(id);
  const data = await customFetch.get(`/GetCropsById/${id}`)
  return data.data;
}

const FarmerBuyProduct = () => {

  const data = useLoaderData();
  const [price,setPrice] = useState(0);
 
  // console.log(data);

  const {id,cropName,cropCategory,cropImage} = data;

  const prodDetails={
    cropName:cropName,
    cropCategory:cropCategory,
    cropImage:cropImage,
    cropPricePerKG:price, 
  }

  const postFarmersCrop=async(data)=>{
     const newData = await customFetch.post("/AddCropsFarmer",data)
    console.log(newData);
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("Hello");
    // console.log(prodDetails);
    postFarmersCrop(prodDetails);
    toast.success("Product saled")
  }

  return (

    <Form onSubmit={handleSubmit} className='d-flex justify-content-center align-items-center  ' style={{height:"90vh",width:"100%",background:"#fee2e2"}}>
      <div style={{width:"75%",height:"60%",background:"#eee"}} className='d-flex justify-content-start align-items-center gap-4  '>
        <img src={cropImage} className='prod-img' style={{display:"block", height:"100%"}} alt="" />
        <div>

        <p >Crop Name : {cropName}</p>
        <p>Crop Category : {cropCategory}</p>
        <p className='d-flex justify-content-start align-items-center'>

          <span >Set Prize per KG : </span>
          <input type="number" style={{display:"block",width:"6rem",border:"none",outline:"none",borderRadius:"1rem",background:"#fecaca",
          padding:"0.2rem 1rem"
        }}
         value={price}
         onChange={(e)=>setPrice(e.target.value)}
        />
        </p>

      <Button variant='danger' type='submit'>Submit</Button>
        </div>
      </div>
    </Form>
  )
}

export default FarmerBuyProduct