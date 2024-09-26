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

function Chantelle() {
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
        <h3>CHATELLE</h3>
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
                      src="https://baroque.pk/cdn/shop/files/01_d6888945-3a13-4ed1-bd17-da18cde3f068.jpg?v=1705561039&width=400"
                      src1 = "https://baroque.pk/cdn/shop/files/06_07e8b545-794a-41e5-bfef-19770d37ad20.jpg?v=1705561039&width=1000"
                      title="EMBROIDERED PRINTED LAWN UF-711"
                      price="pricePKR 8,990.00"
                      brand="CHATELLE"
                    />
                  </Col>

                  <Col md={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/files/13_db6af676-9e10-4618-8633-b3aebaca4521.jpg?v=1705663522&width=400"
                      src1 = "https://baroque.pk/cdn/shop/files/20_61db9535-36b9-4c8f-912b-a04110ca1593.jpg?v=1705564118&width=1000"
                      title="EMBROIDERED SILK UF-696"
                      price="PKR 9,990.00"
                       brand="CHATELLE"
                    />
                  </Col>

                  {/* 3rd pic  */}

                  <Col md={6} className="mt-4">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/files/37_2985eb17-832d-4738-8e32-971c51040675.jpg?v=1705664484&width=400"
                      src1 = "https://baroque.pk/cdn/shop/files/43_5e82d93e-481b-4c53-9c9e-72067008c85e.jpg?v=1705564154&width=1000"
                      title="EMBROIDERED PRINTED LAWN UF-710"
                      price="PKR 8,990.00"
                       brand="CHATELLE"
                    />
                  </Col>

                  {/* 4th pic */}

                  <Col md={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/files/52_21d554c2-8ef6-4627-9847-3a0ce772f43c.jpg?v=1705564218&width=400"
                      src1 = 'https://baroque.pk/cdn/shop/files/58_de5e11d4-73d0-4602-b519-e05c5b22818f.jpg?v=1705564218&width=1000'
                      title="EMBROIDERED CHIFFON UF-679"
                      price="PKR 15,990.00"
                       brand="CHATELLE"
                    />
                  </Col>

                  {/* 5th pic */}

                  <Col md={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/files/71_734b1969-aebe-442c-a05e-1f7c6add575d.jpg?v=1705736543&width=400"
                      src1 = "https://baroque.pk/cdn/shop/files/81_bda2ea26-0a1f-47d0-83b1-4a65bda38160.jpg?v=1705564318&width=1000"
                      title="EMBROIDERED PRINTED LAWN UF-709"
                      price="PKR 5,990.00"
                       brand="CHATELLE"
                    />
                  </Col>

                  {/* 6th pic */}

                  <Col md={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/files/93_d9e554c5-5fa6-47ec-8845-5f1107d03181.jpg?v=1705734823&width=400"
                      src1 ="https://baroque.pk/cdn/shop/files/103_967139cc-d1e1-46d5-8e3e-a82c7aaccb7e.jpg?v=1705564352&width=1000"
                      title="EMBROIDERED CHIFFON UF-683"
                      price="PKR 10,990.00"
                       brand="CHATELLE"
                    />
                  </Col>

                  {/* 7th pic */}

                  <Col md={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/files/114_8d7fa408-df27-479b-b51f-8e011b19a6f2.jpg?v=1705736387&width=400"
                      src1 = "https://baroque.pk/cdn/shop/files/112_e84c9259-5263-40f3-90a0-76015b7c9c4e.jpg?v=1705564383&width=1000"
                      title="EMBROIDERED PRINTED LAWN UF-715"
                      price="PKR 6,990.00"
                      brand="CHATELLE"
                    />
                  </Col>

                  {/* 8th pic */}

                  <Col md={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/files/140_b5d09bc4-aabd-40bb-906a-b954eae81e15.jpg?v=1705736503&width=400"
                      src1 = "https://baroque.pk/cdn/shop/files/138_db4b4406-862e-4566-9fa0-7a9c57b0a418.jpg?v=1705564507&width=1000"
                      title="EMBROIDERED VELVET UF-420"
                      price="PKR 19,990.00"
                      brand="CHATELLE"
                    />
                  </Col>

                  {/* 9th pic */}
                  <Col md={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/products/57_fd253598-1ab5-4938-9888-b602f874c65f.jpg?v=1677322864&width=400"
                      src1 = "https://baroque.pk/cdn/shop/products/55_46f76d61-f661-483e-9966-cb23336c77b1.jpg?v=1677322864&width=1000"
                      title="EMBROIDERED PRINTED LAWN UF-713"
                      price="PKR 6,990.00"
                       brand="CHATELLE"
                    />
                  </Col>

                  {/* 10th pic */}

                  <Col md={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/products/PS1_1.jpg?v=1612432225&width=400"
                      src1 = 'https://baroque.pk/cdn/shop/products/PS5.jpg?v=1612252983&width=1000'
                      title="EMBROIDERED CHIFFON UF-680"
                      price="PKR 11,990.00"
                       brand="CHATELLE"
                    />
                  </Col>

                  {/* 11th pic */}

                  <Col md={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/products/1Q0A1887.jpg?v=1570388248&width=400"
                      src1 = "https://baroque.pk/cdn/shop/products/1Q0A1993.jpg?v=1570388248&width=1000"
                      title="EMBROIDERED VELVET UF-466"
                      price="PKR 17,990.00"
                       brand="CHATELLE"
                    />
                  </Col>

                  {/* 12th pic */}

                  <Col md={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/products/57_1.jpg?v=1687599432&width=1000"
                      src1 = "https://baroque.pk/cdn/shop/products/59_0a7bda20-a253-439f-92b5-40f31f15a647.jpg?v=1687599432&width=1000"
                      title="EMBROIDERED CHIFFON UF-681"
                      price="PKR 11,990.00"
                       brand="CHATELLE"
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

export default Chantelle;
