import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Archive from './components/Archive';
import Home from './components/Home';
import Stories from './components/Stories';
import Contact from './components/Contact';
import About from './components/About';
import Team from './components/Team';

const App = () => {
  return (

    <Router> 
      <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
      

      </Routes>
    </Router>


  
  );
};

export default App;
