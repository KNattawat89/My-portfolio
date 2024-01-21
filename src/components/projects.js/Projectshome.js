import { Container, Stack } from "@mui/material";
import { React, useEffect, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import project3 from "../../assets/img/AI-home.png";
import project2 from "../../assets/img/ModLife-home.png";
import project1 from "../../assets/img/moddormy-home3.png";
import Projectitem from "./Projectitem";
const Projectshome = () => {
  const project = [
    {
      title: "Moddormy",
      description:
        "The mobile application that serves various dormitory services for KMUTT's students.",
      img: project1,
    },
    {
      title: "ModLifes",
      description:
        "The web application that serve various service according to lifestyle of KMUTT's students.",
      img: project2,
    },
    {
      title: "TSL Connect",
      description:
        "The Thai Sign Language Detection that use YOLOv8 model for building the AI component.",
      img: project3,
    },
  ];
  // const responsive = {
  //     superLargeDesktop: {
  //       // the naming can be any, depends on you.
  //       breakpoint: { max: 4000, min: 3000 },
  //       items: 5
  //     },
  //     desktop: {
  //       breakpoint: { max: 3000, min: 1024 },
  //       items: 3,
  //     },
  //     tablet: {
  //       breakpoint: { max: 1138, min: 780 },
  //       items: 2,
  //     },
  //     mobile: {
  //       breakpoint: { max: 780, min: 0 },
  //       items: 1,

  //     }
  //   };

  const [scrolled, setscrolled] = useState(false);
  const [scrolled2, setscrolled2] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 60) {
        setscrolled(true);
      } else {
        setscrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  //for xs screen
  useEffect(() => {
    const onScrollxs = () => {
      if (window.scrollY > 300) {
        setscrolled2(true);
      } else {
        setscrolled2(false);
      }
    };
    window.addEventListener("scroll", onScrollxs);

    return () => {
      window.removeEventListener("scroll", onScrollxs);
    };
  }, []);

  return (
    <div>
      <Container>
        <Stack
          direction="column"
          display={{ xs: "none", md: "flex" }}
          className={scrolled ? "scrolled project-bg" : " project-bg"}
        >
          <h3 className="font">Projects</h3>
          <p className="font">
            Examples of some projects are developed by me. These projects
            according to various development sides, such as web development,
            mobile development, and AI development use many affords, tools, and
            other things to build them. If you are interested in my project, you
            can look more at the project page.{" "}
          </p>
          <Stack
            direction="row"
            spacing={4}
            sx={{ justifyContent: "space-between" }}
          >
            {project.map((projects) => {
              return <Projectitem {...projects} />;
            })}
          </Stack>
          
        
        </Stack>
       

        <Stack
          direction="column"
          spacing={4}
          display={{ xs: "flex", md: "none" }}
          className={scrolled2 ? "scrolled project-bg" : " project-bg"}
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          <h3 className="font">Projects</h3>
          <p className="font">
            Examples of some projects are developed by me. These projects
            according to various development sides, such as web development,
            mobile development, and AI development use many affords, tools, and
            other things to build them. If you are interested in my project, you
            can look more at the project page.{" "}
          </p>
          {project.map((projects) => {
            return <Projectitem {...projects} />;
          })}
         
        </Stack>
        
       
      </Container>
      <Container sx={{mt: "50px"}}>
      <hr />
      </Container>
    </div>
  );
};

export default Projectshome;
