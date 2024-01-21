import { Box, Button, Container, Grid, IconButton, Stack } from "@mui/material";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import project3 from "../assets/img/AI-home.png";
import project1 from "../assets/img/ModLife-home.png";
import project4 from "../assets/img/give2grow.png";
import project2 from "../assets/img/moddormy-home3.png";
import project5 from "../assets/img/portfolio.png";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";
export const Detail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const projects = [
    {
      image: project1,
      title: "ModLifes",
      tag: "Web Development",
      description:
        "The web application that serve various service according to lifestyle of KMUTT's students.",
      techStack: ["React.js", "Typescript", "Css", "ChakraUI", "Express.js", "Node.js", "ProgreSql"],
      github: "https://github.com/CSSIT22/studentlife"
    
    },
    {
      image: project2,
      title: "Moddormy",
      tag: "Mobile Development",
      description:
        "The mobile application that serves various dormitory services for KMUTT's students.",
        techStack: [
            "Flutter", "Dart", "Golang", "Go-fiber", "MySQL", "Azure"
        ],
        github: "https://github.com/KNattawat89/ModDormy"
    },
    {
      image: project3,
      title: "TSL Connect",
      tag: "AI Development",
      description:
        "The Thai Sign Language Detection that use YOLOv8 model for building the AI.",
      
        techStack: [
            "Python", "YoloV8", "Roboflow"
        ],
        github: ""
    },
    {
        image: project4,
        title: "Gift2Grow",
        tag: "Mobile Development",
        description:
          "The mobile application that serve a donating service for convenient.",
        
          techStack: [
            "Flutter", "Dart", "Golang", "Go-fiber", "MySQL", "Azure"
          ],
          github: "https://github.com/nichakontae/gift2grow"
      },
      {
        image: project5,
        title: "My Portfolio",
        tag: "Web Development",
        description:
          "My portfolio website that show the detail about my projects, skills, and experiences",
          techStack: [
            "React.js", "Javascript", "MUI",
          ],
          github: "https://github.com/KNattawat89/My-portfolio"
      },
  ];

  return (
    <div style={{ backgroundColor: "white" }}>
      <Navbar />
      <Container sx={{mb: "6rem"}}>
        <Stack
          mt={"7rem"}
        
          direction={"column"}
          alignItems={"flex-start"}
          spacing={10}
        >
          <IconButton
            onClick={() => {
              navigate("/Projects");
            }}
          >
            <Box
              width={"50px"}
              height={"50px"}
              borderRadius={"180px"}
              bgcolor={"#D9D9D9"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <FaArrowLeft color="black" />
            </Box>
          </IconButton>
          {projects
            .filter((a) => a.title === params.title)
            .map((a) => {
              return (
                <Stack direction={{xs:"column", md: "row"}} alignItems={{xs:"center",md: "normal"}} spacing={5}>
                  <img
                    className="shadow imageDetail"
                    src={a.image}
                    // width={"530px"}
                    height={"400px"}
                    style={{ borderRadius: "16px", }}
                    alt=""
                  />

                  <Stack
                    direction={"column"}
                    justifyContent={"center"}
                    spacing={3}
                  >
                    <h3 style={{ fontSize: "32px", margin: 0 }}>{a.title}</h3>
                    <Box
                      maxWidth={"175px"}
                      bgcolor={"black"}
                      color={"white"}
                      display={"flex"}
                      px={"10px"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      height={"35px"}
                      borderRadius={"16px"}
                    >
                      <h4 className="font">{a.tag}</h4>
                    </Box>
                    <div
                      style={{
                        textIndent: "1em",
                        fontSize: "16px",
                        fontWeight: "normal",
                        marginTop: "30px",
                        color: "black",
                      }}
                    >
                      {a.description}
                    </div>
                    <h3 style={{ fontSize: "24px" }}>Tech Stack</h3>
                    <Grid container spacing={2} justifyContent={"flex-start"} direction={"row"}>
                      {a.techStack?.map((t) => {
                        return (
                          <Grid item >
                            <Box
                           className="shadowTechStack"
                              bgcolor={"white"}
                              color={"black"}
                              display={"flex"}
                              px={"10px"}
                              alignItems={"center"}
                              justifyContent={"center"}
                              height={"35px"}
                              borderRadius={"16px"}
                            >
                              <h4 className="font">{t}</h4>
                            </Box>
                          </Grid>
                        );
                      })}
                    </Grid>
                    { a.github === "" ? "" :
                    <Button sx={{m: 0, textTransform: "none", width: "100px"}} onClick={() => {
                        window.open(a.github)
                    }}>
                    
                    <Box
                      maxWidth={"175px"}
                      bgcolor={"black"}
                      color={"white"}
                      display={"flex"}
                      px={"10px"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      height={"35px"}
                      borderRadius={"16px"}
                    >
                      <h4 className="font">GitHub</h4>
                    </Box>
                    </Button>
            }
                  </Stack>
                </Stack>
              );
            })}
            {/* <h3 style={{fontSize: "24px"}}>Responsibility</h3>
            <p> */}
        </Stack>
      </Container>
      <Footer/>
    </div>
  );
};
