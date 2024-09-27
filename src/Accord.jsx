import React, { useEffect, useState } from 'react';
import Accordion from "react-bootstrap/Accordion";
import Col from "react-bootstrap/Col";
import { Form, Container } from 'react-bootstrap';
import Pagination from "react-bootstrap/Pagination";
function Accord() {
  const [priceRange, setPriceRange] = useState([0, 44990]);

  const handleSliderChange = (e) => {
    setPriceRange([e.target.value, priceRange[1]]);}
  return (
    <Col sm={4}>
    <div className=" hidden md:block sticky top-48 ">
    <Accordion className="flex flex-col gap-2">
      <Accordion.Item eventKey="0">
        <Accordion.Header className="font-serif tracking-wider">
          
        AVAILABILITY
        </Accordion.Header>
        <Accordion.Body>
          <p>
          In stock only
          </p>

          
        </Accordion.Body>

        {/* second one */}
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className="font-serif tracking-wider ">
          
           PRICE
        </Accordion.Header>
        <Accordion.Body>
          
        <div className="p-4">
<div className="font-semibold mb-2 text-lg">Price</div>
<Form className="space-y-4">
<Form.Label>Rs {priceRange[0]} to Rs {priceRange[1]}</Form.Label>
<input
type="range"
min="0"
max="44990"
value={priceRange[0]}
onChange={handleSliderChange}
className="form-range w-full"
/>
<div className="flex justify-between text-center">
<input
  type="number"
  min="0"
  max="44990"
  value={priceRange[0]}
  onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
  className="w-1/2 border rounded-md p-2"
/>
<span className="mx-2">to</span>
<input
  type="number"
  min="0"
  max="44990"
  value={priceRange[1]}
  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
  className="w-1/2 border rounded-md p-2"
/>
</div>
</Form>
</div>


        </Accordion.Body>
      </Accordion.Item>
    

    {/* 3rd one */}

  
      <Accordion.Item eventKey="2">
        <Accordion.Header className="font-serif tracking-wider">
          
           PRODUCT TYPE
        </Accordion.Header>
        <Accordion.Body>
          SHAWLS (4)
        </Accordion.Body>
      </Accordion.Item>

      {/* 4th one  */}
      <Accordion.Item eventKey="3">
        <Accordion.Header className="font-serif tracking-wider">
          
       FABRIC
        </Accordion.Header>
        <Accordion.Body>
        VELVET (4)
        </Accordion.Body>
      </Accordion.Item>


    {/* 5th one  */}

    
      <Accordion.Item eventKey="5">
        <Accordion.Header className="font-serif tracking-wider">
          
        PIECE
        </Accordion.Header>
        <Accordion.Body>
        1 PIECE (4)
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="6">
        <Accordion.Body>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        
    </div>
  </Col>
  )
}

export default Accord