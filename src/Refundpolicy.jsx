import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom';
import Footer from './Footer';
function Refundpolicy() {
  return (
    <>
    <Header/>

    <div className=" px-40 py-8 hidden md:block">
      <h1 className="text-2xl font-bold mb-4">REFUND POLICY</h1>
      
      <p className="mb-4">
        We do not provide refunds; only <span className="font-semibold">store credit</span> is provided. However, refunds may be allowed in exceptional cases if there is any fault at our end.
      </p>
      
      <p className="mb-4">
        Changes in order for instance; size change, article change, addition/removal of article etc can be made within <span className="font-semibold">48 hours (2 days)</span> from the day the order is placed.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Cancellation</h2>
      <p className="mb-4">
        In order to cancel the order, please fill out the cancellation form here: 
        <Link to="/Ordercencelation" href="#" className="text-blue-600 underline">Click here</Link>.
      </p>
      <p className="mb-4">
        Order can be cancelled within <span className="font-semibold">48 hours (2 days)</span> of the order placement. Cancelling an order after 48 hours (2 days) will result in a cancellation fee of <span className="font-semibold">3%</span> of the paid amount, with the amount refunded to the original mode of payment. The amount will be processed in <span className="font-semibold">14-18 working days</span>. Store credit will be provided to the orders cancelled with no genuine reason (i.e., change of mind, don’t require the order anymore, changes in order).
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Return</h2>
      <p className="mb-4">
        To initiate a return request, you have to fill the form at 
        <Link to="/Exchangeform" href="#" className="underline">Click here</Link>. Please note that returns will need to be sent to the address you are provided when your return is accepted.
      </p>
      <p className="mb-4">
        We will notify you once we’ve received and inspected your return and let you know if the refund was approved or not. If approved, you’ll be automatically refunded on your original payment or credit voucher within <span className="font-semibold">14 business days</span>. Please remember it can take some time for your bank or credit card company to process and post the refund too.
      </p>
      <p className="mb-4">
        Items/Articles ordered in our sale and discount sections will not be entertained for refund or exchange.
      </p>
      <p className="mb-4">
        To be eligible for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You’ll also need the receipt or proof of purchase.
      </p>
      <p className="mb-4">
        In order to return the package, our team will provide you with the instructions on how and where to send your package. Items sent back to us without first requesting a return will not be accepted.
      </p>
      <p className="mb-4">
        Baroque has a right to reject a return request found misusing of our generous return policy or a product received with missing tags and other components.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Damages and Issues</h2>
      <p className="mb-4">
        In case of any damaged or incorrect item, the concern must be raised within <span className="font-semibold">48 hours</span> to our customer care team for further assistance or else the complaint cannot be accepted.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2"> Exceptions / non-returnable items</h2>
      <p className="mb-4">
      Certain types of items cannot be returned, like customized articles(custom sizearticles), and service charges (such as priority stitching). Please get in touch if you have questions or concerns about your specific item.

Unfortunately, we cannot accept returns on sale items or gift cards.

*Baroque reserves the right to reject return request found misusing of our return policy or a product received with missing tags and other components.
      </p>
    </div>

    <div className="py-8 block md:hidden">
      <h1 className="text-2xl font-bold mb-4">REFUND POLICY</h1>
      
      <p className="mb-4">
        We do not provide refunds; only <span className="font-semibold">store credit</span> is provided. However, refunds may be allowed in exceptional cases if there is any fault at our end.
      </p>
      
      <p className="mb-4">
        Changes in order for instance; size change, article change, addition/removal of article etc can be made within <span className="font-semibold">48 hours (2 days)</span> from the day the order is placed.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Cancellation</h2>
      <p className="mb-4">
        In order to cancel the order, please fill out the cancellation form here: 
        <Link to="/Ordercencelation" href="#" className="text-blue-600 underline">Click here</Link>.
      </p>
      <p className="mb-4">
        Order can be cancelled within <span className="font-semibold">48 hours (2 days)</span> of the order placement. Cancelling an order after 48 hours (2 days) will result in a cancellation fee of <span className="font-semibold">3%</span> of the paid amount, with the amount refunded to the original mode of payment. The amount will be processed in <span className="font-semibold">14-18 working days</span>. Store credit will be provided to the orders cancelled with no genuine reason (i.e., change of mind, don’t require the order anymore, changes in order).
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Return</h2>
      <p className="mb-4">
        To initiate a return request, you have to fill the form at 
        <Link to="/Exchangeform" href="#" className="underline">Click here</Link>. Please note that returns will need to be sent to the address you are provided when your return is accepted.
      </p>
      <p className="mb-4">
        We will notify you once we’ve received and inspected your return and let you know if the refund was approved or not. If approved, you’ll be automatically refunded on your original payment or credit voucher within <span className="font-semibold">14 business days</span>. Please remember it can take some time for your bank or credit card company to process and post the refund too.
      </p>
      <p className="mb-4">
        Items/Articles ordered in our sale and discount sections will not be entertained for refund or exchange.
      </p>
      <p className="mb-4">
        To be eligible for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You’ll also need the receipt or proof of purchase.
      </p>
      <p className="mb-4">
        In order to return the package, our team will provide you with the instructions on how and where to send your package. Items sent back to us without first requesting a return will not be accepted.
      </p>
      <p className="mb-4">
        Baroque has a right to reject a return request found misusing of our generous return policy or a product received with missing tags and other components.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Damages and Issues</h2>
      <p className="mb-4">
        In case of any damaged or incorrect item, the concern must be raised within <span className="font-semibold">48 hours</span> to our customer care team for further assistance or else the complaint cannot be accepted.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2"> Exceptions / non-returnable items</h2>
      <p className="mb-4">
      Certain types of items cannot be returned, like customized articles(custom sizearticles), and service charges (such as priority stitching). Please get in touch if you have questions or concerns about your specific item.

Unfortunately, we cannot accept returns on sale items or gift cards.

*Baroque reserves the right to reject return request found misusing of our return policy or a product received with missing tags and other components.
      </p>
    </div>
    
    <Footer />
    </>
  )
}

export default Refundpolicy