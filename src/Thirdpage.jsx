// import React from "react";
import Header from "./Header";
import Carousel from "react-bootstrap/Carousel";
import Footer from "./Footer";


import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Thirdbuttonprop from "./Thirdbuttonprop";
import { Button, ToggleButtonGroup, ToggleButton, Form } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { HiOutlineTag } from "react-icons/hi2";
import { RiBox3Line } from "react-icons/ri";
import { PiAirplaneTiltLight } from "react-icons/pi";
import { GiReturnArrow } from "react-icons/gi";
import { BiLeaf } from "react-icons/bi";
import Container from 'react-bootstrap/Container';
import Thirdpart from "./Thirdpart";


import React, { useState } from "react";


function Thirdpage() {
  const [type, setType] = useState("UNSTITCHED");
  const [quantity, setQuantity] = useState(1);

  const handleTypeChange = (val) => setType(val);

  const handleQuantityChange = (amount) => {
    if (quantity + amount > 0) {
      setQuantity(quantity + amount);
    }
  };
  return (
    <>
      <Header />
 
  <div>
  <Container className="mt-2">
        <Row>
          
          {/* big pic  */}
        <Col md={1}></Col>

          <Col md={6}>
          <div className=" hidden md:block">
            <div className="mt-4">
              <Thirdpart
                img
                src="https://baroque.pk/cdn/shop/files/21_54d03c3c-1277-43da-bd84-e9decf0d19be.jpg?v=1725624149&width=1000"
              />
            </div>

            {/* 2nd pic */}

            <div className="mt-4">
              <Thirdpart
                img
                src="https://baroque.pk/cdn/shop/files/24_d8ca67ea-d0ee-48da-95db-a57ed8b3055f.jpg?v=1725624149&width=1000"
              />
            </div>

            {/* 3rd pic */}

            <div className="mt-4">
              <Thirdpart
                img
                src="https://baroque.pk/cdn/shop/files/22_d64d934d-d740-42d2-a2bf-9d7ae7b29b5c.jpg?v=1725624149&width=1000"
              />
            </div>

            {/* 4th pic */}

            <div className="mt-4">
              <Thirdpart
                img
                src="https://baroque.pk/cdn/shop/files/20_9992c470-9aa1-48ce-9c38-fa0bc2ed1e1f.jpg?v=1725624149&width=1000"
              />
            </div>

            {/* 5th pic */}

            <div className="mt-4">
              <Thirdpart
                img
                src="https://baroque.pk/cdn/shop/files/20_9992c470-9aa1-48ce-9c38-fa0bc2ed1e1f.jpg?v=1725624149&width=1000"
              />
            </div>

            {/* 6th pic */}

            <div className="mt-4">
              <Thirdpart
                img
                src="https://baroque.pk/cdn/shop/files/23_ecfeea86-7118-40f0-bedb-c4e601fb3120.jpg?v=1725624150&width=1000"
              />
            </div>

            {/* 7th pic */}

            <div className="mt-4">
              <Thirdpart
                img
                src="https://baroque.pk/cdn/shop/files/15_aa9bcc0e-0d37-4176-b1aa-638d1c17a072.jpg?v=1725624019&width=1000"
              />
            </div>

            {/* 8th pic */}

            <div className="mt-4">
              <Thirdpart
                img
                src="https://baroque.pk/cdn/shop/files/17_24d38cf2-cf25-46a7-b0ce-dcb8b023f18f.jpg?v=1725624019&width=1000"
              />
            </div>

            {/* 9th pic */}
            <div className="mt-4">
              <Thirdpart
                img
                src="https://baroque.pk/cdn/shop/files/16_0e415862-93d6-43de-b49d-eb61584c4027.jpg?v=1725624019&width=1000"
              />
            </div>

            {/* 10th pic */}
            <div className="mt-4">
              <Thirdpart
                img
                src="https://baroque.pk/cdn/shop/files/18_d7b6be7e-a353-4e0b-96d4-b2cfc3d83820.jpg?v=1725624019&width=1000"
              />
            </div>

            {/* 11th pic */}

            <div className="mt-4">
              <Thirdpart
                img
                src="https://baroque.pk/cdn/shop/files/19_0e70f316-c927-441f-8986-5be61cc4ca77.jpg?v=1725624019&width=1000"
              />
            </div>
          </div>
          </Col>

            {/* when responsive we get slider */}
          

            <>
      <div className="block md:hidden">
        <Carousel>
          {/* 1st Slide */}
          <Carousel.Item>
            <img
              src="https://baroque.pk/cdn/shop/files/21_54d03c3c-1277-43da-bd84-e9decf0d19be.jpg?v=1725624149&width=1000"
              alt="First slide"
            />
          </Carousel.Item>

          {/* 2nd Slide */}
          <Carousel.Item>
            <img
              src="https://baroque.pk/cdn/shop/files/24_d8ca67ea-d0ee-48da-95db-a57ed8b3055f.jpg?v=1725624149&width=1000"
              alt="Second slide"
            />
          </Carousel.Item>

          {/* 3rd Slide */}
          <Carousel.Item>
            <img
              src="https://baroque.pk/cdn/shop/files/22_d64d934d-d740-42d2-a2bf-9d7ae7b29b5c.jpg?v=1725624149&width=1000"
              alt="Third slide"
            />
          </Carousel.Item>

          {/* 4th  */}
          <Carousel.Item>
            <img
              src="https://baroque.pk/cdn/shop/files/20_9992c470-9aa1-48ce-9c38-fa0bc2ed1e1f.jpg?v=1725624149&width=1000"
              alt="Fourth slide"
            />
          </Carousel.Item>

          {/* 5th  */}
          <Carousel.Item>
            <img
              src="https://baroque.pk/cdn/shop/files/25_5b32752c-d049-4060-a39f-275f1bdce01d.jpg?v=1725624149&width=1000"
              alt="Fifth slide"
            />
          </Carousel.Item>

          {/* 6th  */}

          <Carousel.Item>
            <img
              src="https://baroque.pk/cdn/shop/files/15_aa9bcc0e-0d37-4176-b1aa-638d1c17a072.jpg?v=1725624019&width=1000"
              alt="Twenty-first slide"
            />
          </Carousel.Item>

          {/* 7th  */}

          <Carousel.Item>
            <img
              src="https://baroque.pk/cdn/shop/files/17_24d38cf2-cf25-46a7-b0ce-dcb8b023f18f.jpg?v=1725624019&width=1000"
              alt="Twenty-first slide"
            />
          </Carousel.Item>

          {/* 8th */}

          <Carousel.Item>
            <img
              src="https://baroque.pk/cdn/shop/files/16_0e415862-93d6-43de-b49d-eb61584c4027.jpg?v=1725624019&width=1000"
              alt="Twenty-first slide"
            />
          </Carousel.Item>

          {/* 9th */}

          <Carousel.Item>
            <img
              src="https://baroque.pk/cdn/shop/files/18_d7b6be7e-a353-4e0b-96d4-b2cfc3d83820.jpg?v=1725624019&width=1000"
              alt="Twenty-first slide"
            />
          </Carousel.Item>

          {/* 10th */}

          <Carousel.Item>
            <img
              src="https://baroque.pk/cdn/shop/files/19_0e70f316-c927-441f-8986-5be61cc4ca77.jpg?v=1725624019&width=1000"
              alt="Twenty-first slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>


          <Col md={5}>
            <div className="">
              <div className="p-8 max-w-md  bg-white  shadow-md space-y-4">
                <h1 className="text-lg font-semibold text-gray-600">
                  EMBROIDERED PRINTED LAWN UF-711
                </h1>
                <p className="text-lg text-gray-600">PKR 8,990.00</p>
                <p className="text-sm text-gray-500">SKU: BQU-UF-D711-00</p>
                <p className="text-sm text-gray-500">3 PIECE</p>

                <div className="space-y-2">
                  <h4 className="text-md mt-2 mb-3 text-gray-700">Type:</h4>
                  <ToggleButtonGroup
                    type="radio"
                    name="type"
                    value={type}
                    onChange={handleTypeChange}
                  >
                    <ToggleButton
                      id="tbg-btn-1"
                      value="UNSTITCHED"
                      variant={type === "UNSTITCHED" ? "dark" : "light"}
                    >
                      UNSTITCHED
                    </ToggleButton>
                    <ToggleButton
                      id="tbg-btn-2"
                      value="STITCHED"
                      variant={type === "STITCHED" ? "dark" : "light"}
                    >
                      STITCHED
                    </ToggleButton>
                  </ToggleButtonGroup>
                </div>

                {/* cust size  */}
                <div className="space-y-2 mb-4">
                  <h4 className="text-md text-gray-700">Size:</h4>
                  <Form.Select aria-label="Default select size">
                    <option value="default">DEFAULT</option>
                    <option value="default">XS</option>
                    <option value="default">S</option>
                    <option value="default">M</option>
                    <option value="default">L</option>
                    <option value="default">XL</option>
                  </Form.Select>
                </div>
                <p  className="text-sm text-black underline">
                  Size Chart
                </p>

                <div className="flex space-x-2 items-center flex-col">
                 <div> 
                  <Button
                    variant="outline-secondary"
                    className="border "
                    onClick={() => handleQuantityChange(-1)}
                  >
                    -
                  </Button>
                  <span className="text-md">{quantity}</span>
                  <Button
                    variant="outline-secondary"
                    onClick={() => handleQuantityChange(1)}
                  >
                    +
                  </Button>
                  </div>
                <Thirdbuttonprop/>
                </div>


           

              </div>
            </div>
              <Accordion className="sticky top-32">
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="font-serif tracking-wider">
                    
                    <HiOutlineTag className="w-10 h-6 " /> Description
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      This outfit features a digital printed lawn shirt and
                      trousers, showcasing intricate embroidery on the neckline
                      patch and decorative borders on the front, back, and
                      sleeves. The sleeves are further enhanced with embroidery
                      and digital printing on organza. The look is completed
                      with a beautifully embroidered digital printed dupatta.
                    </p>

                    <h5>Styling Tip</h5>

                    <p>
                      For a sophisticated finish, accessorize with understated
                      jewellery and elegant footwear to let the detailed
                      embroidery and prints shine. Perfect for special occasions
                      or festive events, this ensemble offers a seamless blend
                      of traditional elegance and modern style.
                    </p>
                  </Accordion.Body>

                  {/* second one */}
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header className="font-serif tracking-wider ">
                    
                    <RiBox3Line className="w-10 h-6 " /> Product Details
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Digital printed lawn shirt & trouser (5 yard) Embroidered
                      organza neckline patch (1.08 yard) <br />
                      Embroidered organza front , back & sleeves border (6 yard)
                      <br />
                      Embroidered organza sleeves border (1.08 yard) <br />
                      Embroidered digital printed organza dupatta (2.50 yard)
                      <br />
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
            

          

          
                <Accordion.Item eventKey="3">
                  <Accordion.Header className="font-serif tracking-wider">
                    
                    <PiAirplaneTiltLight className="w-10 h-6 " /> Delivery
                  </Accordion.Header>
                  <Accordion.Body>
                    Dispatch time for unstitched : Within 1 week Dispatch time
                    for stitched : Within 3 weeks
                    <br />
                    <br />
                    *Customize stitching : 1 week extra
                  </Accordion.Body>
                </Accordion.Item>

                
                <Accordion.Item eventKey="4">
                  <Accordion.Header className="font-serif tracking-wider">
                    
                    <GiReturnArrow className="w-10 h-6 " /> Returns and Exchange
                  </Accordion.Header>
                  <Accordion.Body>
                    We offer 10-days exchange policy starting from the date of
                    order delivery.
                    <p>
                      In case of any damaged OR missing item, the concern must
                      be raised within 48 hours to our customer care team for
                      further assistance, otherwise the complaints cannot be
                      accepted.
                    </p>
                    <br />
                    <p>
                      For additional information and the exchange form click
                      here
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              

            

            
                <Accordion.Item eventKey="5">
                  <Accordion.Header className="font-serif tracking-wider">
                    
                    <BiLeaf className="w-10 h-6 " /> Care Instructions
                  </Accordion.Header>
                  <Accordion.Body>
                  Dry clean recommended  <br />Iron the clothes at moderate
                    temperature Do not use any type of bleach or stain removing
                    chemicals 
                   <p> Actual color may slightly vary from the image shown </p>
                   <p>  Unstitched includes fabric only Slight variation in colour
                    and embellishments may occur after restocking of specific
                    articles Custom length or any other changing which varies
                    from our standard size chart comes under customized
                    stitching for stitched articles. Pret/Ready to wear articles
                    can not be customized  </p> 
                    
                    All the sleeveless dresses are stitched with sleeves by default until sleeveless is requested by the customer. Straight sleeves are attached.
                    
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Body>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
          </Col>
        </Row>
      </Container>

      <hr />




      <div className="flex justify-center font-serif	uppercase mt-10 text-2xl">

      Related products

      </div>


      <Container className="mt-10 mb-20">
      <Row>
      
        <Col className="" sm={4}>
        
        <img className="a cursor-pointer"
        src="https://baroque.pk/cdn/shop/files/07_fcfa9398-a1a4-468d-9b5b-dc3dc73caaa4.jpg?v=1725623586&width=1000" alt=""
        tital = 'EMBROIDERED PRINTED'
      
        />
        <div className=" text-center uppercase  tracking-wider	">
        <p className="text-xl	">  EMBROIDERED PRINTED  </p>
        <p  className="text-lg	">  LAWN UF-710  </p>
        <p className="text-base	">  PKR 8,990.00  </p>
        <p className="">  UNSTITCHED SUMMER </p>


        </div>
        </Col>

        {/* 2nd */}

        <Col className="" sm={4}>
        
        <img className="a cursor-pointer"
        src="https://baroque.pk/cdn/shop/files/40_e0c3394a-4788-46c6-b138-77f0d3d1acd6.jpg?v=1725625479&width=1000" alt=""
        tital = 'EMBROIDERED PRINTED'
      
        />
        <div className=" text-center uppercase  tracking-wider	">
        <p className="text-xl	">  EMBROIDERED PRINTED LAWN UF-714  </p>
        <p  className="text-lg	">  LAWN UF-714  </p>
        <p className="text-base	">  PKR 6,990.00  </p>
        <p className="">  UNSTITCHED SUMMER </p>


        </div>
        </Col>

        {/* 3rd */}
       

        <Col className="" sm={4}>
        
        <img className="a cursor-pointer"
        src="https://baroque.pk/cdn/shop/files/68_c34dd715-e0b1-4523-8896-320e121752b5.jpg?v=1725627013&width=1000" alt=""
        tital = 'EMBROIDERED PRINTED'
      
        />
        <div className=" text-center uppercase  tracking-wider	">
        <p className="text-xl	">  EMBROIDERED PRINTED  </p>
        <p  className="text-lg	">  LAWN UF-718  </p>
        <p className="text-base	">  PKR 5,990.00  </p>
        <p className="">  UNSTITCHED SUMMER </p>


        </div>
        </Col>

        {/* 4th  */}


        <Col className="" sm={4}>
        
        <img className="a cursor-pointer"
        src="https://baroque.pk/cdn/shop/files/62_9bb5b00f-523f-4430-86e6-54b287245c7b.jpg?v=1725626909&width=1000" alt=""
        tital = 'EMBROIDERED PRINTED'
      
        />
        <div className=" text-center uppercase  tracking-wider">
        <p className="text-xl	">  EMBROIDERED PRINTED  </p>
        <p  className="text-lg	">  LAWN UF-717  </p>
        <p className="text-base	">  PKR 5,990.00  </p>
        <p className="">  UNSTITCHED SUMMER </p>


        </div>
        </Col>
      </Row>
      
    </Container>





    </div>
      




      


      <Footer />
    </>
  );
}

export default Thirdpage;
