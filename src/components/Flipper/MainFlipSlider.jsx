import React, { useEffect, useState } from 'react'
import Flip from './Flip'
import "./Flip.css"
import { useRef } from 'react'
function MainFlipSlider() {
  const ref= useRef(null)
  const [data, setData]=useState([])
  const [state, setState]=useState(true)
  useEffect(()=>{
    fetch("https://boult.herokuapp.com/shopByActivity").then(res=>res.json()).then(data=>setData(data))
  },[])
  const scroll = (scrollOffset)=>{
    ref.current.scrollLeft +=scrollOffset
  }
  function onC(){
    scroll(300)
    setState(!state) 
  }
  function onC1(){
    scroll(-300)
    setState(!state) 
  }
  //   let A=[{cover_image:"https://cdn.shopify.com/s/files/1/0548/8849/7221/files/Autophile_05fb9d12-2418-4d6c-8e77-f8e4352e1f85.png?v=1643475598",
  //   title:"Entertainment",
  //   data_img:"https://cdn.shopify.com/s/files/1/0548/8849/7221/files/Soulpods_8f0d521e-965a-44e8-b71a-9d817452ba9d.png?v=1645021990"
  // }]
  return (
    <>
    <div id='SbW' style={{display:"flex", gap:"10px", maxWidth:"100%", overflow:"auto", whiteSpace:"nowrap", scrollBehavior:"smooth"}} ref={ref}>
        {data.map((e)=>{
            return(
            <Flip allData={e}/>)
        })}

    </div>
    <div id='right' className={!state? "Show":"Hide"}   onClick={()=>onC1()}><img src='https://cdn.shopify.com/s/files/1/0548/8849/7221/files/slider-arrow.png?v=1638356759'/></div>
        <div id="left" className={state? "Show":"Hide"} onClick={()=>onC()}><img  src='https://cdn.shopify.com/s/files/1/0548/8849/7221/files/slider-arrow.png?v=1638356759'/></div>
    </>
  )
}

export default MainFlipSlider
