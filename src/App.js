import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import {useRef} from "react";
import Userprofile from './components/User/Userprofile';
import {Route,Routes} from 'react-router-dom'
import TrueWirless from './Pages/TrueWirless';
import User from './Pages/User';
function App() {
  
const body = useRef(null);
  return (
    <>
    <Navbar props={body} />
    <div className="App" ref={body}>
      <Routes>
        <Route path='/tws' element={<TrueWirless/>}/>
        <Route path='/user' element={<User/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
