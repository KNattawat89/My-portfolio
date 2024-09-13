import { Box, Button, Container, Grid } from "@mui/material";
import { React, useRef, useState } from "react";
import useOnScreen from "../UseonScreen";
import { SkillButton } from "./SkillButton";
import { SkillBox } from "./skillBox";
const Skills = () => {
  const [activeButton, setActiveButton] = useState("Web Development");
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  const titleButton = [
    "Web Development",
    "Mobile Development",
    "Backend Development",
    "AI Development",
    "Data Science",
    "Others",
  ];

  const skillBoxesOfWeb = [
    {
      title: "Html",
      img: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/html-icon.png",
    },
    {
      title: "Css",
      img: "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png",
    },
    {
      title: "Javascript",
      img: "https://cdn.iconscout.com/icon/free/png-256/free-javascript-2038874-1720087.png",
    },
    {
      title: "Typescript",
      img: "https://cdn-icons-png.flaticon.com/512/919/919832.png",
    },
    {
      title: "React.js",
      img: "https://icons.veryicon.com/png/o/business/vscode-program-item-icon/react-3.png",
    },
    {
      title: "Next.js",
      img: "https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png",
    },
    {
      title: "MUI",
      img: "https://mui.com/static/logo.png",
    },
    {
      title: "Tailwindcss",
      img: "https://logowik.com/content/uploads/images/tailwind-css3232.logowik.com.webp",
    },
    {
      title: "ChakraUI",
      img: "https://yt3.googleusercontent.com/ytc/AIf8zZRITxoo0byi4KcV1NSBN2cZknYjLTidLKfizJj2=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "Vue.js",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/640px-Vue.js_Logo_2.svg.png"
    }
  ];

  const skillBoxesOfBackend = [
    {
      title: "Golang",
      img: "https://cdn.icon-icons.com/icons2/2699/PNG/512/golang_logo_icon_171073.png",
    },
    {
      title: "Go-fiber",
      img: "https://repository-images.githubusercontent.com/234231371/00fd8700-5430-11ea-820b-15fd85b2472c",
    },
    {
      title: "Express.js",
      img: "https://d2ooyrflu7lhqd.cloudfront.net/Express_JS_390db1e6f2.jpeg",
    },
    {
      title: "Node.js",
      img: "https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png",
    },
    {
      title: "Docker",
      img: "https://static-00.iconduck.com/assets.00/docker-icon-512x438-ga1hb37h.png",
    },
    {
      title: "MongoDB",
      img: "https://logowik.com/content/uploads/images/mongodb9740.logowik.com.webp",
    },
    {
      title: "MySQL",
      img: "https://upload.wikimedia.org/wikipedia/labs/8/8e/Mysql_logo.png",
    },
    {
      title: "PostgreSQL",
      img: "https://cdn.icon-icons.com/icons2/2699/PNG/512/postgresql_vertical_logo_icon_168900.png",
    },
  ];

  const skillBoxesOfMobile = [
    {
      title: "Flutter",
      img: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/flutter-icon.png",
    },
    {
      title: "Dart",
      img: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/dart-programming-language-icon.png",
    },
  ];

  const skillBoxesOfAI = [
    {
      title: "Python",
      img: "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png",
    },
    {
      title: "Yolo",
      img: "https://assets-global.website-files.com/5f6bc60e665f54db361e52a9/63f6895d515270ffdafd36d5_yolov8.png",
    },
    {
      title: "Roboflow",
      img: "https://assets-global.website-files.com/5f6bc60e665f54545a1e52a5/6374c97de94f946ff2b9e7ad_xIWWM_a-_400x400.jpg",
    },
  ];

  const skillBoxesOfDS = [
    {
      title: "Python",
      img: "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png",
    },
    {
      title: "Pandas",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Pandas_logo.svg/1280px-Pandas_logo.svg.png",
    },
    {
      title: "Scikit learn",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/2560px-Scikit_learn_logo_small.svg.png",
    },
  ];
  const skillBoxesOfOthers = [
    {
      title: "Java",
      img: "https://cdn.iconscout.com/icon/free/png-256/free-java-60-1174953.png",
    },
    {
      title: "Axios",
      img: "https://logowik.com/content/uploads/images/axios5736.logowik.com.webp",
    },
    {
      title: "SWR",
      img: "https://repository-images.githubusercontent.com/218115303/d5e0ba80-f99c-11e9-84a1-1a0aea770883",
    },
    {
      title: "Figma",
      img: "https://static-00.iconduck.com/assets.00/apps-figma-icon-2048x2048-ctjj5ab7.png",
    },
    {
      title: "Postman",
      img: "https://logowik.com/content/uploads/images/postman-api-platform6643.logowik.com.webp",
    },
    {
      title: "GitHub",
      img: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    },
    {
      title: "GitLab",
      img: "https://static-00.iconduck.com/assets.00/gitlab-icon-2048x1885-1o0cwkbx.png",
    },
    {
      title: "Firebase",
      img: "https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png",
    },
    {
      title: "Azure",
      img: "https://arunpotti.files.wordpress.com/2021/12/microsoft_azure.svg_.png",
    },
  ];
  return (
    <div className="skill" ref={ref}>
      <Container>
        <Box px={"15px"}  className={isVisible ? " scrolled" : "skill-hind"}>
          <h3 className="font">Skills</h3>
          <Grid container spacing={2} justifyContent="flex-start">
            {titleButton.map((t) => {
              return (
                <Grid item >
                <Button
                  onClick={() => setActiveButton(t)}
                  style={{
                    textTransform: "none",
                    borderRadius: "16px",
                    padding: 0,
                    marginBottom: "10px",
                  }}
                >
                  <SkillButton title={t} active={activeButton === t} />
                </Button>
                </Grid>
              );
            })}
          </Grid>
          <Grid mt={"10px"} container spacing={2} justifyContent="flex-start">
            {activeButton === "Web Development"
              ? skillBoxesOfWeb.map((a) => {
                  return (
                    <Grid item xs={6} sm={4} md={3} lg={2}>
                      <SkillBox title={a.title} image={a.img} />
                    </Grid>
                  );
                })
              : activeButton === "Mobile Development"
              ? skillBoxesOfMobile.map((a) => {
                  return (
                    <Grid item xs={6} sm={4} md={3} lg={2}>
                      <SkillBox title={a.title} image={a.img} />
                    </Grid>
                  );
                })
              : activeButton === "Backend Development"
              ? skillBoxesOfBackend.map((a) => {
                  return (
                    <Grid item xs={6} sm={4} md={3} lg={2}>
                      <SkillBox title={a.title} image={a.img} />
                    </Grid>
                  );
                })
              : activeButton === "AI Development"
              ? skillBoxesOfAI.map((a) => {
                  return (
                    <Grid item xs={6} sm={4} md={3} lg={2}>
                      <SkillBox title={a.title} image={a.img} />
                    </Grid>
                  );
                })
              : activeButton === "Data Science"
              ? skillBoxesOfDS.map((a) => {
                  return (
                    <Grid item xs={6} sm={4} md={3} lg={2}>
                      <SkillBox title={a.title} image={a.img} />
                    </Grid>
                  );
                })
              : skillBoxesOfOthers.map((a) => {
                  return (
                    <Grid item xs={6} sm={4} md={3} lg={2}>
                      <SkillBox title={a.title} image={a.img} />
                    </Grid>
                  );
                })}
          </Grid>
        </Box>

      </Container>
      <Container sx={{mt: "40px"}}>
      <hr />
      </Container>
    </div>
  );
};

export default Skills;
