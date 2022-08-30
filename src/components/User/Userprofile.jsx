import React from 'react';
import "./style.css"
const Userprofile = () => {
    return (
        <>
            <div id='user-main'>
                <div  id='user-main-first'>
                    <div id='details'>
                        <div>Your Profile</div>
                        <div>Your Order</div>
                        <div>Log out</div>
                    </div>
                </div>
                <div  id='user-main-second'>
                    <div id='user'>
                        <div id='one'> Your Profile</div>
                        <div id='two'>Ankit Mungole</div>
                        <div id='three'>addrrece</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Userprofile;