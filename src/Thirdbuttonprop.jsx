import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Offcanvas from "react-bootstrap/Offcanvas";

function Thirdbuttonprop(props) {
  const [showBag, setShowBag] = useState(false);
  const handleBagClose = () => setShowBag(false);
  const handleBagShow = () => setShowBag(true);

  return (
    <>
      <button
        className="
    h-[50px] 
    w-full 
    border border-black 
   bg-black
   text-white
    mt-[43px] 
    transition-colors duration-200 ease-in-out
  "
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "black";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "black";
            e.currentTarget.style.color = "white";
          }}
        onClick={handleBagShow}
      >
        ADD TO CART
      </button>


      <Offcanvas show={showBag} onHide={handleBagClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>CART</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="flex justify-center">
            <div className="p-6 rounded-lg shadow-lg w-full">
              {/* Cart Header */}
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold"></h2>
                <button className="text-lg"></button>
              </div>

              <div className="mb-4 text-sm border-b-2 border-t-2">
                You are eligible for free shipping.
              </div>

              <div className="flex items-center mb-6">
                <img
                  src="https://cdn.shopify.com/s/files/1/2277/5269/files/126_0d9a3c70-1ded-4eaf-ae13-2eb1cc983a1d.jpg?v=1726813941&width=120"
                  alt="Product"
                  className="w-24 h-32 object-cover rounded-lg mr-4"
                />
                <div className="flex flex-col w-full">
                  <span className="text-xs uppercase text-gray-600">Unstitched</span>
                  <span className="font-semibold">Embroidered Printed Lawn UF-711</span>
                  <span className="text-lg font-bold">PKR 14,990.00</span>
                  <span className="text-sm text-gray-500">Stitched / XS</span>

                  {/* Quantity Selector */}
                  <div className="flex items-center mt-2">
                    <button className="border px-2 py-1">-</button>
                    <input
                      type="text"
                      value="1"
                      readOnly
                      className="text-center w-12 border-t border-b px-2 py-1"
                    />
                    <button className="border px-2 py-1">+</button>
                  </div>

                  <button className="text-sm hover:underline">
                    Remove
                  </button>
                </div>
              </div>

              {/* Shipping and Tax Notice */}
              <div className="text-sm text-gray-500 mb-4">
                Taxes and shipping calculated at checkout
              </div>

              {/* Checkout Button */}
              <div className="text-center">
                <Link to="/LastForm">
                  <button className="bg-black text-white w-full py-3 rounded-lg text-lg">
                    CHECKOUT - PKR 14,990.00
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Thirdbuttonprop;
