import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import {Route, Routes, BrowserRouter} from "react-router-dom"
import {useRef} from "react";
import Login from './components/Login/Login';
function App() {
  
const body = useRef(null);
  return (
    <>
    <Navbar props={body} />
    <div className="App" ref={body}>
      <BrowserRouter>
      <Routes>
        <Route path='login' element={<Login/>}/>
        {/* <Route path='*' element={<h1>No Route found</h1>}/> */}
      </Routes>
      </BrowserRouter>
     {/* <Footer /> */}
    </div>
    </>
  );
}

export default App;
