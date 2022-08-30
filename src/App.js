import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import {useRef} from "react";

import Login from './components/Login/Login';

import Userprofile from './components/User/Userprofile';
import {Route,Routes} from 'react-router-dom'
import TrueWireless from './Pages/TrueWireless';
import User from './Pages/User';

import Home from "./Pages/Home"
import NeckbandPage from './Pages/NeckbandPage';
import HeadphonePage from './Pages/HeadphonePage';
import Flip from './components/Flipper/Flip';
// >>>>>>> ceafa23bf7ac993c79168a7214c04a8589601459
// >>>>>>> 919d627e33b05cc511caf9bbdc52c37caa990a7b
function App() {
  
const body = useRef(null);
  return (
    <>
    <Navbar props={body} />
    <div className="App" ref={body}>

      <Routes>
        <Route path='login' element={<Login/>}/>
        {/* <Route path='*' element={<h1>No Route found</h1>}/> */}

     {/* <Footer /> */}


        <Route path='/tws' element={<TrueWireless/>}/>
        <Route path='/neckband' element={<NeckbandPage/>}/>
        <Route path='/headphones' element={<HeadphonePage/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path="/Flip" element={ <Flip/>}/>
      </Routes>
{/* >>>>>>> ceafa23bf7ac993c79168a7214c04a8589601459 */}
    </div>
    </>
  );
}

export default App;
