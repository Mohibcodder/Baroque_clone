import React, { useEffect, useState } from 'react';
import Header from './Header';
// import Secondbody from './Secondbody';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Secondpart from './Secondpart';
import Footer from "./Footer";
import Accordion from "react-bootstrap/Accordion";
// import React, { useState } from 'react';
import { Form, Container } from 'react-bootstrap';
import Pagination from "react-bootstrap/Pagination";



function Secondpage() {
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
 
      <div id='unstiched' className='uppercase  font-serif d-flex justify-center items-center text-3xl border border-gray-800 h-48'>
        <h3>UNSTITCHED</h3>
      </div>

      <div 
        id='main' 
        className={`h-12 uppercase font-mono d-flex justify-center items-center text-xl border border-gray-800 cursor-pointer ${scroll ? 'sticky z-40  w-full' : ''}`}
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
            <Col sm={3}>
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

            <Col sm={8}>
              {/* main */}

              <Container className="mb-14">
                <Row>
                  <Col sm={6} className="mt-4">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/files/21_54d03c3c-1277-43da-bd84-e9decf0d19be.jpg?v=1725624149&width=1000"
                       src1="https://baroque.pk/cdn/shop/files/129_c993a546-e2f8-4fcf-8d32-543dd5e49c7d.jpg?v=1726813941&width=1000"
                      title="EMBROIDERED PRINTED LAWN UF-711"
                      price="pricePKR 8,990.00"
                    />
                  </Col>

                  <Col sm={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/files/80_7140078b-c438-4fd5-ba7c-ad4ac39b3b2e.jpg?v=1726304256&width=1000"
                      src1="https://baroque.pk/cdn/shop/files/81_a342bf6b-04b9-41ce-8338-b6ad8b1a8f13.jpg?v=1726304256&width=1000"

                      title="EMBROIDERED SILK UF-696"
                      price="PKR 9,990.00"
                    />
                  </Col>

                  {/* 3rd pic  */}

                  <Col sm={6} className="mt-4">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/files/07_fcfa9398-a1a4-468d-9b5b-dc3dc73caaa4.jpg?v=1725623586&width=1000"
                      src1="https://baroque.pk/cdn/shop/files/118_094d7d70-0c43-4c07-8a5f-cdcd31293e04.jpg?v=1726814065&width=1000"

                      title="EMBROIDERED PRINTED LAWN UF-710"
                      price="PKR 8,990.00"
                    />
                  </Col>

                  {/* 4th pic */}

                  <Col sm={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/files/03_505a1800-1a26-4f93-96fb-e25707dfc082.jpg?v=1726304052&width=1000"
                      src1="https://baroque.pk/cdn/shop/files/02_df0085ec-b8c5-4b65-a2bc-60281aa985a8.jpg?v=1726304052&width=1000"

                      title="EMBROIDERED CHIFFON UF-679"
                      price="PKR 15,990.00"
                    />
                  </Col>

                  {/* 5th pic */}

                  <Col sm={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/files/01_7f3a7dc5-55b5-46f8-a133-41a89ef3f9d0.jpg?v=1725623070&width=1000"
                      src1="https://baroque.pk/cdn/shop/files/107_e7b0b944-ae55-4568-bc5b-da28c461dcab.jpg?v=1726814136&width=1000"

                      title="EMBROIDERED PRINTED LAWN UF-709"
                      price="PKR 5,990.00"
                    />
                  </Col>

                  {/* 6th pic */}

                  <Col sm={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/files/69_e93e996f-18d4-4782-832a-b30e18188d54.jpg?v=1726304113&width=1000"
                      src1="https://baroque.pk/cdn/shop/files/71_2a3981bd-f61d-444a-801b-f82bf5a6f6c5.jpg?v=1726304113&width=1000"

                      title="EMBROIDERED CHIFFON UF-683"
                      price="PKR 10,990.00"
                    />
                  </Col>

                  {/* 7th pic */}

                  <Col sm={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/files/48_59affa74-9acf-43ce-b26b-a058d1e851e3.jpg?v=1725625630&width=1000"
                      src1="https://baroque.pk/cdn/shop/files/154_7dbc7b3c-48de-482a-9066-c4ad1e61dea8.jpg?v=1726814203&width=1000"

                      title="EMBROIDERED PRINTED LAWN UF-715"
                      price="PKR 6,990.00"
                    />
                  </Col>

                  {/* 8th pic */}

                  <Col sm={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/files/04_c75d5adf-c51d-42b9-b221-da358476a835.jpg?v=1699794694&width=1000"
                      src1 = "https://baroque.pk/cdn/shop/files/158_1208ef43-010d-4c8c-89ac-a371cc2e3bbf.jpg?v=1699794694&width=1000"
                      title="EMBROIDERED VELVET UF-420"
                      price="PKR 19,990.00"
                    />
                  </Col>

                  {/* 9th pic */}
                  <Col sm={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/files/54_cd70a4f8-6db8-4902-bf7c-c9eaa08ecc83.jpg?v=1698922557&width=1000"
                      src1 = "https://baroque.pk/cdn/shop/files/57_1cdaa834-f3ce-49f2-9a84-2d44c3a219d8.jpg?v=1698922557&width=1000"

                      title="EMBROIDERED PRINTED LAWN UF-713"
                      price="PKR 6,990.00"
                    />
                  </Col>

                  {/* 10th pic */}

                  <Col sm={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/products/36_7158bc7b-496e-42ef-91b0-0e3ab6d39ba6.jpg?v=1697885122&width=1000"
                      src1 = "https://baroque.pk/cdn/shop/products/34_216e0149-a3b2-4e2a-b0e5-d0baaf870cce.jpg?v=1697885122&width=1000"

                      title="EMBROIDERED CHIFFON UF-680"
                      price="PKR 11,990.00"
                    />
                  </Col>

                  {/* 11th pic */}

                  <Col sm={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/files/42_68143e3c-6d40-4d36-8c28-c01914bd7c2a.jpg?v=1721026725&width=1000"
                      src1 = "https://baroque.pk/cdn/shop/files/43_216042a9-f425-481f-9249-c07de03d7eaa.jpg?v=1721026725&width=1000"

                      title="EMBROIDERED VELVET UF-466"
                      price="PKR 17,990.00"
                    />
                  </Col>

                  {/* 12th pic */}

                  <Col sm={6} className="mt-4 ">
                    <Secondpart
                      img
                      src="https://baroque.pk/cdn/shop/files/51_63809573-f062-406c-a8d3-17faed0757c9.jpg?v=1722241815&width=1000"
                      src1= "https://baroque.pk/cdn/shop/files/52_27726fa6-a2b4-4044-a9c6-39159783eec0.jpg?v=1722241815&width=1000"
                      title="EMBROIDERED CHIFFON UF-681"
                      price="PKR 11,990.00"
                    />
                  </Col>

                 

                </Row>
              </Container>

              {/* main col */}
            </Col>
          </Row>
        </Container>
        {/* CLOSED */}

        <div className="flex justify-center mt-4 border-none text-black	">
                    <Pagination className="pagination text-black	">
                      <Pagination.Prev className="" />
                      <Pagination.Item className="decoration-black	">
                        1
                      </Pagination.Item>
                      <Pagination.Item className="">2</Pagination.Item>
                      <Pagination.Item className="">3</Pagination.Item>
                      <Pagination.Ellipsis />
                      <Pagination.Item className="">5</Pagination.Item>
                      <Pagination.Next className="" />
                    </Pagination>
                  </div>
      </div>

      <Footer />
    </>






    </>
  );
}

export default Secondpage;
