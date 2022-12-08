import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import {  Routes, Route } from "react-router-dom";
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
        </Routes>
      
      <Footer />
      
    </div>
  );
}

export default App;
