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
      techStack: [
        "React.js",
        "Typescript",
        "Css",
        "ChakraUI",
        "Express.js",
        "Node.js",
        "ProgreSql",
      ],
      github: ["https://github.com/CSSIT22/studentlife"],
      responsibilties: [
        "Work as team leader of restaurant feature",
        "Collaborated with 60+ students.",
        "Designed system workflow, ER diagram, API Spec, and BPMN diagram of the project.",
        "Designed responsive web application UX/UI",
        "Developed and maintained database schema using PostgreSQL and MySQL.",
        "Developed frontend by using React.js.",
        "Developed backend by using Node.js, Express, and Google map APIs.",
      ],
    },
    {
      image: project2,
      title: "Moddormy",
      tag: "Mobile Development",
      description:
        "The mobile application that serves various dormitory services for KMUTT's students.",
      techStack: ["Flutter", "Dart", "Golang", "Go-fiber", "MySQL", "Azure"],
      github: ["https://github.com/KNattawat89/ModDormy","https://github.com/KNattawat89/Moddormy_backend"],
      responsibilties: [
        "Work as technical leader",
        "Developed frontend of mobile application by using Flutter",
        "Developed backend system by using Golang",
        "Setup server of Azure and Docker for deploying",
        "CI GitHub action for analyze Flutter",
      ]
    },
    {
      image: project3,
      title: "TSL Connect",
      tag: "AI Development",
      description:
        "The Thai Sign Language Detection that use YOLOv8 model for building the AI.",

      techStack: ["Python", "YoloV8", "Roboflow"],
      github: [],
      responsibilties: [
        "Designed system workflow",
        "Developed and trained Thai Sign Language Detection by using YoloV8",
        "Collected and preprocessed dataset by using Roboflow"
      ]
    },
    {
      image: project4,
      title: "Gift2Grow",
      tag: "Mobile Development",
      description:
        "The mobile application that serve a donating service for convenient.",

      techStack: ["Flutter", "Dart", "Golang", "Go-fiber", "MySQL", "Azure"],
      github: ["https://github.com/nichakontae/gift2grow", "https://github.com/nichakontae/gift2grow_backend"],
      responsibilties: [
        "Work as technical leader",
        "Developed frontend of mobile application by using Flutter",
        "Developed backend system by using Golang and Firebase",
        "Setup server of Azure and Docker for deploying",
        "CI GitHub action for analyze Flutter & Golang"
      ]
    },
    {
      image: project5,
      title: "My Portfolio",
      tag: "Web Development",
      description:
        "My portfolio website that show the detail about my projects, skills, and experiences",
      techStack: ["React.js", "Javascript", "MUI"],
      github: ["https://github.com/KNattawat89/My-portfolio"],
      responsibilties: [
        "Designed responsive website UX-UI",
        "Developed frontend using React.js."
      ]
    },
  ];

  return (
    <div style={{ backgroundColor: "white" }}>
      <Navbar />
      <Container sx={{ mb: "6rem" }}>
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
                <Stack
                  direction={{ xs: "column", md: "row" }}
                  alignItems={{ xs: "center", md: "normal" }}
                  spacing={5}
                >
                  <img
                    className="shadow imageDetail"
                    src={a.image}
                    // width={"530px"}
                    height={"400px"}
                    style={{ borderRadius: "16px" }}
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
                    <Grid
                      container
                      spacing={2}
                      justifyContent={"flex-start"}
                      direction={"row"}
                    >
                      {a.techStack?.map((t) => {
                        return (
                          <Grid item>
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
                    {a.github.length === 0 ? (
                      ""
                    ) : a.github.length > 1 ? <Stack direction={"row"}>
<Button
                        sx={{ m: 0, textTransform: "none", width: "200px" }}
                        onClick={() => {
                          window.open(a.github[0]);
                        }}
                      >
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
                          <h4 className="font">Frontend GitHub</h4>
                        </Box>
                      </Button>
                      <Button
                        sx={{ m: 0, textTransform: "none", width: "200px" }}
                        onClick={() => {
                          window.open(a.github[1]);
                        }}
                      >
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
                          <h4 className="font">Backend Github</h4>
                        </Box>
                      </Button>
                    </Stack> : (
                      <Button
                        sx={{ m: 0, textTransform: "none", width: "100px" }}
                        onClick={() => {
                          window.open(a.github[0]);
                        }}
                      >
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
                    )}
                  </Stack>
                </Stack>
              );
            })}
             </Stack>
          <h3 style={{ fontSize: "24px" }}>Responsibilities</h3>
          <ul style={{mt: 0}}>{projects.filter((a) => a.title === params.title)?.map((p)=> p.responsibilties?.map((t)=> {
            return(
                <li>{t}</li>
            )
          }))}</ul>
       
      </Container>
      <Footer />
    </div>
  );
};
