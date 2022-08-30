import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import FadeInSection from '../FadeAnimation/FadeInSection'

import "./style.css"

function Neckband() {

    const [twsProducts, setTwsProducts] = useState([]);

    useEffect(()=>{
        fetch("https://boult.herokuapp.com/product/Neckband").then(resp=>resp.json()).then(data=>setTwsProducts(data))
    }, [])
    return (
        <div className='neckband'>
            <div className='header'>
                <img className='desktop' src='https://user-images.githubusercontent.com/90475607/187380837-2c9b676b-b313-43dd-bdf6-80a1e7009bb3.png' width={"100%"} />
                <img className='mobile' src='https://user-images.githubusercontent.com/90475607/187380829-2a700901-54df-4ba0-afe6-8a9f96892ee2.png' width={"100%"} />

                <div className='thumbnail-heading'><FadeInSection>Neckband</FadeInSection></div>
            </div>
           <div className='main-container'>
           <FadeInSection>
                <div className='section-2'>
                    <div>
                        <div>The band everyone <span className='strings-attached'>headbangs to!</span></div>
                        <div>
                        Neckbands have one foot in the future &amp; another in the vintage times. With a wireless built &amp; a cushiony neckband, it makes its presence felt to others, but never to its user. It allows you to give it your all without worrying about it falling off. Take calls and shuffle between playlists when on the move.
                        </div>
                    </div>
                    <FadeInSection>
                        <div>
                            <img src='https://user-images.githubusercontent.com/90475607/187380825-9f530c40-92ea-4af1-bb49-77f96123b1ce.png' />
                        </div>
                    </FadeInSection>
                </div>
            </FadeInSection>
            <FadeInSection>
                <div className='sub-heading'>All neckbands</div>
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

export default Neckband
