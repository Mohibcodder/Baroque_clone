import React from 'react'
import Header from "./Header"
import Footer from "./Footer";
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Ordercencelation() {
  return (
    <>   
    <Header/>

    
        <h1 className="uppercase font-bold text-4xl pt-10 relative right-10 flex justify-center font">Order Cancellation
        </h1>
     <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg  m-10 border-4">
      <Form>
       <div className='bg-gray-400 text-center font-bold p-3'>
       ORDER CANCELLATION FORM
       </div>
        <div className="flex justify-between gap-6 mb-4">
        
          <Form.Group className="w-1/2">
          
            <Form.Label className="font-bold">FULL NAME  *</Form.Label>
            <Form.Control 
              type="text" 
              
              className="border-gray-300 rounded-md"
            />
          </Form.Group>
          <Form.Group className="w-1/2">
            <Form.Label className='font-bold'>ORDER NO. *</Form.Label>
            <Form.Control 
              type="email" 
        
              className="border-gray-300 rounded-md"
            />
          </Form.Group>
        </div>

        {/* Reason for Exchange */}
        <Form.Group className="mb-4">
          <Form.Label className="font-bold">REASON OF CANCELLATION *</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3}
            
            className="border-gray-300 rounded-md"
          />
        </Form.Group>

        {/* Submit Button */}
      </Form>

      {/* Disclaimer Text */}
      <div className="mt-4 text-lg text-gray-500">
        <p>* You will receive an email once an order is cancelled</p>
        <p>* Custom stitched order can only be cancelled within 3 days of order placement.</p>
        <p>* Only cancellation request will be entertained.</p>
        <p>* Cancelling order after 2 days  will result in cancellation fee of 3% of the paid amount, with the amount refunded to the original mode of payment.</p>
        
        <div className="flex justify-center">
          <Button variant="secondary" type="submit" className="w-32 py-2 m-3">
            Submit
          </Button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Ordercencelation