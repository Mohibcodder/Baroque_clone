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

function Readytowear() {
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
        <h3>READY TO WEAR</h3>
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
                      src="https://baroque.pk/cdn/shop/files/52_c346764a-d4ce-47b1-b39f-913bd6f79dc4.jpg?v=1726904703&width=1000"
                      src1 = "https://baroque.pk/cdn/shop/files/55_10736858-aa30-4f70-b1e1-c499b9379b08.jpg?v=1726904703&width=1000"
                      title="EMBROIDERED CHIFFON PR-988"
                      price="PKR 17,990.00"
                    />
                  </Col>

                  <Col md={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/files/110_0b489d7d-86ce-49ad-a5ed-6f52bc831de6.jpg?v=1726303714&width=1000"
                      src1 = "https://baroque.pk/cdn/shop/files/114_8bbd45dd-d481-4ce3-bdb9-56863e8891ab.jpg?v=1726303714&width=1000"
                      title="EMBROIDERED CHIFFON PR-988"
                      price="PKR 19,990.00"
                    />
                  </Col>

                  {/* 3rd pic  */}

                  <Col md={6} className="mt-4">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/files/63_a3f2157f-b32a-4702-8f1a-158ff0b1321e.jpg?v=1726904748&width=1000"
                      src1 ="https://baroque.pk/cdn/shop/files/64_26758a98-d266-4122-8692-c230135ba238.jpg?v=1726904748&width=1000"
                      title="EMBROIDERED CHIFFON PR-987"
                      price="PKR 19,990.00"
                    />
                  </Col>

                  {/* 4th pic */}

                  <Col md={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/files/35_df6095a7-5fa7-4f53-81d3-eceffa6a7ddc.jpg?v=1726904816&width=1000"
                      src1 = "https://baroque.pk/cdn/shop/files/42_92097e6a-6907-49ca-b04d-743405794d8d.jpg?v=1726904816&width=1000"
                      title="EMBROIDERED KHADDAR PR-1005"
                      price="PKR 9,990.00"
                    />
                  </Col>

                  {/* 5th pic */}

                  <Col md={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/files/126_6bb4933d-efea-4e66-9f6e-6d0eba0f1813.jpg?v=1726303745&width=1000"
                      src1 = "https://baroque.pk/cdn/shop/files/128_5336652c-a161-4a02-90df-8243649cec40.jpg?v=1726303745&width=1000"
                      title="EMBROIDERED COTTON PATTI PR-986"
                      price="PKR 19,990.00"
                    />
                  </Col>

                  {/* 6th pic */}

                  <Col md={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/files/50_b8646802-241c-49b9-aa94-5016e78e08d1.jpg?v=1726904996&width=1000" 
                      src1 = "https://baroque.pk/cdn/shop/files/53_770165e6-8dcc-40ca-92b6-55d15ceef622.jpg?v=1726904996&width=1000"
                      title="EMBROIDERED KHADDAR PR-1007"
                      price="PKR 12,990.00"
                    />
                  </Col>

                  {/* 7th pic */}

                  <Col md={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/files/61_3b447787-9a32-4899-af17-609097f52dd6.jpg?v=1724488605&width=1000"
                      src1 = "https://baroque.pk/cdn/shop/files/62_dcd32f6c-6b53-4adb-9dff-79b78eddd1e1.jpg?v=1724488604&width=1000"
                      title="EMBROIDERED CHIFFON PR-753"
                      price="PKR 24,990.00"
                    />
                  </Col>

                  {/* 8th pic */}

                  <Col md={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/files/08_6a5bd2e3-f096-43c1-9d01-835bb1f1246c.jpg?v=1724659201&width=1000"
                      src1 = "https://baroque.pk/cdn/shop/files/09_86fb2b57-7b75-4669-bf18-cf1463bb565e.jpg?v=1724659201&width=1000"
                      title="SOLID SILK SUIT PR-698"
                      price="PKR 14,990.00"
                    />
                  </Col>

                  {/* 9th pic */}
                  <Col md={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/products/34_18.jpg?v=1664607546&width=1000"
                      src1 = "https://baroque.pk/cdn/shop/products/35_17.jpg?v=1664607546&width=1000"
                      title="EMBROIDERED CHIFFON PR-752"
                      price="PKR 24,990.00"
                    />
                  </Col>

                  {/* 10th pic */}

                  <Col md={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/products/109_4.jpg?v=1697286068&width=1000"
                      src1 =  "https://baroque.pk/cdn/shop/products/106_4.jpg?v=1697286068&width=1000"
                      title="SOLID VELVET SUIT PR-701"
                      price="PKR 14,990.00"
                    />
                  </Col>

                  {/* 11th pic */}

                  <Col md={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/products/53_14.jpg?v=1664607405&width=1000"
                      src1 = "https://baroque.pk/cdn/shop/products/54_12.jpg?v=1664607405&width=1000"
                      title="EMBROIDERED CHIFFON PR-898"
                      price="PKR 19,990.00"
                    />
                  </Col>

                  {/* 12th pic */}

                  <Col md={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/files/42_bb1383d4-0647-4dec-956e-11a842c7f416.jpg?v=1721909506&width=1000"
                      src1 = "https://baroque.pk/cdn/shop/files/43_cf3b55fb-11b7-4141-af34-2f9297763cbb.jpg?v=1721909506&width=1000"
                      title="SOLID VELVET SUIT PR-575"
                      price="PKR 14,990.00"
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

export default Readytowear;
