import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Detail } from '../pages/Detail';
import Home from '../pages/Home';
import Project from '../pages/Project';
const Maincomponent = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/Projects" element={<Project />} />
          <Route path="/Projects/:title" element={<Detail/>}/>
          <Route path="*" element={ <Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Maincomponent;
