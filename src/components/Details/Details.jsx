import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import {useSearchParams} from 'react-router-dom'
import "./style.css"
const Details = () => {
    const [quantity,setQuantity]=useState(1)
    const [params,setParams]=useSearchParams();
    const [product,setProduct]=useState({})
    const userId=useSelector(s=>s.data._id);
    const [color,setColor]=useState(0);
    useEffect(()=>{
        // let prod=JSON.parse(localStorage.getItem("prod"))
        // setProduct(prod)
        // console.log(prod.color,prod.image)
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
                    <div id='color-selector-main'>
                        <div><p id='color-text'>CHOOSE THE SKIN</p></div>
                            <button id='color-selector'>
                                {
                                    product.colorName.map((el,i)=>{
                                        return <div className='color-iner' style={{background:el}} onClick={()=>{
                                            setColor(i)
                                        }}></div>
                                    })
                                }
                            </button>
                        </div>
                </div>
                <div id='details-info-main'>
                   <div  id='details-info-main-cont'>
                        <div id='details-info-main-img'>
                            <img src={product.image[color]} alt="" />
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
                                    <p> <span></span> Free Shipping <span></span>Secure Payment <span></span>Satisfaction Guaranteed</p>
                                </div>
                            </div>
                        </div>
                   </div>
                </div>
           </div>
        </>
    ):""
};

export default Details;