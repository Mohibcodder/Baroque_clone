import React from 'react'
import Footer from '../Footer'
import Header from '../Header'

function Serviceweprovide() {
  return (
    <>

<Header />
<h3 className="text-center mb-16 mt-24 font-serif text-3xl tracking-widest uppercase">Service We Provide</h3>

<div className="text-center   flex justify-center ">
        <div className="w-2/4  font-sans	 ">
       
            <p className="  tracking-wider font-bold text-left ">CUSTOMIZED STITCHING:</p>
            <p className=" font-normal tracking-wide text-left ">Please note that the custom stitch is available for paid orders only and is charged PKR 5,000 each article.</p>
            <p className=" font-normal tracking-wide text-left ">* Cancellation of Orders or Changes can be made within <span className="font-bold	"> 2-3 days </span>  after Order Placement.</p>
            <p className=" font-normal tracking-wide text-left ">* Changes made after specified timeline will cause delay in order.</p>
            <p className=" font-normal tracking-wide text-left ">* Customized stitching orders may require additional <span className="font-bold	"> 1 week </span>  for completion.</p>
            <p className=" font-normal tracking-wide text-left ">* Custom stitched order will not be exchanged or returned as they are stitched on customer’s provided size and requirements.</p>
            <p className=" font-normal tracking-wide text-left ">* To get your outfit custom stitched please select the custom stitched tab in the stitched option</p>
            <p className=" font-normal tracking-wide text-left ">* Select Stitched > Custom Size > Choose your nearest size > Fill in the required alterations in the allotted boxes > Add note (if any) > add to cart</p>

            <p className="  tracking-wider font-bold text-left ">PSS (PRIORITY STITCHING SERVICE):</p>
            <p className="  tracking-wide text-left font-normal ">Priority stitching service is for all customers. This service allows all our customers to receive their stitched orders more quickly and without any hustle. This is an express delivery service and all priority stitched orders will be charged PKR 10,000 (per order).This option comes on the cart page before the checkout page.</p>

            <p className="  tracking-wider font-bold text-left ">DISPATCH TIMELINE: 2 WEEKS</p>

        </div>
      </div>

      <Footer />

    </>
  )
}

export default Serviceweprovide