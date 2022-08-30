import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import FadeInSection from '../FadeAnimation/FadeInSection'
import "./style.css"
function Speaker() {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch("https://boult.herokuapp.com/product/Speaker").then(resp=>resp.json()).then(data=>setProducts(data))
    }, [])
    return (
        <div className='speaker'>
            <div className='header'>
                <img className='desktop' src='https://user-images.githubusercontent.com/90475607/187534554-7f350632-293a-4cd1-9b4b-0272b0e1c6c4.png' width={"100%"} />
                <img className='mobile' src='https://user-images.githubusercontent.com/90475607/187534550-d3aec696-462c-4ae3-9d3a-4e2099ab4111.png' width={"100%"} />

                <div className='thumbnail-heading'><FadeInSection>Speakers</FadeInSection></div>
            </div>
           <div className='main-container'>
           <FadeInSection>
                <div className='section-2'>
                    <div>
                        <div>Stay ahead of the curve <span className='strings-attached'>with our sound</span></div>
                        <div>
                        Portable speakers are built to survive the wildest of habitats. They sport a curvaceous-cylindrical design, bass drivers that generate throbbing bass &amp; a jumbo battery that makes portable speakers, more often than not, the last man standing in every party.
                        </div>
                    </div>
                    <FadeInSection>
                        <div>
                            <img src='https://user-images.githubusercontent.com/90475607/187534560-3c8d6c9b-1961-41c3-80d0-838000bdab68.png' />
                        </div>
                    </FadeInSection>
                </div>
            </FadeInSection>
            <FadeInSection>
                <div className='sub-heading'>All speakers</div>
            </FadeInSection>
            <div className='product-container'>
                
                       { 
                    products.map((el,i)=>{
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

export default Speaker
