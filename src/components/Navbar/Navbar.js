import React from 'react'
import { Icon } from '@iconify/react';
import "./style.css"
function Navbar() {
  return (
    <div>
      <div className='slider'>
        <div>Get 5% OFF upto ₹50 on all UPI Orders</div>
      </div>
      <div id='navbar'>
        <div className='links'>
            <div>
            <img src='https://user-images.githubusercontent.com/90475607/187048302-c4430181-c367-4a23-a913-871774aa2457.png' />
            </div>
            <div className="navbar-links">
              <div className="dropdown">
                <button className="dropbtn">Shop by category</button>
                <div className="dropdown-content">
                  <a href="#">True Wireless</a>
                  <a href="#">Neckband</a>
                  <a href="#">Headphones</a>
                  <a href="#">Wired</a>
                  <a href="#">Speakers</a>
                  <a href="#">Smart Watches</a>
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
        <button><Icon icon="mingcute:user-2-line" color="white" /></button>
        <button><Icon icon="mingcute:shopping-bag-2-line" color="white" /></button>
        </div>
      </div>
    </div>
  )
}

export default Navbar