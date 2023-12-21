import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import { customFetch } from '../../utils';
import { Form,Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

export const loader=async({params})=>{
    const id = params.id;
    const data = await customFetch.get(`/GetFarmerCropsById/${id}`)
    return data.data;
}

const BuyParticularProducr = () => {

    const [quantity,setQuantity] = useState(0);
    const [distance,setDisteance] = useState(0);
    
    const user = JSON.parse(sessionStorage.getItem("customer"));
    console.log(user);
    const data = useLoaderData();
  

    let totalPrice ;
    const {id,cropName,cropImage,cropCategory,cropPricePerKG} = data;


    if(distance<=4){
        totalPrice = quantity*cropPricePerKG;
    }
    else if(distance >= 4){
        totalPrice = quantity*cropPricePerKG+5000;
    }
    // console.log(totalPrice);

    
    const product={
        prodName:cropName,
        prodCategory:cropCategory,
        pricePerKG:cropPricePerKG,
        prodQuantity:quantity,
        distance:distance,
        totalPrice:totalPrice,
        customer:user.email,
    }

    const postBuyedProduct=async(data)=>{
        const newData = await customFetch.post("/BuyProducts",data);
        console.log(newData);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        postBuyedProduct(product);
        toast.success("Product Sucessfully Purchased");
    }
  return (
    <div className='m-auto' style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        minHeight:"90vh"
    }}>
        <h2>Buy This Crop</h2>
        <div className='underline'></div>
         
         <div style={{
          height:"100%",
          width:"95%", 
         }}
         className='crop-grid'
         >
            <Form onSubmit={handleSubmit} className='d-flex justify-content-center align-items-center  ' style=     {{height:"90vh",width:"100%",background:"#fee2e2"}}>
            <div style={{width:"75%",height:"60%",background:"#eee"}} className='d-flex justify-content-start align-items-center gap-4  '>
                <img src={cropImage} className='prod-img' style={{display:"block", height:"100%"}} alt="" />
            <div>

                <p >Crop Name : {cropName}</p>
                <p>Crop Category : {cropCategory}</p>
                <p>Crop Price Per KG : {cropPricePerKG} -/ rs</p>

                <p className='d-flex justify-content-start align-items-center'>
   
                 <span >Enter Quantity : </span>
                 <input type="number" style={{display:"block",width:"6rem",border:"none",outline:"none",borderRadius:"1rem",background:"#fecaca",
                 padding:"0.2rem 1rem"
                 }}
                  value={quantity}
                 onChange={(e)=>setQuantity(e.target.value)}
                />
                </p>

                <p className='d-flex justify-content-start align-items-center'>

                <span >Enter Distance : </span>
                    <input type="number" style={{display:"block",width:"6rem",border:"none",outline:"none",borderRadius:"1rem",background:"#fecaca",
                    padding:"0.2rem 1rem"
                   }}
                     value={distance}
                        onChange={(e)=>setDisteance(e.target.value)}
                    />
                    </p>

                    <p>Total Price : {totalPrice}</p>
                <Button variant='danger' type='submit'>Submit</Button>
            </div>
        </div>
       </Form>
    </div>
        
    </div>
  )
}

export default BuyParticularProducr