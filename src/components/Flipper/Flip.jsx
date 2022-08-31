import React, { useState, useRef, useEffect } from 'react'
import "./Flip.css"
const Flip = ({allData}) => {
 // const flipDivRef = useRef(null);
  const [flip, setFlip] = useState(true);
 // console.log(data)
 function ToggleClass(){
  setFlip(!flip)
 }
  return (
    <div className='MainCont'>
        {allData.map((e)=>{
        return (  <>
          <div className='Container'>
          <div className={flip? "Card Card-flip2" : "Card Card-flip"} >
              <div  className='Front' style={{
                backgroundImage:`url(${e.cover_image})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center'
                ,}} onClick={ToggleClass}>
              {e.title}
              <div id='btn'>Quick view</div>
              </div>
              <div className='Back'>
              <div id='BackIn'>
                <div id='SC'>
                  <img style={{width:"90px"}} src={e.data_img} alt=""/>
                </div>
                <div>
                  <b style={{fontSize:"15px", color:"black", margin:"0px"}}>PropodsX</b>
                  <p style={{fontSize:"12px", color:"black", margin:"0px"}}>32 hours battery</p>
                  <span style={{display:"flex", gap:"10px"}}><del id='StrikeT'>₹5999</del> <b id='NT'>₹1199</b></span>
                </div>
              </div>
              <div id='BackIn'>
                <div id='SC'>
                  <img style={{width:"90px"}} src={e.data_img} alt=""/>
                </div>
                <div>
                  <b style={{fontSize:"15px", color:"black", margin:"0px"}}>PropodsX</b>
                  <p style={{fontSize:"12px", color:"black", margin:"0px"}}>32 hours battery</p>
                  <span style={{display:"flex", gap:"10px"}}><del id='StrikeT'>₹5999</del> <b id='NT'>₹1199</b></span>
                </div>
              </div>
              <div id='BackIn'>
                <div id='SC'>
                  <img style={{width:"90px"}} src={e.data_img} alt=""/>
                </div>
                <div>
                  <b style={{fontSize:"15px", color:"black", margin:"0px"}}>PropodsX</b>
                  <p style={{fontSize:"12px", color:"black", margin:"0px"}}>32 hours battery</p>
                  <span style={{display:"flex", gap:"10px"}}><del id='StrikeT'>₹5999</del> <b id='NT'>₹1199</b></span>
                </div>
              </div>
              <div className='lastT'>See all</div>
              <span id='CSB'  onClick={ToggleClass}><img id='CX' src="https://cdn.shopify.com/s/files/1/0548/8849/7221/files/plus-icon.png?v=1638523027" alt=""/></span>
              </div>
          </div>
      </div>
      </>)
        })}
        
    </div>
  )
}

export default Flip