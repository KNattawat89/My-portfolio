import React from 'react';
import { BrowserRouter as Router, Route, Routes, Redirect } from 'react-router-dom';
import Home from '../pages/Home';
import Project from '../pages/Project';
import Aboutme from '../pages/Aboutme';
const Maincomponent = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/About" element={ <Aboutme />} />
          <Route path="/Projects" element={<Project />} />
          <Route path="/Home" element={ <Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Maincomponent;
