import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import {useSearchParams} from 'react-router-dom'
import Faq from './Faq';
import { Icon } from '@iconify/react';
import "./style.css"
const Details = () => {
    const [quantity,setQuantity]=useState(1)
    const [params,setParams]=useSearchParams();
    const [product,setProduct]=useState({})
    const userId=useSelector(s=>s.data._id);
    const [color,setColor]=useState(0);
    const timerText=[["make a note off this"],[ "Call mom !"],["Add beliver song  to my Spotify playlist"],["Send mail to john@gamil.com"],["Text john that I'm busy"]];
    const [textInd,setTextInd]=useState(0)
    useEffect(()=>{
        setTimeout(()=>{
            setTextInd(pre=>(pre+1)%timerText.length)
        },800)
    },[textInd])
    useEffect(()=>{
        // let prod=JSON.parse(localStorage.getItem("prod"))
        // setProduct(prod)
        // console.log(prod)
        const id=params.get("id");
        fetch(`https://boult.herokuapp.com/product/details/${id}`).then(res=>res.json()).then(d=>{
            // localStorage.setItem("prod",JSON.stringify(d));
            setProduct(d)
            // console.log(d)
        })
    },[])
    return product._id?
    (
        <>
           <div id='details-main'>
                <div id='details-add-main'>
                    <div id='details-add-main-inner'>
                        <div id='main-one'>Best</div>
                        <div id='main-two'>
                            <h2>Wireless Headphones Brand in India</h2>
                            <p>*8th Mobility Accessories Excellence Awards 2021.</p>
                        </div>
                    </div>
                    
                </div>
                <div id='details-info-main'>
                   <div  id='details-info-main-cont'>
                        <div id='details-info-main-img'>
                            <img src={product.image[color]} alt="" />
                            <div id='color-selector-main'>
                                <div><p id='color-text'>CHOOSE THE SKIN</p></div>
                                <button id='color-selector'>
                                    {
                                        product.colorName.map((el,i)=>{
                                            return <div className='color-iner' style={{background:el}} onClick={()=>{
                                                setColor(i)
                                            }}>
                                                <div style={{border:`2px solid ${el}`,display:color==i?"block":"none"}} id='inner-circle'></div>
                                            </div>
                                        })
                                    }
                                </button>
                        </div>
                        </div>
                       
                        <div id='details-info-main-info'>
                            <div id='details-info-main-info-sub'>
                                <div id='details-tag'>
                                    {
                                        product.tags.map(el=><button>{el}</button>)
                                    }
                                </div>
                                <div id='details-name'>
                                    <h2>{product.title}</h2>
                                </div>
                                <div id='price-qnt'>
                                    <div>
                                        <h3 id='price'><span style={{textDecoration:"line-through"}}> ₹ {product.price}</span>  ₹  {product.discountedPrice}</h3>
                                    </div>
                                    <div style={{display:"flex",gap:"10px",fontSize:"18px"}}>
                                        <div id='qnt-word'>
                                            Qnt:
                                        </div>
                                        <div id='qnt'>
                                            <button onClick={()=>{
                                                
                                                setQuantity(pre=>{
                                                    return pre>1?pre-1:1;
                                                })
                                            }}>-</button>
                                            <button>{quantity}</button>
                                            <button onClick={()=>{
                                                setQuantity(pre=>pre+1)
                                            }}>+</button>
                                        </div>
                                    </div>
                                </div>
                                <div id='details-btn'>
                                    <button onClick={()=>{
                                        const obj={product:product._id,user:userId,quantity:quantity,color:product.colorName[0]};
                                        console.log(obj)
                                        fetch(`https://boult.herokuapp.com/cart?user=${userId}&product=${product._id}&color=${product.colorName[color]}&quantity=${quantity}`,{
                                        method: 'POST',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify({})
                                        }).then(res=>res.json()).then(d=>{
                                            console.log(d)
                                            alert(d.message)
                                        })
                                    }}>Add To Cart</button>
                                    <button style={{background:"#3db6cd",color:"white"}}>Buy Now</button>
                                </div>
                               <div>
                                    <div id='detail-visa'>
                                        <p>Secure Checkout with </p>
                                        <img src="https://user-images.githubusercontent.com/93372275/187658567-fea276ff-2145-4513-b60f-68325a638bc7.png" alt="" />
                                    </div>
                                    <div id='detail-visa'>
                                        <p>Pay via MobiKwik wallet and Get Flat Rs 50/- (use code MBK50)</p>
                                        <img src="https://user-images.githubusercontent.com/93372275/187662845-8fa20fa0-dccd-45b6-a999-5e625d4d5510.png" alt="" />
                                    </div>
                                    <div id='detail-visa'>
                                        <p>Get 5% OFF upto Rs 50 on all UPI orders</p>
                                    </div>
                               </div>
                                <div id='detail-visa'>
                                    <p> <span style={{margin:"10px"}}><Icon icon="ic:twotone-local-shipping" /></span> Free Shipping <span style={{margin:"10px"}}><Icon icon="arcticons:eset-payment-protection" /></span>Secure Payment <span style={{margin:"10px"}}><Icon icon="icon-park-outline:good-two" /></span>Satisfaction Guaranteed</p>
                                </div>
                            </div>
                        </div>
                   </div>
                </div>
           </div>
            <div>
                <div id='video-add-cont'>
                    <div id='add-one'>
                        <div id='img-div'>
                            <img src="https://im2.ezgif.com/tmp/ezgif-2-866be6496e.gif" alt="" />
                            <h1 style={{position:"absolute",top:"35%",left:"50%",transform:"translate(-50%,-50%)"}}>5Mn+</h1>
                            {/* <video src='https://user-images.githubusercontent.com/90475607/187777600-637cf4e9-e430-4e17-9785-8087537fda05.mp4' loop autoPlay/> */}
                            {/* <video src="https://cdn.shopify.com/s/files/1/0548/8849/7221/files/Circle_Video.mp4?v=1638868220" autoplay="autoplay"></video> */}
                        </div>
                        <div>
                            <p className='top-add-text'>5 Million +</p>
                            <p className='top-add-text-color'>units sold</p>
                        </div>
                    </div>
                    <div id='add-two'>
                        <div id='big-text'>0:08</div>
                        <div>
                            <p className='top-add-text'>01 Product sold</p>
                            <p className='top-add-text-color'>every 08 seconds</p>
                        </div>
                    </div>
                    <div id='add-three'>
                        <div>
                            <img src="https://cdn.shopify.com/s/files/1/0548/8849/7221/files/animated-character_9c7d797c-16c0-4c76-a906-78153f84c8cc.gif?v=1653978792" alt="" />
                        </div>
                        <div>
                            <p className='top-add-text'>1Mn+ Products</p>
                            <p className='top-add-text-color'>reviews</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id='cont-with-timer'>
                <div id='cont-with-timer-text'>
                    <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
                        <h1>{timerText[textInd][0]}</h1>
                        
                    </div>
                </div>
                <div id='cont-with-timer-img'>
                    <div>
                        <img src="https://user-images.githubusercontent.com/93372275/188058456-a85dd039-f9d8-419b-83ac-f88c43c070b2.png" alt="" />
                    </div>
                    <div id='join-text-img'>
                        <div>
                            <img src="https://user-images.githubusercontent.com/93372275/188058240-8a6ed1e5-ac72-4e4f-a231-20ba71e94a85.png" alt="" />
                        </div>
                        <div>
                            <p>Your voice, Our command.</p>
                            <p>Have Siri & Google Assistant</p>
                            <p>at your disposal at the click</p>
                            <p>of a button.</p>
                        </div>
                    </div>
                </div>
            </div>
           <div id='faq-cont'>
            <Faq que={product.FAQ_Ques} ans={product.FAQ_Ans}/>
           </div>
          
        </>
    ):""
};

export default Details;