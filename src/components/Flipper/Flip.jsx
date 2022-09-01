
import React, { useState, useEffect } from 'react'
import "./Flip.css"
const Flip = ({...e}) => {
 // console.log(e.allData.products)
 // const flipDivRef = useRef(null);
  const [flip, setFlip] = useState(true);
  const [productsData, setProductsData] = useState([])
 // console.log(data)
useEffect(()=>{
  for(let i=0;i<e.allData.products.length;i++){
    console.log(e.allData.products[i],i)
    fetch(`https://boult.herokuapp.com/product/details/${e.allData.products[i]}`).then(res=>res.json()).then(data=>setProductsData([data,...productsData]))
  }
 // console.log(productsData,"I")
},[flip])
//console.log(productsData,"pdata")
 function ToggleClass(){
  setFlip(!flip)
 }
  return (
    <div className='MainCont'>
          <div className='Container'>
          <div className={flip? "Card Card-flip2" : "Card Card-flip"} >
              <div  className='Front' style={{
                backgroundImage:`url(${e.allData.coverImage})`,
                backgroundSize: 'cover',

                }} onClick={ToggleClass}>
              {e.title}
              <div id='btn'>Quick view</div>
              </div>
              <div className='Back'>
                <div id='BackIn'>
                <div id='SC'>
                  <img style={{width:"100px", height:"80px"}} src={productsData[productsData.length-1]?.cover_image} alt=""/>
                </div>
                <div id='Bt'>
                  <b style={{fontSize:"15px", color:"black"}}>{productsData[productsData.length-1]?.productModel}</b>
                  <p style={{fontSize:"12px", color:"black", margin:"1px"}}>{productsData[productsData.length-1]?.tagline}</p>
                  <span style={{display:"flex", gap:"10px"}}><del id='StrikeT'>₹{productsData[productsData.length-1]?.price}</del> <b id='NT'>₹{productsData[productsData.length-1]?.discountedPrice}</b></span>
                </div>
              </div>
                  
                
               <div id='BackIn'>
                <div id='SC'>
                  <img style={{width:"100px", height:"80px"}} src={productsData[0]?.cover_image} alt=""/>
                </div>
                <div>
                  <b style={{fontSize:"15px", color:"black", margin:"1px"}}>{productsData[0]?.productModel}</b>
                  <p style={{fontSize:"12px", color:"black", margin:"1px"}}>{productsData[0]?.tagline}</p>
                  <span style={{display:"flex", gap:"10px"}}><del id='StrikeT'>₹{productsData[0]?.price}</del> <b id='NT'>₹{productsData[0]?.discountedPrice}</b></span>
                </div>
              </div> 
              <div id='BackIn'>
                <div id='SC'>
                  <img style={{width:"100px", height:"80px"}} src={productsData[1]?.cover_image} alt=""/>
                </div>
                <div id='Bt'>
                  <b style={{fontSize:"15px", color:"black", margin:"1px"}}>{productsData[1]?.productModel}</b>
                  <p style={{fontSize:"12px", color:"black", margin:"1px"}}>{productsData[1]?.tagline}</p>
                  <span style={{display:"flex", gap:"10px"}}><del id='StrikeT'>₹{productsData[1]?.price}</del> <b id='NT'>₹{productsData[1]?.discountedPrice}</b></span>
                </div>
              </div>
              <div className='lastT'>See all</div>
              <span id='CSB'  onClick={ToggleClass}><img id='CX' src="https://cdn.shopify.com/s/files/1/0548/8849/7221/files/plus-icon.png?v=1638523027" alt=""/></span>
              </div>
          </div>
      </div>
       
        
    </div>
  )
}

export default Flip