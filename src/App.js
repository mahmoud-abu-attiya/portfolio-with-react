import React,{ Component } from 'react';
import Navebar from './Conponents/Navbar';
import Contact from './Conponents/Contact';
import Work from './Conponents/Work';
import About from './Conponents/About';
import Portfolio from './Conponents/Portfolio';
import Index from './Conponents/Index';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <Navebar />
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/portfolio-with-react" element={<Index />}></Route>
          <Route path="/github.io/reactProject" element={<Index />}></Route>
          <Route path="/work" element={<Work />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;
