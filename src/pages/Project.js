import { Container, Grid, Stack } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import project3 from "../assets/img/AI-home.png";
import project1 from "../assets/img/ModLife-home.png";
import project4 from "../assets/img/give2grow.png";
import project2 from "../assets/img/moddormy-home3.png";
import project5 from "../assets/img/portfolio.png";
import { Footer } from '../components/Footer';
import Navbar from '../components/Navbar/Navbar';
import { ProjectItemBox } from '../components/Project/ProjectItemBox';
const Project = () => {
  const projects = [
    {
      image: project1,
      title: "ModLifes",
      tag: "Web Development",
      description: "The web application that serve various service according to lifestyle of KMUTT's students.",
    },
    {
      image: project2,
      title: "Moddormy",
      tag: "Mobile Development",
      description: "The mobile application that serves various dormitory services for KMUTT's students.",
    },
    {
      image: project3,
      title: "TSL Connect",
      tag: "AI Development",
      description: "The Thai Sign Language Detection that use YOLOv8 model for building the AI.",
    },
    {
      image: project4,
      title: "Gift2Grow",
      tag: "Mobile Development",
      description:
        "The mobile application that serve a donating service for convenient.",
    },
    
    {
      image: project5,
      title: "My Portfolio",
      tag: "Web Development",
      description:
        "My portfolio website that show the detail about my projects, skills, and experiences",
      
    },
   
  ]
  return (
    <div  style={{backgroundColor: "white"}}>
      <Navbar />
      <Container sx={{mb: "4rem"}}>
        <Stack className='font' mt={"7rem"} mb={"5rem"} direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
          <h3 className='font' style={{fontSize: "32px"}}>My Projects</h3>
          {/* <IconButton>
          <FaFilter fontSize={"40px"} color='black'/>
          </IconButton> */}
        </Stack>
        <Grid container spacing={3} justifyContent={"center"}>
          
            {projects.map((a) => {
              return (
                <Grid item lg={4}>
                  <NavLink to={`/Projects/${a.title}`} onClick={()=> {
                     window.scrollTo({
                      top: 0,
                      behavior: "smooth", 
                    });
                  }}>
                  <ProjectItemBox image={a.image} title={a.title} tag={a.tag} description={a.description}/>
                  </NavLink>
                </Grid>
              )
            })}
           {/* {projects.map((a) => {
              return (
                <Grid item lg={4}>
                  <ProjectItemBox image={a.image} title={a.title} tag={a.tag} description={a.description}/>
                </Grid>
              )
            })} */}
        </Grid>
      </Container>
      <Footer/>
    </div>
  );
}

export default Project;
