 import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { customFetch } from '../../utils'

 export const loader=async({params})=>{
    const id = params.id;
    console.log(id);
    const data = await customFetch.get(`/GetFarmerCropsById/${id}`);
    return data.data
 }
 
 const BuyOffline = () => {

    const data = useLoaderData();
    
   return (
     <div>
        <div style={{
            width:"100vw",
            height:"90vh",
            position:"relative"
        }}>
            <img src={data.cropImage} alt={data.cropName} width="100%" height="100%" style={{objectFit:"cover",objectPosition:"center"}}/>
           <div style={{
            position:"absolute",
            top:"50%",
            left:"50%",
            transform:"translate(-50%,-50%)",
            background:"#fecaca",
            padding:"2rem 1rem",
            borderRadius:"1rem",
            
           }} >
            <p className='fs-4 font-monospace ' style={{
                letterSpacing:"2px"
            }}>Contact Number : 180-9867-0909</p>
           </div>
        </div>
     </div>
   )
 }
 
 export default BuyOffline