import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useSelector, useDispatch } from 'react-redux'
import {login,logout} from '../../Redux/action'
import {useNavigate} from 'react-router-dom'
import "./Login.css"
import { useEffect } from 'react';
const Login = () => {
  const navigate=useNavigate();
  var store=useSelector(store=>store);
  console.log(store);
 useEffect(()=>{
    if(store.isAuth){
      navigate("/")
    }
    // navigate("/")
 },[])
  const dispatch=useDispatch();
  const [state, setState] = useState(true)
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [first, setFirst] = useState("")
  const [last, setLast] = useState("")
  async function handleSubmit(){
    if(state){
      console.log("login fetch")
        fetch(`https://boult.herokuapp.com/account/login`,{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
         body: JSON.stringify({email:email,password:pass})
        }).then(res=>res.json()).then(data=>{
          if(data.login){
            console.log(data)
            dispatch(login("sdfsff"));
            navigate("/")
          }else{
            alert(data.message)
          }
        })

        setEmail("")
        setPass("")
    }else{
      console.log(email,pass,first,last)
      fetch(`https://boult.herokuapp.com/account/register`,{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
         body: JSON.stringify({email:email,password:pass,name:first+" "+last})
        }).then(res=>res.json()).them(d=>{
          console.log(d);
          navigate("/login")
        })
    }
  }
  return (
    <div>
        <div className='login-container'>
            <div className='login-text'><p id='Log' onClick={()=>{
              setState(true)
            }}>Login</p> <p onClick={()=>{
              setState(false)
            }} id='Sign'>Sign Up</p></div>
          { state ? <div id='loginCont'>
            <input value={email} onChange={(e)=>{
              setEmail(e.target.value)
            }} placeholder='Email Address' type="email" autoComplete='email' autoCorrect='off' autoCapitalize='none' className='emailInput' />
            <input value={pass} onChange={(e)=>{
              setPass(e.target.value)
            }}  placeholder='Password' type="password" autoCorrect='off' autoCapitalize='none' />
            <div className='Login' onClick={handleSubmit}> Login</div>
            <div className='forgotPassword'>Forgot your password?</div>
            <div className='LoginInfo'> 
            <span id='fIcon'>Facebook Login<FontAwesomeIcon className='Ficon' icon={faFacebookF}></FontAwesomeIcon></span> 
            <span id='gIcon'>Google Login<FontAwesomeIcon className='Gicon' icon={faGoogle}></FontAwesomeIcon></span></div>
            <div className='Text'>By clicking any of the social login buttons you are agree <br/> to the terms of privacy policy described <a target="_blank" id='tag' href='/'>here</a> </div> 
            <div><p id='textTerm'>By logging in you agree to Boult Audio's <a id='term' href='/' target="_blank">Terms of Service</a></p></div>
          </div>: <div id='SigninCont' >
          <input value={first} onChange={(e)=>{
              setFirst(e.target.value)
            }}   placeholder='First name' id='fname' type="string" autoComplete='first-name' autoCorrect='off' autoCapitalize='none' className='nameInput' />
          <input value={last} onChange={(e)=>{
              setLast(e.target.value)
            }}   placeholder='Last name' type="string" autoComplete='last-name' autoCorrect='off' autoCapitalize='none' className='emailInput' />
          <input value={email} onChange={(e)=>{
              setEmail(e.target.value)
            }}  placeholder='Email Address' type="email" autoComplete='email' autoCorrect='off' autoCapitalize='none' className='emailInput' />
          <input value={pass} onChange={(e)=>{
              setPass(e.target.value)
            }}   placeholder='Password' type="password" autoComplete='password' autoCorrect='off' autoCapitalize='none' className='emailInput' />
          <div className='Login' id='create'  onClick={handleSubmit}> Create</div>
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