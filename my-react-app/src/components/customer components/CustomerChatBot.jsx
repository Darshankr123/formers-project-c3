import React, { useState } from 'react'
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { customFetch } from '../../utils';
import { toast } from 'react-toastify';

const CustomerChatBot = () => {

    const [feedBack,setFeedBack] = useState('');

    const theme = {
        background: '#f5f8fb',
        fontFamily: 'Helvetica Neue',
        headerBgColor: '#dc2626',
        headerFontColor: '#fff',
        headerFontSize: '15px',
        botBubbleColor: '#dc2626',
        botFontColor: '#fff',
        userBubbleColor: '#fff',
        userFontColor: '#4a4a4a',
      };
      const steps = [
        {
          id: 'Greet',
          message: 'Hello, Wlecome to Our Website',
          trigger: 'Ask Name'
        },
        {
            id:"Ask Name",
            message:"Please enter your name",
            trigger:"waiting1"
        },
        {
            id:"waiting1",
            user:true,
            trigger:"Name"
        },
        {
            id:"Name",
            message:`Hi {previousValue}, Please Select Your Issues`,
            trigger:"issues"
        },
        {
            id:"issues",
            options:[{value:"orders",label:"orders",trigger:"orders"},
            {value:"payments",label:"payments",trigger:"payments"}
        ],
        },
        {
            id:"orders",
            message:"On the Way",
            end:true
        },
        {
            id:"payments",
            message:"done",
            end:true
        }
      ];

      const user = JSON.parse(sessionStorage.getItem("customer"));

      const postFeedBack=async(data)=>{
        const newData = await customFetch.post("/addFeedBack",data)
        console.log(newData);
      }
     
      const handleSubmit=(e)=>{
        e.preventDefault();
        postFeedBack({email:user.email,feedback:feedBack});
        toast.success("Feedback Updated")
      }
  return (
    <>
    <div className='d-flex gap-4 justify-content-center align-items-center m-4  '>
    <div className='m-4 ' style={{background:"#fca5a5",borderRadius:"1rem"}}>
        <h2 className='m-2 text-center ' style={{color:"#fee2e2"}}>Feed Back</h2>
        <div className='underline m-auto '></div>
     <Form className='p-4' onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" defaultValue={user.email}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} value={feedBack} onChange={(e)=>setFeedBack(e.target.value)}
        placeholder='leave your comment here'
        />
      </Form.Group>
      <Button variant='danger' type='submit'>Submit</Button>
    </Form>
    </div>

    <ThemeProvider theme={theme} floated="right">
        <ChatBot steps={steps} />;
    </ThemeProvider>
    </div>

    </>
  )
}

export default CustomerChatBot