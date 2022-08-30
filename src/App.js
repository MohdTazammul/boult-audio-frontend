import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import {useRef} from "react";
import Userprofile from './components/User/Userprofile';
import {Route,Routes} from 'react-router-dom'
import TrueWireless from './Pages/TrueWireless';
import User from './Pages/User';
import NeckbandPage from './Pages/NeckbandPage';
import HeadphonePage from './Pages/HeadphonePage';
import WiredPage from './Pages/WiredPage';
function App() {
  
const body = useRef(null);
  return (
    <>
    <Navbar props={body} />
    <div className="App" ref={body}>
      <Routes>
        <Route path='/tws' element={<TrueWireless/>}/>
        <Route path='/neckband' element={<NeckbandPage/>}/>
        <Route path='/headphones' element={<HeadphonePage/>}/>
        <Route path='/wired' element={<WiredPage />}/>
        <Route path='/user' element={<User/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
