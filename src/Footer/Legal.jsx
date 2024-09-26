import React from 'react'
import Footer from '../Footer'
import Header from "../Header";
import { Link } from 'react-router-dom';
function Legal() {
  return (
    <>
<Header />
<h3 className="text-center mb-10 mt-24 font-serif text-3xl tracking-widest uppercase">Legal</h3>

<div className="text-center   flex justify-center ">
        <div className="w-2/4  font-sans	 ">
       
            <h4 className=' tracking-wider  text-base text-left font-serif mt-6 '> For any legal queries write to us at:
            <Link to="https://mail.google.com/mail/u/0/#inbox">  <span className='underline'> legal@baroque.com.pk </span></Link> or
            <Link to="https://mail.google.com/mail/u/0/#inbox">  <span className='underline'> legal@baroque.com </span></Link>  </h4>
            <h4 className=' tracking-wider  text-base text-left  font-serif mt-6 mb-20' > Company Address: Bilal Textile, Tariq Ismail Road, Raiwind Road, Lahore</h4>



        </div>
      </div>

      <Footer />






    </>
  )
}

export default Legal