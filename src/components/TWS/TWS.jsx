import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import FadeInSection from './FadeInSection'
import "./style.css"

function TWS() {

    const [twsProducts, setTwsProducts] = useState([]);

    useEffect(()=>{
        fetch("https://boult.herokuapp.com/product/TWS").then(resp=>resp.json()).then(data=>setTwsProducts(data))
    }, [])
    return (
        <div className='TWS'>
            <div className='header'>
                <img className='desktop' src='https://user-images.githubusercontent.com/90475607/187294777-1ef4c905-6cd4-45b7-bab2-3d96a606b647.png' width={"100%"} />
                <img className='mobile' src='https://user-images.githubusercontent.com/90475607/187295584-c1ee0b61-22f9-4640-9f22-2d0e0723c617.png' width={"100%"} />

                <div className='TWS-heading'><FadeInSection>True Wireless</FadeInSection></div>
            </div>
           <div className='main-container'>
           <FadeInSection>
                <div className='section-2'>
                    <div>
                        <div>Sound is best enjoyed with no <span className='strings-attached'>strings attached</span></div>
                        <div>
                            Truly wireless EarPods are designed in a manner that you want your hands on it, but don't need hands for it. Their noise cancelling &amp; minimal design allow for smooth calls, high-fidelity acoustics &amp; a secure fit.
                        </div>
                    </div>
                    <FadeInSection>
                        <div>
                            <img src='https://user-images.githubusercontent.com/90475607/187295580-3ef102ca-eec3-4e6c-a970-4499e10a3620.png' />
                        </div>
                    </FadeInSection>
                </div>
            </FadeInSection>
            <FadeInSection>
                <div className='all-true-wireless'>All true wireless</div>
            </FadeInSection>
            <div className='product-container'>
                
                       { 
                    twsProducts.map((el,i)=>{
                        return (
                           
                            //    <FadeInSection>
                                    <div key={i}  id={"prod-"+i} >
                                       <FadeInSection>
                                           <img src={el.cover_image} />
                                       <div key={i} style={{backgroundImage: `url(${el.cover_image})`}}>
                                        <div className='left'>
                                            <div>{el.productModel}</div>
                                            {el.tagline ?<div>{el.tagline}</div>:""}
                                            <div><span>&#8377;{el.price}</span> {el.discountedPrice!="" ?<span>&#8377;{el.discountedPrice}</span>:""}</div>
                                        </div>
                                        <div className='right'>
                                               {
                                                    el.colorName.map(color=>{
                                                        return (
                                                            <div style={{background:color}}></div>
                                                        )
                                                    })
                                               }
                                        </div>
                                        </div>
                                       </FadeInSection>
                                    </div>
                            //    </FadeInSection>
                                   
                        )
                    })}
            </div>
           </div>
        </div>
    )
}

export default TWS
