import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import FadeInSection from '../FadeAnimation/FadeInSection'
import "./style.css"
function Headphones() {
    const navigate = useNavigate();
    const [twsProducts, setTwsProducts] = useState([]);

    useEffect(()=>{
        fetch("https://boult.herokuapp.com/product/Headphones").then(resp=>resp.json()).then(data=>setTwsProducts(data))
    }, [])
    return (
        <div className='headphones'>
            <div className='header'>
                <img className='desktop' src='https://user-images.githubusercontent.com/90475607/187397715-3a60a675-e99b-4a79-bff2-40b544971415.png' width={"100%"} />
                <img className='mobile' src='https://user-images.githubusercontent.com/90475607/187397720-525e23c0-2fc3-4f55-b283-7f0bd0dc72af.png' width={"100%"} />

                <div className='thumbnail-heading'><FadeInSection>Headphones</FadeInSection></div>
            </div>
           <div className='main-container'>
           <FadeInSection>
                <div className='section-2'>
                    <div>
                        <div>You'll be head over heels for <span className='strings-attached'>our sound</span></div>
                        <div>
                        With a cushiony fit &amp; sturdy look, headphones are meant for a theatrical surround sound experience. Their pillowy &amp; moldable memory foam ear cups shut the outside world, so you can find tranquility in your music.
                        </div>
                    </div>
                    <FadeInSection>
                        <div>
                            <img src='https://user-images.githubusercontent.com/90475607/187398630-13b7d503-80f2-4e2b-8b3c-153b42d30920.png' />
                        </div>
                    </FadeInSection>
                </div>
            </FadeInSection>
            <FadeInSection>
                <div className='sub-heading'>All headphones</div>
            </FadeInSection>
            <div className='product-container'>
                
                       { 
                    twsProducts.map((el,i)=>{
                        return (
                           
                            //    <FadeInSection>
                                    <div key={i}  id={"prod-"+i} style={{cursor:"pointer"}} onClick={()=>{navigate(`/details?id=${el._id}`)}} >
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

export default Headphones
