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

function Specialprices() {
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
        <h3>SPECIAL PRICES</h3>
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
                      src="https://baroque.pk/cdn/shop/files/37_b6ed6e3b-3808-42c6-81ad-50b69641f330.jpg?v=1722077217&width=1000"
                      src1 = "https://baroque.pk/cdn/shop/files/36_8ddf0e8a-48e1-40b6-99a7-0a595cd9138b.jpg?v=1722077217&width=1000"
                      title="EMBROIDERED PRINTED LAWN UF-711"
                      price="PKR 8,990.00"
                      brand="PRET SUMMER"
                    />
                  </Col>

                  <Col md={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/products/34_16.jpg?v=1691923748&width=1000"
                      src1 = "https://baroque.pk/cdn/shop/products/38_16.jpg?v=1691923748&width=1000"
                      title="EMBROIDERED SILK UF-696"
                      price="PKR 9,990.00"
                      brand="PRET SUMMER"
                    />
                  </Col>

                  {/* 3rd pic  */}

                  <Col md={6} className="mt-4">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/products/84_4_1e596c29-d6de-4111-b852-bbbdf884ef8e.jpg?v=1703333793&width=1000"
                      src1 = "https://baroque.pk/cdn/shop/products/83_3_e461a5bf-aec8-49cf-8b10-cf01191ce9cf.jpg?v=1703333793&width=1000"
                      title="EMBROIDERED PRINTED LAWN UF-710"
                      price="PKR 8,990.00"
                      brand="PRET SUMMER"
                    />
                  </Col>

                  {/* 4th pic */}

                  <Col md={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/files/65_5964802a-0a33-4655-901e-faf1dba634e9.jpg?v=1719655069&width=1000"
                      src1 = "https://baroque.pk/cdn/shop/files/66_252cd9cb-a201-406c-9cde-13bf40a77356.jpg?v=1719655081&width=1000"
                      title="EMBROIDERED CHIFFON UF-679"
                      price="PKR 15,990.00"
                      brand="PRET SUMMER"
                    />
                  </Col>

                  {/* 5th pic */}

                  <Col md={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/files/67_ce2a812b-72b9-4a5b-a254-240c64da646c.jpg?v=1721027015&width=1000"
                      src1= "https://baroque.pk/cdn/shop/files/68_90eacf44-b6a9-4215-8d2a-ba4a918f317e.jpg?v=1721027015&width=1000"
                      title="EMBROIDERED PRINTED LAWN UF-709"
                      price="PKR 5,990.00"
                      brand="PRET SUMMER"
                    />
                  </Col>

                  {/* 6th pic */}

                  <Col md={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/files/100_ec0c33ab-02e0-4411-be89-5c2b7f827f9a.jpg?v=1716188071&width=1000"
                      src1 = "https://baroque.pk/cdn/shop/files/102_991bba33-5496-4d25-a42e-8c5f620b8826.jpg?v=1716188111&width=1000"
                      title="EMBROIDERED CHIFFON UF-683"
                      price="PKR 10,990.00"
                      brand="PRET SUMMER"
                    />
                  </Col>

                  {/* 7th pic */}

                  <Col md={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/products/43_9.jpg?v=1699696186&width=1000"
                      src1 = "https://baroque.pk/cdn/shop/products/45_10.jpg?v=1699696186&width=1000"
                      title="EMBROIDERED PRINTED LAWN UF-715"
                      price="PKR 6,990.00"
                      brand="PRET SUMMER"
                    />
                  </Col>

                  {/* 8th pic */}

                  <Col md={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/files/127_2d330f6f-e022-4b56-b509-461ccf007c29.jpg?v=1721027518&width=1000"
                      src1 = "https://baroque.pk/cdn/shop/files/128_54d436f0-2189-41d7-b738-de611bb2f851.jpg?v=1721027518&width=1000"
                      title="EMBROIDERED VELVET UF-420"
                      price="PKR 19,990.00"
                      brand="PRET SUMMER"
                    />
                  </Col>

                  {/* 9th pic */}
                  <Col md={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/files/75_874a3e46-3cf1-4405-8345-ff2caf7ccabd.jpg?v=1717228224&width=1000"
                      src1 = "https://baroque.pk/cdn/shop/files/74_4f7be6eb-c264-4692-9764-61baece74c8e.jpg?v=1717228224&width=1000"
                      title="EMBROIDERED PRINTED LAWN UF-713"
                      price="PKR 6,990.00"
                      brand="PRET SUMMER"
                    />
                  </Col>

                  {/* 10th pic */}

                  <Col md={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/files/84_15e628e4-cb2b-401c-999e-0e5757292cfc.jpg?v=1721033722&width=1000"
                      src1 ="https://baroque.pk/cdn/shop/files/85_fc7ab5f6-0bc2-4478-b867-6868ca602cdd.jpg?v=1721033722&width=1000"
                      title="EMBROIDERED CHIFFON UF-680"
                      price="PKR 11,990.00"
                      brand="PRET SUMMER"
                    />
                  </Col>

                  {/* 11th pic */}

                  <Col md={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/files/52_e65ee449-6434-4fc9-9d03-f8dea61e04e3.jpg?v=1720088385&width=1000"
                      src1 = 'https://baroque.pk/cdn/shop/files/55_d05a696c-d2f3-4c96-829b-4bba0232c9ec.jpg?v=1720088420&width=1000'
                      title="EMBROIDERED VELVET UF-466"
                      price="PKR 17,990.00"
                      brand="PRET SUMMER"
                    />
                  </Col>

                  {/* 12th pic */}

                  <Col md={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/files/81_6d55d64a-8185-483d-834d-744ce303b9be.jpg?v=1714819879&width=1000"
                      src1 = "https://baroque.pk/cdn/shop/files/82_8ff10ad9-805a-4978-9fe9-debadc703c66.jpg?v=1714819878&width=1000"
                      title="EMBROIDERED CHIFFON UF-681"
                      price="PKR 11,990.00"
                      brand="PRET SUMMER"
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

export default Specialprices;
