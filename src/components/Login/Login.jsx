import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useSelector, useDispatch } from 'react-redux'
import {login,logout} from '../../Redux/action'
import {useNavigate} from 'react-router-dom'
import "./Login.css"
import { useEffect } from 'react';
import {signInWithPopup,auth,googleProvider,facebookProvider} from '../../Firebase/firebase';
import PopUp from '../PopUp/PopUp';
import API from '../../utills/API';
const Login = () => {
  const navigate=useNavigate();
  var store=useSelector(store=>store);
  const dispatch=useDispatch();
  const [loding,setLoding]=useState(false)
  const [state, setState] = useState(true)
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [first, setFirst] = useState("")
  const [last, setLast] = useState("")
  const [A,setAlert]=useState({message:"",success:true})
  useEffect(() => {
    console.log("herer2")
    let timeout;
    if(A.message!==""){
       timeout = setTimeout(() => {
        setAlert({message:"",success:true})
      }, 3000)
    }
    return () => clearTimeout(timeout)
  }, [A.message])
 useEffect(()=>{
    if(store.isAuth){
      navigate("/")
    }
    // navigate("/")
 },[])
  function ValidateEmail(mail) 
    {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
          return true
      return false
    }
  async function handleSubmit(){
    if(state){
      console.log("login fetch")
      if(email===""||pass===""){
        // <Alert variant="outlined" severity="success">
        //   This is a success alert — check it out!
        // </Alert>
        console.log("here")
        setAlert({message:"please fill all the inputs...",success:false})
        // return <PopUp/>
        // alert("please fill all the inputs...");
        return;
      }
      if(!ValidateEmail(email)){
        setAlert({message:"please fill the valid email....",success:false})
        // alert("please fill the valid email....");
        return;
      }
      setLoding(true)
        fetch(`${API}/account/login`,{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
         body: JSON.stringify({email:email,password:pass})
        }).then(res=>res.json()).then(data=>{
          setLoding(false)
          if(data.login){
            localStorage.setItem("token",JSON.stringify({token:data.token,isAuth:true,data:data.data}))
            dispatch(login({token:data.token, data:data.data}));
            navigate("/")
          }else{
            setAlert({message:data.message,success:false})
            // alert(data.message)
          }
        })

        setEmail("")
        setPass("")
    }else{
      console.log(email,pass,first,last)
      if(email==""||pass==""||first==""||last==""){
        setAlert({message:"please fill all the inputs...",success:false})
        // alert("please fill all the inputs...");
        return;
      }
      if(!ValidateEmail(email)){
        setAlert({message:"please fill the valid email....",success:false})
        // alert("please fill the valid email....");
        return;
      }
      setLoding(true)
      fetch(`${API}/account/register`,{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
         body: JSON.stringify({email:email,password:pass,name:first+" "+last})
        }).then(res=>res.json()).then(d=>{
          console.log(d);
          setLoding(false)
          if(d.error){
            setAlert({message:d.message,success:false})
            // alert(d.message)
          }else{
            
            setAlert({message:"Registration succesfull! now you can login...",success:false})
            // alert("Registration succesfull! now you can login...")
            navigate("/login")
          }
          
        })
    }
  }
  return loding?<div style={{display:"flex",justifyContent:"center",alignItems:"center"}}><img style={{width:"100px"}} src="https://i.stack.imgur.com/kOnzy.gif" alt="" /></div>: <div>
  <div className='login-container'>
      <div className='login-text'><p id='Log' className={state? "textBG" : ""} onClick={()=>{
        setState(true)
      }}>Login</p> <p onClick={()=>{
        setState(false)
      }} id='Sign'className={!state? "textBG" : ""}>Sign Up</p></div>
    { state ? <div id='loginCont'>
      <input value={email} onChange={(e)=>{
        setEmail(e.target.value)
      }} placeholder='Email Address' type="email" autoComplete='email' autoCorrect='off' autoCapitalize='none' className='emailInput' />
      <input value={pass} onChange={(e)=>{
        setPass(e.target.value)
      }}  placeholder='Password' type="password" autoCorrect='off' autoCapitalize='none' />
      <div className='Login' onClick={handleSubmit}> Login</div>
      <div className='forgotPassword'>Forgot your password?</div>
      <div onClick={()=>{
        signInWithPopup(auth,facebookProvider)
        .then(res=>{
            console.log(res)
        })
      }} className='LoginInfo'> 
      <span id='fIcon'>Facebook Login<FontAwesomeIcon className='Ficon' icon={faFacebookF}></FontAwesomeIcon></span> 
      <span onClick={()=>{
        console.log("Login")
        signInWithPopup(auth, googleProvider).then(resp=>{
          console.log(resp)
          setLoding(true)
        fetch(`${API}/account/login`,{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
         body: JSON.stringify({email:resp.user.email,password:"GoogleOauth"})
        }).then(res=>res.json()).then(data=>{
          setLoding(false)
          if(data.login){
            localStorage.setItem("token",JSON.stringify({token:data.token,isAuth:true,data:data.data}))
            dispatch(login({token:data.token, data:data.data}));
            navigate("/")
          }else{
            alert(data.message)
          }
        })

        })
      }} id='gIcon'>Google Login<FontAwesomeIcon className='Gicon' icon={faGoogle}></FontAwesomeIcon></span></div>
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
      <span onClick={()=>{
        signInWithPopup(auth,facebookProvider)
        .then(res=>{
            console.log(res)
        }).catch(err=>{
          alert("please try with diifrent method")
        })
      }}  id='fIcon'>Facebook Login<FontAwesomeIcon className='Ficon' icon={faFacebookF}></FontAwesomeIcon></span> 
      <span onClick={()=>{


        console.log("register")
        signInWithPopup(auth, googleProvider).then(resp=>{
          console.log(resp)
        setLoding(true)
      fetch(`${API}/account/register`,{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
         body: JSON.stringify({email:resp.user.email,password:"GoogleOauth",name:resp.user.displayName})
        }).then(res=>res.json()).then(d=>{
          console.log(d);
          setLoding(false)
          if(d.error){
            alert(d.message)
          }else{
            
            alert("Registration succesfull! now you can login...")
            navigate("/login")
          }
        })
      })
      }}  id='gIcon'>Google Login<FontAwesomeIcon className='Gicon' icon={faGoogle}></FontAwesomeIcon></span></div>
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
      
    {A.message!==""&&<PopUp message={A.message} success={A.success}/>}
  </div>
  
</div>
}

export default Login