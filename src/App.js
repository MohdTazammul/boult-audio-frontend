import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import {Route, Routes, BrowserRouter} from "react-router-dom"
import {useRef} from "react";
<<<<<<< HEAD
import Login from './components/Login/Login';
=======
import Userprofile from './components/User/Userprofile';
import {Route,Routes} from 'react-router-dom'
import TrueWireless from './Pages/TrueWireless';
import User from './Pages/User';
import NeckbandPage from './Pages/NeckbandPage';
import HeadphonePage from './Pages/HeadphonePage';
>>>>>>> ceafa23bf7ac993c79168a7214c04a8589601459
function App() {
  
const body = useRef(null);
  return (
    <>
    <Navbar props={body} />
    <div className="App" ref={body}>
<<<<<<< HEAD
      <BrowserRouter>
      <Routes>
        <Route path='login' element={<Login/>}/>
        {/* <Route path='*' element={<h1>No Route found</h1>}/> */}
      </Routes>
      </BrowserRouter>
     {/* <Footer /> */}
=======
      <Routes>
        <Route path='/tws' element={<TrueWireless/>}/>
        <Route path='/neckband' element={<NeckbandPage/>}/>
        <Route path='/headphones' element={<HeadphonePage/>}/>
        <Route path='/user' element={<User/>}/>
      </Routes>
>>>>>>> ceafa23bf7ac993c79168a7214c04a8589601459
    </div>
    </>
  );
}

export default App;
