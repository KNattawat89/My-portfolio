import React from 'react';
import Navbar from './Navbar/Navbar';
import { Box } from '@mui/material';
import Banner from './Banner';
import Projectshome from './Projectshome';
import Skills from './Skill/Skills';

const Maincomponent = () => {
  return (
    <div>
    <Navbar/>
    <Banner/>
    <Projectshome  />
    <Skills />
    </div>
  );
}

export default Maincomponent;
