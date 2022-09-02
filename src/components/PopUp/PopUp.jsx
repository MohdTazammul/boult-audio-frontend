import React from 'react';
import { Icon } from '@iconify/react';
import "./style.css"
const PopUp = ({message,success}) => {
    return (
        <>
            <p className='alert' style={{border:`2px solid ${success?"green":"red"}`,background:`${success?"#DFF0D8":"#dbb8b8"}`}}> <Icon icon={success?"teenyicons:tick-circle-solid":"emojione:cross-mark"} color={success?"green":"red"} /> {message}</p>
        </>
    );
};

export default PopUp;