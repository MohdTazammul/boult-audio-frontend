import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import FadeInSection from '../FadeAnimation/FadeInSection'
import "./style.css"

function Watches() {
    const navigate = useNavigate();
    const [twsProducts, setTwsProducts] = useState([]);

    useEffect(()=>{
        fetch("https://boult.herokuapp.com/product/Watch").then(resp=>resp.json()).then(data=>setTwsProducts(data))
    }, [])
    return (
        <div className='watches'>
            <div className='header'>
                <img className='desktop' src='https://user-images.githubusercontent.com/90475607/187706036-b03d67f2-264e-4b3c-938c-40ac8e1414e8.png' width={"100%"} />
                <img className='mobile' src='https://user-images.githubusercontent.com/90475607/187706026-dbdaf396-6cba-4522-bc05-524649d40d87.png' width={"100%"} />

                <div className='thumbnail-heading'><FadeInSection>Smart Watches</FadeInSection></div>
            </div>
           <div className='main-container'>
           <FadeInSection>
                <div className='section-2'>
                    <div>
                        <div><span className='strings-attached'>Be Limitless</span></div>
                        <div>
                        For things you love doing, and many more you wish to explore, Boult smartwatches are here to unlock limitless possibilities for you. Monitoring your health, assisting you with multiple workout modes, letting you take or make calls from your wrist, or offering you AI assistance - Boult smartwatch is a loyal companion that keeps up with everything your life is made up of.
                        </div>
                    </div>
                    <FadeInSection>
                        <div>
                            <img src='https://user-images.githubusercontent.com/90475607/187706029-2fa3f1db-10b8-43fe-8131-979a7cf1f4d0.png' />
                        </div>
                    </FadeInSection>
                </div>
            </FadeInSection>
            <FadeInSection>
                <div className='features-section'>
                <div style={{backgroundImage:`url(https://user-images.githubusercontent.com/90475607/187706836-38c80717-c591-4f1e-a957-ed138e1e46e7.png`}}></div>
                    <div style={{backgroundImage:`url(https://user-images.githubusercontent.com/90475607/187706831-45632601-f33f-4abf-859e-fbc56c815f75.png)`}}>
                            
                        </div>
                        <div style={{backgroundImage:`url(https://user-images.githubusercontent.com/90475607/187706824-0957a603-5d88-440a-85ca-1e719aa1aacb.png)`}}>
                            
                        </div>
                </div>
            </FadeInSection>
            <FadeInSection>
                <div className='sub-heading'>All smart watches</div>
            </FadeInSection>
            <div className='product-container'>
                
                       { 
                    twsProducts.map((el,i)=>{
                        return (
                           
                                    <div key={i}  id={"prod-"+i} style={{cursor:"pointer"}} onClick={()=>{navigate(`/details?id=${el._id}`)}}>
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
                                   
                        )
                    })}
            </div>
           </div>
        </div>
    )
}

export default Watches
