import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Banner from '../components/Banner';
import Projectshome from '../components/projects.js/Projectshome';
import Skills from '../components/Skill/Skills';
import Contact from '../components/Contact';
const Home = () => {
  return (
    <div>
       <Navbar/>
        <Banner/>
        <Projectshome  />
        <Skills />
        <Contact />
    </div>
  );
}

export default Home;
