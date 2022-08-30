import React, { useState, useRef } from 'react'
import "./Flip.css"
const Flip = () => {
  const flipDivRef = useRef(null);
  const [flip, setFlip] = useState(true);
  function flipTheDiv()
  {
    if(flip)
    {

      flipDivRef.current.classList.remove("Card-flip2");
      flipDivRef.current.classList.add("Card-flip");
    }
    else
    {
      flipDivRef.current.classList.remove("Card-flip");
      flipDivRef.current.classList.add("Card-flip2");
    }
    setFlip(!flip);
    console.log(flipDivRef.current)
  }
  return (
    <div>
        <div className='Container'>
            <div className='Card Card-flip2'  onClick={flipTheDiv} ref={flipDivRef}>
                <div  className='Front'>
                Front of the Card
                </div>
                <div className='Back'>
                Back of the card
                </div>
            </div>
        </div>
    </div>
  )
}

export default Flip