import React, { useState } from 'react'
import Pin from './Pin'

const MPin = () => {
    const [otp,setOTP] = useState("")
  return (
    <div>
        <Pin length={6} setOtp={e=>setOTP(e)}/>
        <h4 style={{textAlign:"center"}}>OTP val. is {otp}</h4>
    </div>
  )
}

export default MPin