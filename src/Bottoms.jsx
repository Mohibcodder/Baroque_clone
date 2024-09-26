import React, { useEffect, useState } from 'react';
import Header from './Header';
// import Secondbody from './Secondbody';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Secondpart from './Secondpart';
import Footer from "./Footer";
import Accordion from "react-bootstrap/Accordion";
import Container from 'react-bootstrap/Container';
import { Form } from 'react-bootstrap';

function Bottoms() {
  const [scroll, setScroll] = useState(false); 

  useEffect(() => {
    const a = document.getElementById("main");

    const ScrollNav = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 247) {
        setScroll(true);
        a.style.backgroundColor = "#FFFFFF";
        a.style.position = "fixed";
        a.style.top = "70px";
        a.style.width = "100%"; // Ensure it takes full width when fixed
      } else {
        setScroll(false);
        a.style.backgroundColor = "";
        a.style.position = "";
        a.style.top = "";
        a.style.width = ""; // Reset width when not fixed
      }
    };

    // Debounce the scroll event to improve performance
    const handleScroll = () => {
      window.requestAnimationFrame(ScrollNav);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Run once when the component mounts


    // State for handling selected option
    const [selectedOption, setSelectedOption] = useState("");

    // Function to handle change in the select element
    const handleChange = (event) => {
      setSelectedOption(event.target.value);
    };

    
    const [priceRange, setPriceRange] = useState([0, 44990]);

    const handleSliderChange = (e) => {
      setPriceRange([e.target.value, priceRange[1]]);}

  
  return (
    <>
      <Header />

      <div id='unstiched' className='uppercase font-serif d-flex justify-center items-center text-3xl border border-gray-800 h-48'>
        <h3>BOTTOMS</h3>
      </div>

      <div 
        id='main' 
        className={`h-12 uppercase font-mono d-flex justify-center items-center text-xl border border-gray-800 cursor-pointer ${scroll ? 'sticky z-40 w-full' : ''}`}
      >
        12 products    
      </div>

      {/* <Secondbody /> */}

      <>
      <div id="secondpage" style={{ width: "99.3%" }}>
        {/* START */}
        <Container>
          <Row>
            {/* FIXED TAG */}
            <Col md={3}>
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

            {/* MAIN IMAGE SHOWER */}

            <Col sm={9}>
              {/* main */}

              <Container className="mb-14">
                <Row>
                  <Col md={6} className="mt-4">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/products/930A2022_-_Skin.jpg?v=1570117940&width=1000"
                      src1 = "https://baroque.pk/cdn/shop/products/930A2023_-_Skin.jpg?v=1570117940&width=1000"
                      title="EMBROIDERED PRINTED LAWN UF-711"
                      price="PKR 8,990.00"
                      brand="FORMAL"
                    />
                  </Col>

                  <Col md={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/products/930A2091.jpg?v=1580707818&width=1000"
                      src1 = "https://baroque.pk/cdn/shop/products/930A2095.jpg?v=1580707818&width=1000"
                      title="EMBROIDERED SILK UF-696"
                      price="PKR 9,990.00"
                      brand="FORMAL"
                    />
                  </Col>

                  {/* 3rd pic  */}

                  <Col md={6} className="mt-4">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/products/12_61a4b73c-79f3-4201-8aa3-ea3b1bd86249.jpg?v=1641196570&width=1000"  
                      src1 = "https://baroque.pk/cdn/shop/products/11_35a3035d-eef5-444f-8725-791eee3897ed.jpg?v=1641196354&width=1000"
                      title="EMBROIDERED PRINTED LAWN UF-710"
                      price="PKR 8,990.00"
                      brand="FORMAL"
                    />
                  </Col>

                  {/* 4th pic */}

                  <Col md={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/products/319A0072.jpg?v=1570117833&width=400"
                      src1 = "https://baroque.pk/cdn/shop/products/319A0076.jpg?v=1570117833&width=1000"
                      title="EMBROIDERED CHIFFON UF-679"
                      price="PKR 15,990.00"
                      brand="FORMAL"
                    />
                  </Col>

                  {/* 5th pic */}

                  <Col md={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/products/03_64ca96d0-a79e-4023-937e-f0d7ae0dbaa9.jpg?v=1641195866&width=400"
                      src1 = "https://baroque.pk/cdn/shop/products/01_15ce5dbf-1ad3-4417-b8d8-0ddb9d83f822.jpg?v=1641195866&width=1000"
                      title="EMBROIDERED PRINTED LAWN UF-709"
                      price="PKR 5,990.00"
                      brand="FORMAL"
                    />
                  </Col>

                  {/* 6th pic */}

                  <Col md={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/products/t3.jpg?v=1650793220&width=400"
                      src1 = "https://baroque.pk/cdn/shop/products/t4.jpg?v=1650793220&width=1000"
                      title="EMBROIDERED CHIFFON UF-683"
                      price="PKR 10,990.00"
                      brand="FORMAL"
                    />
                  </Col>

                  {/* 7th pic */}

                  <Col md={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/products/t6.jpg?v=1644667759&width=1000"
                      src1 = "https://baroque.pk/cdn/shop/products/t5.jpg?v=1644667759&width=1000"
                      title="EMBROIDERED PRINTED LAWN UF-715"
                      price="PKR 6,990.00"
                      brand="FORMAL"
                    />
                  </Col>

                  {/* 8th pic */}

                  <Col md={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/products/20_8.jpg?v=1633595323&width=1000"
                      src1 = "https://baroque.pk/cdn/shop/products/21_7.jpg?v=1633595323&width=1000"
                      title="EMBROIDERED VELVET UF-420"
                      price="PKR 19,990.00"
                      brand="FORMAL"
                    />
                  </Col>

                  {/* 9th pic */}
                  <Col md={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/products/131_1_6bcea4b1-ca5e-4d08-aa21-c1f88c0adb07.jpg?v=1679290949&width=1000"
                      src1 = "https://baroque.pk/cdn/shop/products/133_1_721a9fe1-cf11-4005-bc44-31f80e6bffc8.jpg?v=1679290949&width=1000"
                      title="EMBROIDERED PRINTED LAWN UF-713"
                      price="PKR 6,990.00"
                      brand="FORMAL"
                    />
                  </Col>

                  {/* 10th pic */}

                  <Col md={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/products/148_b4be25bf-d203-45e4-bab4-a1e2b62d7b4e.jpg?v=1679290782&width=1000"
                      src1 = "https://baroque.pk/cdn/shop/products/150_fd2fafcd-d264-495b-9de2-aae10cd1f8be.jpg?v=1679290782&width=1000"
                      title="EMBROIDERED CHIFFON UF-680"
                      price="PKR 11,990.00"
                      brand="FORMAL"
                    />
                  </Col>

                  {/* 11th pic */}

                  <Col md={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/products/139_27ac165a-720a-47fb-a915-aadca8429aa2.jpg?v=1679292191&width=1000"
                      src1 = "https://baroque.pk/cdn/shop/products/140_f5360869-396b-43f2-8637-6234210f0c6d.jpg?v=1679292191&width=1000"
                      title="EMBROIDERED VELVET UF-466"
                      price="PKR 17,990.00"
                      brand="FORMAL"
                    />
                  </Col>

                  {/* 12th pic */}

                  <Col md={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/products/152_604e476a-9289-4df9-aa9f-8d1eefa5c22b.jpg?v=1679295085&width=1000"
                      src1 = "https://baroque.pk/cdn/shop/products/138_3987173e-3b30-4658-8713-b3cebac03267.jpg?v=1679295085&width=1000"
                      title="EMBROIDERED CHIFFON UF-681"
                      price="PKR 11,990.00"
                      brand="FORMAL"
                    />
                  </Col>
                </Row>
              </Container>

              {/* main col */}
            </Col>
          </Row>
        </Container>
        {/* CLOSED */}
      </div>

      <Footer />
    </>






    </>
  );
}

export default Bottoms;
