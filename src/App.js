import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import {useRef} from "react";
import TWS from './components/TWS/TWS';
function App() {
  
const body = useRef(null);
  return (
    <>
    <Navbar props={body} />
    <div className="App" ref={body}>
      <TWS />
     {/* <Footer /> */}
    </div>
    </>
  );
}

export default App;
