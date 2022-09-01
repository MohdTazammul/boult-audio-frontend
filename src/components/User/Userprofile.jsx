import React from 'react';
import "./style.css"
import { Icon } from '@iconify/react';
import Verification from '../Login/Verification';
import {useNavigate} from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/action';
const Userprofile = () => {
    const navigation=useNavigate()
    const despatch=useDispatch()
    const data=useSelector(s=>s.data);
    useEffect(()=>{
        console.log("verification")
        // if(Verification()){
        //     navigation("/login")
        // }
    },[]);
    return (
        <>
            <div id='user-main'>
                <div  id='user-main-first'>
                    <div id='details'>
                        <div style={{display:"flex"}}>
                            <Icon icon="mingcute:user-2-line" color="black" fontSize="24px"/>
                             Your Profile
                        </div>
                        <div>
                            <Icon icon="emojione-monotone:wrapped-gift" fontSize="24px"/>
                            Your Order
                        </div>
                        <div onClick={()=>{
                            localStorage.removeItem("token")
                            despatch(logout())
                            navigation("/login")
                        }}>
                            <Icon icon="bx:lock" fontSize="24px"/>
                            Log out
                        </div>
                    </div>
                </div>
                <div  id='user-main-second'>
                    <div id='user'>
                        <div id='one'>
                            <h2>User Profile</h2>
                        </div>
                        <div id='two'>
                            <div>
                                <img src="https://cdn.shopify.com/s/files/1/0548/8849/7221/files/profile-user-icon.png?v=1645163243" alt="" />
                                <h2>{data.name}</h2>
                            </div>
                        </div>
                        <div id='three'>
                            <h2>addrrece</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Userprofile;