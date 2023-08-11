import './App.css';
import Home from './Components/Home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {


  return (
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route patth="/contact" element={<Contact />} /> 
          <Route path="/experience" element={<Experience />} />
          <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  );
}

export default App;

//! NO FUNCIONA CONTACT POR ALGUNA RAZON
