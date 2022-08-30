import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import {Route, Routes, BrowserRouter} from "react-router-dom"
import {useRef} from "react";
import Login from './components/Login/Login';
import Userprofile from './components/User/Userprofile';
import TrueWireless from './Pages/TrueWireless';
import User from './Pages/User';
import Home from "./Pages/Home"
import NeckbandPage from './Pages/NeckbandPage';
import HeadphonePage from './Pages/HeadphonePage';
function App() {
  
const body = useRef(null);
  return (
    <>
    <Navbar props={body} />
    <div className="App" ref={body}>
      <Routes>
        <Route path='login' element={<Login/>}/>
        <Route path='/tws' element={<TrueWireless/>}/>
        <Route path='/neckband' element={<NeckbandPage/>}/>
        <Route path='/headphones' element={<HeadphonePage/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
