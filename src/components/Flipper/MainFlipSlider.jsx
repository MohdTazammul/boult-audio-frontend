import React from 'react'
import Flip from './Flip'

function MainFlipSlider() {
    
  return (
    <div style={{display:"flex", gap:"10px"}}>
        {new Array(5).fill(0).map(()=>{
            return(
            <Flip />)
        })}
    </div>
  )
}

export default MainFlipSlider
