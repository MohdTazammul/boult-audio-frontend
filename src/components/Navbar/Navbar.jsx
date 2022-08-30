import React from 'react'
import { Icon } from '@iconify/react';
import "./style.css"
import { useRef } from 'react';
import Collapsible from 'react-collapsible';
import {useNavigate} from "react-router-dom"

function Navbar(props) {

  const navigate = useNavigate();

  console.log(props)
const mySidepanel = useRef(null);
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

  return (
    <div >
      <div className='slider'>
        <div>Get 5% OFF upto ₹50 on all UPI Orders</div>
      </div>
      <div id='navbar'>
        <div className='links'
        //  ref={links}
        >
            <div>
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
        <button ><Icon icon="mingcute:user-2-line" color="white" /></button>
        <button ><Icon icon="mingcute:shopping-bag-2-line" color="white" /></button>
        <button className="openbtn" onClick={openNav}><Icon icon="charm:menu-hamburger" color="white" /></button>
        <div id="mySidepanel" ref={mySidepanel} className="sidepanel">
          <a href="#" className="closebtn" onClick={closeNav}>×</a>
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