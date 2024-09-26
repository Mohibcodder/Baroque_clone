import React from 'react'
import Footer from "../Footer";
import Header from "../Header";

function ShippingPolicy() {
  return (
    <>
      <Header />
      <h3 className="text-center mb-16 mt-24 font-serif text-3xl tracking-widest uppercase">
      Shipping policy 
      </h3>

      <div className="text-center   flex justify-center   ">
        <div className="w-3/4 mb-16  font-sans">
          

          <p className=" tracking-wide  text-left text-base  mt-6">
          Once the order is dispatched, you will be sent a shipping confirmation email with your carrier information and tracking number, be sure to check Junk/Spam folder as well.
          </p>

          <p className=" tracking-wide  text-left text-base  mt-6">
          We use couriers including but not limited to TCS, PostEx, Leopards, Trax, Swyft.
          </p>
          

          <p p className=" tracking-wide  text-left text-base  ">
          We may switch couriers from time to time to ensure the best possible service and best possible pricing to help our customers.
          </p>

          <p className=" tracking-wide  text-left text-base  mt-6">
          You can check the expected dispatch time on our <span className='underline'> Dispatch Timeline. </span>
          </p>

        </div>
      </div>

      <Footer />







    </>
  )
}

export default ShippingPolicy
