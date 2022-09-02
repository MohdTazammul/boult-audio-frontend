import React, { useRef, useState } from 'react'
import PropTypes from "prop-types"
import PinItem from './PinItem'

const Pin = ({length, setOtp}) => {
    const inputRef = useRef([])
    const [inputBoxLen] = useState(new Array(length).fill(1))
    const [inputBoxVal, setInputBoxVal] = useState(new Array(length).fill(""))
    const handleChange= (e,i)=>{
        inputBoxVal[i]=e.target.value
        setInputBoxVal(inputBoxVal)
        if(e.target.value.length>0 && i<length-1){
            inputRef.current[i+1].focus()
        }
        console.log(inputBoxVal)
        setOtp(inputBoxVal.join(""))
    }
    const handleDel= (e,i)=>{
        if(i>0){
            inputRef.current[i-1].focus() 
        }
        inputBoxVal[i]=e.target.value
        setInputBoxVal(inputBoxVal)
        console.log(inputBoxVal)
        setOtp(inputBoxVal.join(""))
    }

    return (
    <div style={{display:"flex", justifyContent:"center"}}>
        {inputBoxLen.map((e,i)=>{
            return (
                <PinItem
                key={i}
                changeHandler={a=>handleChange(a,i)}
                onBackSpaceHandler={a=>handleDel(a,i)}
                ref={el=>inputRef.current[i]=el}/>
            )
        })}
        </div>
  )
}
Pin.propTypes = {
    length: PropTypes.number,
    onChange: PropTypes.func,
  };

export default Pin