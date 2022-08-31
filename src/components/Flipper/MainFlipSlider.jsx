import React from 'react'
import Flip from './Flip'

function MainFlipSlider() {
    let A=[{cover_image:"https://cdn.shopify.com/s/files/1/0548/8849/7221/files/Autophile_05fb9d12-2418-4d6c-8e77-f8e4352e1f85.png?v=1643475598",
    title:"Entertainment",
    data_img:"https://cdn.shopify.com/s/files/1/0548/8849/7221/files/Soulpods_8f0d521e-965a-44e8-b71a-9d817452ba9d.png?v=1645021990"
  }]
  return (
    <div style={{display:"flex", gap:"10px"}}>
        {new Array(5).fill(0).map(()=>{
            return(
            <Flip allData={A} />)
        })}
    </div>
  )
}

export default MainFlipSlider
