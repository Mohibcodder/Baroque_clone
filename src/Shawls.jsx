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

function Shawls() {
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
        <h3>SHAWLS</h3>
      </div>

      <div 
        id='main' 
        className={`h-12 uppercase font-mono d-flex justify-center items-center text-xl border border-gray-800 cursor-pointer ${scroll ? 'sticky z-40 w-full' : ''}`}
      >
        04 products    
      </div>

      {/* <Secondbody /> */}

      <>
      <div id="secondpage" style={{ width: "99.3%" }}>
        {/* START */}
        <Container>
          <Row>
            {/* FIXED TAG */}
            <Col sm={3}>
              <div className=" hidden md:block w-32 mt-11 ">
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
                      src="https://baroque.pk/cdn/shop/products/38_19.jpg?v=1693402721&width=1000"
                      src1 = "https://baroque.pk/cdn/shop/products/41_17.jpg?v=1693402721&width=1000"
                      title="EMBROIDERED VELVET SHAWL VS-33"
                      price="PKR 19,990.00"
                      brand="SHAWLS"
                    />
                  </Col>

                  <Col md={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/files/76_62567c68-60c9-4e79-ad2b-817d9a784227.jpg?v=1694854013&width=1000"
                      src1 = "https://baroque.pk/cdn/shop/files/78_18f2d4d1-5d28-438a-8313-030a67c0a020.jpg?v=1694854014&width=1000"
                      title="EMBROIDERED VELVET SHAWL VS-42"
                      price="PKR 19,990.00"
                      brand="SHAWLS"
                    />
                  </Col>

                  {/* 3rd pic  */}

                  <Col md={6} className="mt-4">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/products/65.jpg?v=1632894665&width=1000"
                      src1 = "https://baroque.pk/cdn/shop/products/68.jpg?v=1632894665&width=1000"
                      title="EMBROIDERED VELVET SHAWL VS-24"
                      price="PKR 19,990.00"
                      brand="SHAWLS"
                    />
                  </Col>

                  {/* 4th pic */}

                  <Col md={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/products/48_15.jpg?v=1693402740&width=1000"
                      src1 = "https://baroque.pk/cdn/shop/products/50_14.jpg?v=1693402740&width=1000"
                      title="EMBROIDERED VELVET SHAWL VS-32"
                      price="PKR 19,990.00"
                      brand="SHAWLS"
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

export default Shawls;
