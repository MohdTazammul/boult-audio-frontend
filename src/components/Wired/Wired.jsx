import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import FadeInSection from '../FadeAnimation/FadeInSection'
import "./style.css"

function Wired() {
    const navigate = useNavigate();
    const [twsProducts, setTwsProducts] = useState([]);

    useEffect(()=>{
        fetch("https://boult.herokuapp.com/product/Wired").then(resp=>resp.json()).then(data=>setTwsProducts(data))
    }, [])
    return (
        <div className='wired'>
            <div className='header'>
                <img className='desktop' src='https://user-images.githubusercontent.com/90475607/187424159-0ec3623b-c6e2-407b-b65d-57b2d4139735.png' width={"100%"} />
                <img className='mobile' src='https://user-images.githubusercontent.com/90475607/187424152-93e72f77-ba6c-401f-a45e-3edc67ccdc44.png' width={"100%"} />

                <div className='thumbnail-heading'><FadeInSection>Wired</FadeInSection></div>
            </div>
           <div className='main-container'>
           <FadeInSection>
                <div className='section-2'>
                    <div>
                        <div>Pure sound, <br /><span className='strings-attached'>for your ears only!</span></div>
                        <div>
                        The OG audio silhouette, earphones are small in size but big on sound. They come with an AUX, which when plugged into your device pack a punch with heavy bass &amp; high-fidelity acoustics. Notoriously known for tangling itself when kept in pockets, this audio device is an evergreen bet.
                        </div>
                    </div>
                    <FadeInSection>
                        <div>
                            <img src='https://user-images.githubusercontent.com/90475607/187424146-1f387924-2318-4478-9bb7-95bdc3e5a203.png' />
                        </div>
                    </FadeInSection>
                </div>
            </FadeInSection>
            <FadeInSection>
                <div className='features-section'>
                <div style={{backgroundImage:`url(https://user-images.githubusercontent.com/90475607/187527761-694231cb-33d7-4b44-8c2b-c475319d4ff9.png)`}}>
                        <p>Snug-fit silicon earbuds</p>
                    </div>
                    <div style={{backgroundImage:`url(https://user-images.githubusercontent.com/90475607/187527767-4238964e-00a4-4101-beff-0ab3929acde6.png)`}}>
                            <p>Tangle-free Kevlar cable</p>
                        </div>
                        <div style={{backgroundImage:`url(https://user-images.githubusercontent.com/90475607/187527764-00424170-c89d-4192-8aa3-d21cfb4c08cd.png)`}}>
                            <p>Easy in-line controls</p>
                        </div>
                </div>
            </FadeInSection>
            <FadeInSection>
                <div className='sub-heading'>All wired</div>
            </FadeInSection>
            <div className='product-container'>
                
                       { 
                    twsProducts.map((el,i)=>{
                        return (
                           
                            //    <FadeInSection>
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
                            //    </FadeInSection>
                                   
                        )
                    })}
            </div>
           </div>
        </div>
    )
}

export default Wired
