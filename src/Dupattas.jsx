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

function Dupattas() {
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
        <h3>Dupattas</h3>
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
                      src="https://baroque.pk/cdn/shop/products/5_8_ae9fac23-746f-4bfd-a71f-5ab8da59fa2b.jpg?v=1638602800&width=800"
                      src1 = "https://baroque.pk/cdn/shop/products/3_13_cbf31baa-bbf1-450c-926b-cae46b6ac04e.jpg?v=1638602800&width=800"
                      title="EMBROIDERED PRINTED LAWN UF-711"
                      price="pricePKR 8,990.00"
                      brand="Dupattas"
                    />
                  </Col>

                  <Col md={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/products/10_3_fbe3c0f2-2362-448f-89dd-03b43bbd89da.jpg?v=1638602834&width=800"
                      src1 = "https://baroque.pk/cdn/shop/products/12_3.jpg?v=1638602834&width=800"
                      title="EMBROIDERED SILK UF-696"
                      price="PKR 9,990.00"
                       brand="Dupattas"
                    />
                  </Col>

                  {/* 3rd pic  */}

                  <Col md={6} className="mt-4">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/products/20_2.jpg?v=1638602795&width=800"
                      src1 = "https://baroque.pk/cdn/shop/products/16_2_f038779b-2bf7-4fcc-a966-c0a4e3ae6dac.jpg?v=1638602795&width=800"
                      title="EMBROIDERED PRINTED LAWN UF-710"
                      price="PKR 8,990.00"
                       brand="Dupattas"
                    />
                  </Col>

                  {/* 4th pic */}

                  <Col md={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/products/44_2.jpg?v=1638602612&width=800"
                      src1 = 'https://baroque.pk/cdn/shop/products/38_3.jpg?v=1636697245&width=800'
                      title="EMBROIDERED CHIFFON UF-679"
                      price="PKR 15,990.00"
                       brand="Dupattas"
                    />
                  </Col>

                  {/* 5th pic */}

                  <Col md={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/products/12_24.jpg?v=1635319416&width=800"
                      src1 = "https://baroque.pk/cdn/shop/products/13_22.jpg?v=1635319415&width=800"
                      title="EMBROIDERED PRINTED LAWN UF-709"
                      price="PKR 5,990.00"
                       brand="Dupattas"
                    />
                  </Col>

                  {/* 6th pic */}

                  <Col md={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/products/4_50.jpg?v=1627906631&width=800"
                      src1 ="https://baroque.pk/cdn/shop/products/5_42.jpg?v=1627906631&width=800"
                      title="EMBROIDERED CHIFFON UF-683"
                      price="PKR 10,990.00"
                       brand="Dupattas"
                    />
                  </Col>

                  {/* 7th pic */}

                  <Col md={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/products/DP-01.jpg?v=1625229871&width=800"
                      src1 = "https://baroque.pk/cdn/shop/products/DP-011.jpg?v=1611396517&width=800"
                      title="EMBROIDERED PRINTED LAWN UF-715"
                      price="PKR 6,990.00"
                      brand="Dupattas"
                    />
                  </Col>

                  {/* 8th pic */}

                  <Col md={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/products/61_ac53d131-513d-4ef6-87f0-e0cf0a8f14fa.jpg?v=1662449823&width=800"
                      src1 = "https://baroque.pk/cdn/shop/products/62_947a1da0-fd5d-4f6e-b630-002641f7897d.jpg?v=1662449824&width=800"
                      title="EMBROIDERED VELVET UF-420"
                      price="PKR 19,990.00"
                      brand="Dupattas"
                    />
                  </Col>

                  {/* 9th pic */}
                  <Col md={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/products/243.jpg?v=1650352414&width=800"
                      src1 = "https://baroque.pk/cdn/shop/products/239.jpg?v=1650352414&width=800"
                      title="EMBROIDERED PRINTED LAWN UF-713"
                      price="PKR 6,990.00"
                       brand="Dupattas"
                    />
                  </Col>

                  {/* 10th pic */}

                  <Col md={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/files/146_d2f9032b-8888-45ad-916e-9c10ecfec813.jpg?v=1726814317&width=800"
                      src1 = 'https://baroque.pk/cdn/shop/files/147_94462d5a-6ef9-4d4a-8344-52854780a41f.jpg?v=1726814317&width=800'
                      title="EMBROIDERED CHIFFON UF-680"
                      price="PKR 11,990.00"
                       brand="Dupattas"
                    />
                  </Col>

                  {/* 11th pic */}

                  <Col md={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/files/137_03c57392-ecef-460e-83fd-0e372622f62b.jpg?v=1726814267&width=800"
                      src1 = "https://baroque.pk/cdn/shop/files/136_a23dd1de-a9bb-4155-8e05-07903ea16bb5.jpg?v=1726814267&width=800"
                      title="EMBROIDERED VELVET UF-466"
                      price="PKR 17,990.00"
                       brand="Dupattas"
                    />
                  </Col>

                  {/* 12th pic */}

                  <Col md={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/products/Dp-02.jpg?v=1611396581&width=800"
                      src1 = "https://baroque.pk/cdn/shop/products/Dp-0222.jpg?v=1611396581&width=800"
                      title="EMBROIDERED CHIFFON UF-681"
                      price="PKR 11,990.00"
                       brand="Dupattas"
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

export default Dupattas;
