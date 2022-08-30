import React from 'react'
import "./style.css"
import {TextField} from '@mui/material'
export default function Footer() {
  return (
    <>
    <div id='footer-main'>
      <div id='first'>
        <div>
          <div id='first-one'>
            <h2 id='top-one'>We won't spam you.</h2>
            <p style={{color:"#121212BF"}}>but for every mail we send, get a</p>
            <h2><span style={{color:'#45BED5'}}>Deal</span> with it</h2>
          </div>
          <div id='first-two'>
            <TextField style={{width:"90%",marginLeft:"6%",paddingLeft:"0px"}} id="outlined-basic" label="Email" variant="standard" />
            <button id='footer-first-btn'>Submit</button>
          </div>
        </div>
      </div>
      <div id='second'>
        <div>
          <h4 style={{color:"#45BED5"}}>Explore by category</h4>
          <p>True Wireless</p>
          <p>Neckband</p>
          <p>Headphones</p>
          <p>Wired</p>
          <p>Speakers</p>
          <p>Smart Watches</p>
        </div>
        <div>
          <h4 style={{color:"#45BED5"}}>Explore by activity</h4>
          <p>Workout</p>
          <p>Work</p>
          <p>Headphones</p>
          <p>Entertainment</p>
          <p>Audiophile</p>
        </div>
        <div>
          <h4 style={{color:"#45BED5"}}> Support</h4>
          <p>Track your order</p>
          <p>Warranty Registration</p>
          <p>Raise / Track complaints</p>
        </div>
        <div>
          <h4 style={{color:"#45BED5"}}>Company</h4>
          <p>About Us</p>
          <p>Careers</p>
          <p>Why buy from Boultaudio.com</p>
        </div>
        <div>
          <h4 style={{color:"#45BED5"}}>Profile</h4>
          <p>Login</p>
          <p>My account</p>
        </div>
        <div>
          <h4 style={{color:"#45BED5"}}>Contact us</h4>
          <p>Whatsapp us</p>
          <p>Call us</p>
          <p>Email us</p>
          <p>Service Centers</p>
        </div>
        <div>
          <h4 style={{color:"#45BED5"}}>Bulk Order</h4>
        </div>
      </div>
    </div>
    <div>
        <div id='icon-grid'>
          <img src="https://cdn.shopify.com/s/files/1/0548/8849/7221/files/facebook-icon.png?v=1638472503" alt="" />
          <img src="https://cdn.shopify.com/s/files/1/0548/8849/7221/files/twitter-icon.png?v=1638472503" alt="" />
          <img src="https://cdn.shopify.com/s/files/1/0548/8849/7221/files/instagram-icon.png?v=1638472503" alt="" />
          <img src="https://cdn.shopify.com/s/files/1/0548/8849/7221/files/youtube-icon.png?v=1638472503" alt="" />
          <img src="https://cdn.shopify.com/s/files/1/0548/8849/7221/files/linkedin-icon.png?v=1638472503" alt="" />
        </div>
        <div>
          <p style={{fontSize:"12px"}}>Terms &amp; Conditions** | Privacy Policy | Site map | E-Waste Management | Social Responsibility</p>
          <p style={{fontSize:"12px"}}>* 8th mobility accessories excellence award, 2021</p>
          <p style={{fontSize:"12px"}}>© 2022, Boult Audio. All Rights Reserved</p>
        </div>
      </div>
  </>
  )
}
