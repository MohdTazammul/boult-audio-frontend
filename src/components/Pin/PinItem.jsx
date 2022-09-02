import React, { forwardRef } from 'react'

const PinItem = forwardRef(({changeHandler,onBackSpaceHandler},ref)=>{
    const handleKey =e=>{
        (e.keyCode==8) ? onBackSpaceHandler(e) : changeHandler(e)
    }
    return (
        <div>
            <input 
            ref={ref} 
            style={{
                border: "1px solid", 
                textAlign:"center", 
                width:"30px", 
                borderRadius:"0",
                padding:"5px", 
                margin:"5px"
                }} 
            maxLength={1} 
            onKeyUp={handleKey}/>
        </div>
      )
}) 

export default PinItem