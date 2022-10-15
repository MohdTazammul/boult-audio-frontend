import React, { useEffect } from 'react'
import { Icon } from '@iconify/react';
import "./style.css"
import { useRef } from 'react';
import Collapsible from 'react-collapsible';
import {useNavigate} from "react-router-dom"
import { useSelector } from 'react-redux';
import API from "../../utills/API";
import { useState } from 'react';


function Navbar(props) {

console.log(API)
  const login = useSelector(s=>s)
  console.log(login)
  const navigate = useNavigate();


  
  // useEffect(()=>{
  //   const cartData = fetch()
  // }, [])

  console.log(props)
  const mySidepanel = useRef(null);
  const cartModal = useRef(null);
// const body = useRef(null);
  function openNav() {
   
    props.props.current.style.filter="blur(5px)";
    mySidepanel.current.style.width = "250px";
    mySidepanel.current.style.filter="blur(0px)";
  }
  function closeNav() {
    props.props.current.style.filter="blur(0px)";
    mySidepanel.current.style.width = "0";
  }
  var [cartLoading, setCartLoading] = useState(false);
  var [cartData, setCartData] = useState([]);
  var [subtotal, setSubtotal] = useState(0);
  var [cartProductsQuantity, setCartProductsQuantity] = useState([]);
  function openCartModal() {
    if(!login.isAuth)
    {
      navigate("/login")
      return
    }
    setCartLoading(true);
    fetch(API+`/cart/${login.data._id}`).then(resp=>resp.json()).then((data)=>
    {
      setCartData(data);
      console.log(data);
      var temp=0;
      var qty = [];
      data.map(el=>
        {
          temp+= (+(el.product.discountedPrice.split(",").join("")));
          qty.push(el.quantity);
        })
        setCartProductsQuantity(qty)
      setSubtotal(temp)
      // console.log(qty)
      console.log(cartProductsQuantity)
      setCartLoading(false);
    }
    )
    cartModal.current.style.width = "400px";
  }
  function closeCartModal() {
    cartModal.current.style.width = "0px";
  }

  return (
    <div >
      <div className='slider'>
        <div>Get 5% OFF upto ₹50 on all UPI Orders</div>
      </div>
      <div id='navbar'>
        <div className='links'
        //  ref={links}
        >
            <div style={{cursor:"pointer"}} onClick={()=>navigate("/")}>
            <img src='https://user-images.githubusercontent.com/90475607/187048302-c4430181-c367-4a23-a913-871774aa2457.png' />
            </div>
            <div className="navbar-links" 
            //  ref={navbarLinks}
            >
              <div className="dropdown">
                <button className="dropbtn">Shop by category</button>
                <div className="dropdown-content">
                  <a onClick={()=>navigate("/tws")}>True Wireless</a>
                  <a onClick={()=>navigate("/neckband")}>Neckband</a>
                  <a onClick={()=>navigate("/headphones")} >Headphones</a>
                  <a onClick={()=>navigate("/wired")} >Wired</a>
                  <a onClick={()=>navigate("/speaker")} >Speakers</a>
                  <a onClick={()=>navigate("/smart-watches")}>Smart Watches</a>
                </div>
              </div>
              <div className="dropdown">
                <button className="dropbtn">Shop by activity</button>
                <div className="dropdown-content">
                  <a href="#">Workout</a>
                  <a href="#">Travel</a>
                  <a href="#">Work</a>
                  <a href="#">Entertainment</a>
                  <a href="#">Audiophile</a>
                </div>
              </div>
              <div className="dropdown">
                <button className="dropbtn">Support &amp; warranty 
                </button>
                <div className="dropdown-content">
                  <a href="#">Customer Support</a>
                  <a href="#">Warranty Registation</a>
                  <a href="#">Service Centres</a>
                </div>
              </div> 
              <div className="dropdown">
                <button className="dropbtn">Contact us 
                </button>
              </div> 
              <div className="dropdown">
                <button className="dropbtn">Company
                </button>
                <div className="dropdown-content">
                  <a href="#">About Us</a>
                  <a href="#">Careers</a>
                  <a href="#">Why buy from Boultaudio.com</a>
                </div>
              </div> 
            </div>
        </div>
        <div className='icons'>
        
        <button><Icon icon="carbon:search" color="white" /></button>
        <button onClick={()=>{
          console.log("user")
          if(login.isAuth){
            navigate("/user")
          }else{
            navigate("/login")
          }
        }}><Icon icon="mingcute:user-2-line" color="white" /></button>
        <button className='openbtn2' onClick={openCartModal} ><Icon icon="mingcute:shopping-bag-2-line" color="white" /></button>
        <div  ref={cartModal} className="cartModal">
          <a className="closebtn" onClick={closeCartModal}><Icon icon="icon-park:close" /></a>
          <div>
            <div>
            <Icon icon="clarity:shopping-cart-line" hFlip={true} /> shopping cart
            </div>
            <div>Shipping &amp; taxes will be calculated at checkout</div>
            <div className='cart-products'>
              {cartLoading
              ?
                <div className='cart-loader'>
                  <img src='https://user-images.githubusercontent.com/90475607/188233791-8fd774af-0c49-4f6d-b79b-08e740b45a9f.gif' />
                </div>
                :
              cartData.length == 0 ? <h1 style={{textAlign:"center"}}>Your cart is empty</h1>:
              cartData.map((el,i)=>{
                return (
                  <div key={i} className='cart-product-row' >
                    <div onClick={()=>navigate(`/details?id=${el.product._id}`)} style={{backgroundImage:`url(${el.product.image[el.product.colorName.indexOf(el.color)]})`}}>
                    </div>
                    <div>
                      <div>
                         <div className='bold'>{el.product.productModel}</div>
                         <div className='color'>{el.color}</div>
                         <div className='cart-quantity'>
                           <button onClick={()=>{
                             if(cartProductsQuantity[i] == 1)
                              return;
                            cartProductsQuantity[i]--;

                           }}>-</button>
                           <button>{cartProductsQuantity[i]}</button>
                           <button onClick={()=>{
                             if(cartProductsQuantity[i] == 10)
                              return;
                            cartProductsQuantity[i]++;
                           }}>+</button>
                           </div>
                      </div>
                    </div>
                    <div>
                      <div className='bold'>Rs. {(el.product.discountedPrice).toLocaleString(undefined,{ minimumFractionDigits: 2 })}</div>
                      <div onClick={()=>{
                        setCartLoading(true);
                        fetch(API+`/cart/${el._id}`, {method:"delete"}).then((data)=>{
                          setCartData(pre => {
                            var updatedArray = pre.splice(i, 1);
                            console.log(updatedArray, pre);
                            setSubtotal(pre=>pre-updatedArray.discountedPrice)
                            return pre
                          });
                          setCartLoading(false)

                        })
                      }}>
                        <Icon icon="ep:delete" />
                      </div>
                    </div>
                  </div>
                )
              })
              }
            </div>
            <div id='subtotal'>
              <div>SUBTOTAL</div>
              <div>Rs. <span id='amount'>{(subtotal).toLocaleString(undefined,{ minimumFractionDigits: 2 })}</span></div>
            </div>
            <div className='UPI-COD'>
                <div>
                  <div>Pay via upi/cod</div>
                  <div>5% discount upto Rs. 50 on UPI</div>
                </div>
                <div>
                  <img src='https://cdn.gokwik.co/v4/images/upi-icons.svg' height={"100%"} />
                </div>
            </div>
            <div className='cards'>
                PAY VIA CREDIT/DEBIT CARD/OTHERS
            </div>
            <div onClick={()=>navigate("/cart")} className='cart-link'>view cart</div>
          </div>


        </div>


        <button className="openbtn" onClick={openNav}><Icon icon="charm:menu-hamburger" color="white" /></button>
        <div  ref={mySidepanel} className="sidepanel">
          <a className="closebtn" onClick={closeNav}>x</a>
          <a><Collapsible trigger="Shop by category" >
                  <div className='sub-links' onClick={()=>{closeNav(); navigate("/tws")}}>True Wireless</div>
                  <div className='sub-links' onClick={()=>{closeNav(); navigate("/neckband")}}>Neckband</div>
                  <div className='sub-links' onClick={()=>{closeNav(); navigate("/headphones")}}>Headphones</div>
                  <div className='sub-links' onClick={()=>{closeNav(); navigate("/wired")}}>Wired</div>
                  <div className='sub-links' onClick={()=>{closeNav(); navigate("/speaker")}}>Speakers</div>
                  <div className='sub-links' onClick={()=>{closeNav(); navigate("/smart-watches")}}>Smart Watches</div>
              </Collapsible></a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar