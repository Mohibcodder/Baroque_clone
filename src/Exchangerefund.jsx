import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom';

function Exchangerefund() {
  return (
    <>
        <Header />
    <div>
    <h1 className='uppercase font-bold pt-14 text-3xl text-center relative right-10'>Exchange & Refund</h1>
    <div className="p-8 min-h-screen flex items-center justify-center " >
      <div className="max-w-2xl bg-white p-6">
        <h1 className="text-2xl font-bold mb-4">Exchanges</h1>

        <h2 className="text-xl font-semibold mb-3">Within Pakistan</h2>
        <p className="mb-4">
          We have a <span className="font-bold">10-day</span> Exchange policy
          starting from the order delivery date. The Exchange can be initiated
          using the online form:
          <Link to="/Exchangeform" href="#" className="text-blue-600 underline">
            (click here)
          </Link>.
        </p>

        <p className="mb-4">To be eligible for the exchange, the products should be:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Bought from Baroque online store with Invoice</li>
          <li>Unused and in original state as delivered</li>
          <li>With original packaging with labels attached</li>
        </ul>

        <p className="mb-4">
          To prevent any delays, please attach clear images of the products you are
          returning to us.
        </p>

        <p className="mb-4">
          Articles bought in sale cannot be exchanged or returned unless faulty.
        </p>

        <p className="mb-4">
          Exchange or Return is not valid on Dupattas and Shawls unless defective.
        </p>

        <p className="mb-4">
          Exchanges will be processed at the original item price, not the sale price.
        </p>

        <p className="mb-4">
          The customer will be responsible for paying for the return shipping costs
          charged at the time of sending the article back and <span className="font-bold">PKR 500</span> will be charged at the time of
          sending the exchange article.
        </p>

        <p className="mb-4">
          In case of any damaged <span className="font-bold">OR</span> missing item, the concern must be raised within
          <span className="font-bold">48 hours (2 days)</span> to our customer care team for further assistance or else the complaint
          cannot be accepted.
        </p>

        <p className="mb-4">
          We will not be responsible for the items that are delivered domestically
          and then shipped internationally to third parties.
        </p>

        <p className="mb-4">
          All exchanges are subject to item availability. If the item is no longer
          available, a coupon code will be issued for online use within
          <span className="font-bold">12 months</span>. Shipping charges will not be reimbursed.
        </p>

        <p className="mb-4">
          Online exchange processing takes approximately
          <span className="font-bold">7-10</span> days after verification.
        </p>

        <p className="mt-6 italic text-sm">
          *Baroque reserves the right to reject exchange requests found missing our
          exchange policy or a product received with missing tags and not in the
          correct condition.
        </p>
      </div>
    </div>
    
    <div className="p-8 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl bg-white p-6">
        <h2 className="text-xl font-semibold mb-3">Exchange Procedure</h2>
        <p className="mb-4">
          In order to complain/exchange the article, please fill out the
          complain/exchange form
          <Link to="/Exchangeform" href="#" className="text-blue-600 underline">
            (click here)
          </Link>.
        </p>

        <p className="mb-4">
          Customers will be required to ship the items back for exchange to the
          address provided by our team.
        </p>

        <p className="mb-4">
          In case of a faulty/incorrect item delivered to you, the return
          shipping cost will be reimbursed as an online credit voucher.
        </p>

        <p className="mb-4">
          For exchange of a non-faulty item, the customer will bear the return
          shipping cost along with the exchange charges guided by the team
          accordingly. Credit voucher or your desired exchange item will only be
          provided once we have received your returned items.
        </p>

        <p className="mb-4">
          Please check our
          <Link to="/Refundpolicy" href="#" className="text-blue-600 underline">
            Refund Policy
          </Link>
          for information regarding refunds.
        </p>
      </div>
    </div>
    </div>
    <Footer />
    
    </>
  )
}

export default Exchangerefund