import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import {useRef} from "react";
import {Route,Routes} from 'react-router-dom'
import Login from './components/Login/Login';
import Userprofile from './components/User/Userprofile';
import TrueWireless from './Pages/TrueWireless';
import User from './Pages/User';
import NeckbandPage from './Pages/NeckbandPage';
import Home from "./Pages/Home"
import HeadphonePage from './Pages/HeadphonePage';
import WiredPage from './Pages/WiredPage';
import Flip from './components/Flipper/Flip';
import SpeakerPage from './Pages/SpeakerPage';
import Error404 from './Pages/Error404';
import Static from './components/User/Static';
import MainFlipSlider from './components/Flipper/MainFlipSlider';
import Details from './components/Details/Details';
import WatchesPage from './Pages/WatchesPage';
function App() {

  const body = useRef(null);
  return (
    <>
      <Navbar props={body} />
      <div className="App" ref={body}>
        <Routes>
          <Route path="/static" element={<Static/>}/>
          <Route path='login' element={<Login />} />
          <Route path='/tws' element={<TrueWireless />} />
          <Route path='/neckband' element={<NeckbandPage />} />
          <Route path='/headphones' element={<HeadphonePage />} />
          <Route path='/wired' element={<WiredPage />} />
          <Route path='/user' element={<User />} />
          <Route path='/' element={<Home />} />
          <Route path="/Flip" element={<Flip />} />
          <Route path="/Main-Flip" element={<MainFlipSlider />} />
          <Route path='*' element={<Error404 />} />
          <Route path='/speaker' element={<SpeakerPage />} />
          <Route path='/smart-watches' element={<WatchesPage />} />
          <Route path='/details' element={<Details/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
