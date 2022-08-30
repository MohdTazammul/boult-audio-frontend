import React from 'react';
import Footer from '../components/Footer/Footer';
import Userprofile from '../components/User/Userprofile';

const User = () => {
  
  document.title = 'Profile - Boult Audio';
    return (
       <>
         <Userprofile/>
         <Footer/>
       </>
    );
};

export default User;