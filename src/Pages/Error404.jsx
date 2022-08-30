import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer/Footer';

function Error404() {
  const navigate = useNavigate();
  return (
   <>
    <div style={{textAlign:"center", backgroundColor:"#F4F4F4", padding:"50px 0"}}>
      <p>404</p>
      <h1 style={{fontWeight:"400", fontSize:"45px"}}>Page not found</h1>
      <button onClick={()=>navigate("/")} style={{border:"none", backgroundColor:"black", color:"white", fontSize:"16px", padding:"16px 34px", cursor:"pointer"}}>Continue Shopping</button>
    </div>
    <Footer />
   </>
  )
}

export default Error404
