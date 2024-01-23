import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator, timelineOppositeContentClasses } from "@mui/lab";
import { Box, Container } from "@mui/material";
import { useRef } from "react";
import useOnScreen from "../UseonScreen";
import { ExperienceBox } from "./ExperienceBox";

export const Experience = () => {
  const experiences = [
    {
      title: "Connected Tech",
      role: "Frontend Developer",
      description:
        "The first time that I worked at Connected Tech. I worked as a freelance developer, contributing various techniques to follow UX/UI design and integrate with the backend. This role provided me with excellent experience because I learned many techniques to improve myself.",
    },
    {
      title: "Connected Tech",
      role: "Full Stack Developer",
      description:
        "After doing the frontend role for 3 months, I try to be the full stack developer. I learn many things from this role. In the backend, I try to improve my algorithm and logic to optimize the process that handles data from the database, processes the data, and so many things. After doing the backend, I developed the frontend and integrated both the backend and frontend. This role provided me with many knowledge, techniques, and experiences that inspired me to be better.",
    },
  ];
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  console.log(isVisible);
  return (
    <div className="skill" ref={ref}>
      <Container sx={{ mb: "40px" }}>
        <Box px={"15px"} className={isVisible ? " scrolled" : "skill-hind"}>
          <h3 className="font">Work Experiences</h3>
        </Box>
       
        <Timeline className={isVisible ? " scrolled" : "skill-hind"}  sx={{
       
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.55,
        },
      }}>
          <TimelineItem>
          <TimelineOppositeContent display={{xs: "none", sm: "block"}} color="textSecondary">
          <div className="font" style={{fontSize: "20px", color: "black"}}>September/2023</div>
        </TimelineOppositeContent>
          <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector/>
        </TimelineSeparator >
        <TimelineContent mt={{sm:3}}>
          <Box display={{xs: "block", sm: "none"}}>
        <div className="font" style={{fontSize: "20px", color: "black",}}>September/2023</div>
        </Box>
        <ExperienceBox
              company={experiences[0].title}
              role={experiences[0].role}
              description={experiences[0].description}
            />
          </TimelineContent>
          </TimelineItem>
          <TimelineItem>
          <TimelineOppositeContent  display={{xs: "none", sm: "block"}} color="textSecondary">
         <div className="font" style={{fontSize: "20px", color: "black"}}>December/2023</div> 
        </TimelineOppositeContent>
          <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent mt={{sm:3}}>
        <Box display={{xs: "block", sm: "none"}}>
        <div className="font" style={{fontSize: "20px", color: "black",}}>December/2023</div>
        </Box>
        <ExperienceBox
              company={experiences[1].title}
              role={experiences[1].role}
              description={experiences[1].description}
            />
          </TimelineContent>
          </TimelineItem>
        </Timeline>
     
        {/* <Stack
          direction={"column"}
          spacing={5}
          alignItems={"center"}
          justifyContent={"center"}
        > */}
      
          {/* <Stack
            alignItems={"center"}
            direction={"row"}
            justifyContent={"space-around"}
          >
      
           
          </Stack> */}

          {/* <Stack
            alignItems={"center"}
            direction={"row"}
            justifyContent={"space-around"}
          >
          
            <ExperienceBox
              company={experiences[1].title}
              role={experiences[1].role}
              description={experiences[1].description}
            />
          </Stack> */}
          {/* <h3 className="" style={{ fontSize: "32px" }}>
            Present
          </h3> */}
        {/* </Stack> */}
      </Container>
    </div>
  );
};
