import { Link } from 'react-router-dom'
import { useState } from 'react';

function Secondpart(props) {
  const [currentSrc, setCurrentSrc] = useState(props.src);
  return (
    <>
      
        
      <Link to="/Thirdpage"> 
  <img className='cursor-pointer ' 
   alt='' 
  src={currentSrc} 
  onMouseEnter={() => setCurrentSrc(props.src1)} 
  onMouseLeave={() => setCurrentSrc(props.src)}  
  /></Link>
    <div className='text-center'>
    <p> {props.title} </p>
    <p> {props.price} </p>
    <p> {props.brand} </p>
   
    </div>
    </>
  )
}

export default Secondpart
