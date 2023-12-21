
import React, { useEffect, useState } from 'react'

import { Link, NavLink } from 'react-router-dom';
import { customFetch } from '../../utils';
import Card from 'react-bootstrap/Card';

const BuyProduct = () => {

  const [crops,setCrops] = useState([]);
  
  const getCrops =async()=>{
    const data = await customFetch.get("/GetFormerCrops");
    // console.log(data.data);
    setCrops(data.data)
  }

  useEffect(()=>{
    getCrops();
  },[])

  // console.log(crops);
  return (
    <div className='m-auto' style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        minHeight:"90vh"
    }}>
        <h2>Buy Crops</h2>
        <div className='underline'></div>
         
         <div style={{
          height:"100%",
          width:"75$",
          
         }}
         className='crop-grid'
         >
          {
            crops.map((crop)=>{
              // console.log(crop);
              return <Card key={crop.id} style={{ width: '18rem' }}>
              <Card.Img style={{height:"12rem",objectFit:"cover"}} variant="top" src={crop.cropImage}  />
                <Card.Body>
                 <Card.Title className='text-capitalize'>Crop Name :  {crop.cropName}</Card.Title>
                 <Card.Text className='text-spacing'> perice per kg :  
                  {crop.cropPricePerKG} -/rs
                </Card.Text>

                <div className='d-flex justify-content-between align-items-center'>

                <Link to={`BuyOnline/${crop.id}`}
                className='text-decoration-none  bg-danger p-1 text-spacing rounded-2 'style={{color:"#eee"}}>Buy  Online</Link>

              <Link to={`BuyOffline/${crop.id}`}
                className='text-decoration-none  bg-danger p-1 text-spacing rounded-2 'style={{color:"#eee"}}>Buy  Offline</Link>
                </div>
              </Card.Body>
            </Card>
            })
          }
           
         </div>

        <NavLink to='/login' className='text-decoration-none  text-capitalize bg-black p-2 rounded' style={{color:"#eee"}}>Back to Home</NavLink>
        
    </div>
  )
}

export default BuyProduct