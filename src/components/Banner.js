import { Box, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import banner from "../assets/img/banner-image.jpg";
const Banner = () => {
  const [loopNum, setloopNum] = useState(0);
  const [isDeleting, setisDeleting] = useState(false);
  const toRotate = ["I'm Night", "I'm Full Stack Developer"];
  const [text, settext] = useState("");
  const [delta, setdelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length; //toRotate = 2
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    settext(updatedText);

    if (isDeleting) {
      setdelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setisDeleting(true);
      setdelta(period);
    } else if (isDeleting && updatedText === "") {
      setisDeleting(false);
      setloopNum(loopNum + 1);
      setdelta(500);
    }
  };

  return (
    <div className="space font">
      <Stack direction={{ xs: "column", md: "row" }}  alignItems="center" margin={{xs: "0px 20px 30px 20px",md:"0px 80px 0px 80px"}}>
        <Stack
        maxWidth={"600px"}
        spacing={3}
          direction="column"
          alignItems={{xs: "none", md: "start"}}
          className="header"
          mb={"3rem"}
        >
          <h3 style={{margin: 0}}>Welcome to my website and portfolio</h3>
          <Box display={{xs: "none", md: "flex"}}>
          <h1 style={{ fontSize: "64px", fontWeight: 600, margin: 0 }}>Hi, {text}</h1>
          </Box>
          <Box display={{xs: "flex", md: "none"}}>
          <h1 style={{ fontSize: "45px", fontWeight: 600, margin: 0 }}>Hi, {text}</h1>
          </Box>
          <Box width={{xs:"auto", md: "500px", lg:"600px"}}>
          <div style={{ textIndent: "1em", fontSize: "16px", fontWeight: "normal", margin: 0 }}>
    My name is Nattawat Teaiwtan (Night). I am studying in the 3rd year
    of computer science (English Program) at King Mongkut's University of
    Technology Thonburi. Currently, I am trying to be a full-stack
    developer who wants to learn the interesting new knowledge and
    gain experience. If you have a question or want to contact me, feel free
    to reach out.
  </div>
          </Box>
          <Box sx={{marginTop: "20px"}}  bgcolor={"white"} maxWidth={"450px"} height={"50px"} borderRadius={"16px"} boxShadow={"rgba(0, 0, 0, 0.25) 0px 3px 3px"}>
            <Stack direction={"row"} spacing={{xs: 1, md:2}} height={"50px"}  alignItems={"center"} px={"20px "}>
            <a className="Circleone" href={`mailto:Nao.Nait@gmail.com`} target="_blank" rel="noopener noreferrer">
      <MdEmail fontSize={"35px"} />
    </a>
            <div>Nao.Nait@gmail.com</div>
           <div style={{cursor: "pointer"}} onClick={() => {
            window.open("https://github.com/KNattawat89")
           }}>
            <FaGithub style={{margin: "5px 0 0 0"}} className="Circleone"/>
            </div>
           <div style={{cursor: "pointer"}} onClick={() => {
            window.open("https://www.linkedin.com/in/nattawat-teaiwtan-94b4492aa/")
           }}>
            <FaLinkedin style={{margin: "5px 0 0 0"}} className="Square"/>
            </div>
            </Stack>
          </Box>
        </Stack>
       
      
        <Box width={"100vw"} display={"flex"} justifyContent={"center"}>
        <Box bgcolor={"white"} width={"300px"} height={"300px"} borderRadius={"180px"} boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}>
          <img src={banner} alt="banner" style={{width:"300px", height: "300px", borderRadius: "180px"}}/>
            {/* <img src={ban} className="headerIcon" alt="banner" /> */}
        </Box>
        </Box>
      </Stack>
    </div>
  );
};

export default Banner;
