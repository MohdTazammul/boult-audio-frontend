import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';

import "./Login.css"
const Login = () => {
  const [state, setState] = useState(false)
  console.log(state)
  return (
    <div>Login
        <div className='login-container'>
            <div className='login-text'><p id='Log' onClick={()=>{
              setState(true)
            }}>Login</p> <p onClick={()=>{
              setState(false)
            }} id='Sign'>Sign Up</p></div>
          { state ? <div id='loginCont'>
          <input placeholder='Email Address' type="email" autoComplete='email' autoCorrect='off' autoCapitalize='none' className='emailInput' />
            <input placeholder='Password' type="password" autoCorrect='off' autoCapitalize='none' />
            <div className='Login'> Login</div>
            <div className='forgotPassword'>Forgot your password?</div>
            <div className='LoginInfo'> 
            <span id='fIcon'>Facebook Login<FontAwesomeIcon className='Ficon' icon={faFacebookF}></FontAwesomeIcon></span> 
            <span id='gIcon'>Google Login<FontAwesomeIcon className='Gicon' icon={faGoogle}></FontAwesomeIcon></span></div>
            <div className='Text'>By clicking any of the social login buttons you are agree <br/> to the terms of privacy policy described <a target="_blank" id='tag' href='/'>here</a> </div> 
            <div><p id='textTerm'>By logging in you agree to Boult Audio's <a id='term' href='/' target="_blank">Terms of Service</a></p></div>
          </div>: <div id='SigninCont' >
          <input placeholder='First name' id='fname' type="string" autoComplete='first-name' autoCorrect='off' autoCapitalize='none' className='nameInput' />
          <input placeholder='Last name' type="string" autoComplete='last-name' autoCorrect='off' autoCapitalize='none' className='emailInput' />
          <input placeholder='Email Address' type="email" autoComplete='email' autoCorrect='off' autoCapitalize='none' className='emailInput' />
          <input placeholder='Password' type="password" autoComplete='password' autoCorrect='off' autoCapitalize='none' className='emailInput' />
          <div className='Login' id='create'> Create</div>
          <div className='LoginInfo' id='signZ'> 
            <span id='fIcon'>Facebook Login<FontAwesomeIcon className='Ficon' icon={faFacebookF}></FontAwesomeIcon></span> 
            <span id='gIcon'>Google Login<FontAwesomeIcon className='Gicon' icon={faGoogle}></FontAwesomeIcon></span></div>
            <div className='Text' id='textZ'>By clicking any of the social login buttons you are agree <br/> to the terms of privacy policy described <a target="_blank" id='tag' href='/'>here</a> </div> 
            <div><p id='textTerm0'>By logging in you agree to Boult Audio's <a id='term' href='/' target="_blank">Terms of Service</a></p></div>
            <div className='SBox'>
            <div>
              <h4 id='lT'>Why sign up with <span id='spanBg'>Boult Audio?</span> </h4>
            </div>
            <div>
              <h4 id='leftText'>Order History</h4>
              <p id='sText'> Receive important imformation about your order. You can even track it up to the minute it arrives</p>
              <h4 id='leftText'>Fater Checkout</h4>
              <p id='sText'> Save your billing and shipping imformation to make it easier to buy your favorite Harman products. Read More About 
              Security imformation on Promotions</p>
              <p id='sText'>Receive up-to-the-minute information on promotion in your area</p>

            </div>
            </div>

          </div>}

        </div>
        
    </div>
  )
}

export default Login