import React from "react";
import Banner from "../components/Banner";
import { Experience } from "../components/Experience/Experience";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";
import Skills from "../components/Skill/Skills";
import Projectshome from "../components/projects.js/Projectshome";
const Home = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <Navbar />
      <Banner />
      <Projectshome />
      <Skills />
      <Experience/>
      <Footer />
    </div>
  );
};

export default Home;
