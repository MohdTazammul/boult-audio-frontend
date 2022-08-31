import React from 'react';
import { useState } from 'react';
import "./style.css"
const Details = () => {
    const [quantity,setQuantity]=useState(1)
    return (
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
                            <img src="https://user-images.githubusercontent.com/90475607/187034228-311a0f39-fefe-4d24-828a-cd338a1f83b7.png" alt="" />
                        </div>
                        <div id='details-info-main-info'>
                            <div id='details-info-main-info-sub'>
                                <div id='details-tag'>
                                    <button>new</button>
                                    <button>new</button>
                                </div>
                                <div id='details-name'>
                                    <h2>Watch</h2>
                                </div>
                                <div id='price-qnt'>
                                    <div>
                                        <h3 id='price'><span style={{textDecoration:"line-through"}}>₹ 1,499</span>  ₹ 2,499</h3>
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
                                    <button>Add To Cart</button>
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
    );
};

export default Details;