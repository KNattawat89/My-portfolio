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
      date: "September/2023",
    },
    {
      title: "Connected Tech",
      role: "Full Stack Developer",
      description:
        "After doing the frontend role for 3 months, I try to be the full stack developer. I learn many things from this role. In the backend, I try to improve my algorithm and logic to optimize the process that handles data from the database, processes the data, and so many things. After doing the backend, I developed the frontend and integrated both the backend and frontend. This role provided me with many knowledge, techniques, and experiences that inspired me to be better.",
      date: "December/2023",
    },
    {
      title: "JNA Distribution Company",
      role: "Full Stack Developer",
      description:
        "I worked as a full-stack developer to develop a warehouse system for managing stock and customer orders. My responsibilities included gathering user requirements from both employees and customers to build a user-friendly system, while also devising solutions to enhance performance and reduce costs. Additionally, I supported other developers in the development of internal and external systems connected to the warehouse. This role gave me the opportunity to independently manage and develop the entire system, which helped me learn and grow significantly in my career.",
      date: "February/2024",
    }
  ];

  const ref = useRef();
  const isVisible = useOnScreen(ref);
  console.log(isVisible);

  return (
    <div className="skill" ref={ref}>
      <Container sx={{ mb: "40px" }}>
        <Box px={"15px"} className={isVisible ? "scrolled" : "skill-hind"}>
          <h3 className="font">Work Experiences</h3>
        </Box>

        <Timeline className={isVisible ? "scrolled" : "skill-hind"} sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.55,
          },
        }}>
          {experiences.map((experience, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent display={{ xs: "none", sm: "block" }} color="textSecondary">
                <div className="font" style={{ fontSize: "20px", color: "black" }}>
                  {experience.date}
                </div>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent mt={{ sm: 3 }}>
                <Box display={{ xs: "block", sm: "none" }}>
                  <div className="font" style={{ fontSize: "20px", color: "black" }}>
                    {experience.date}
                  </div>
                </Box>
                <ExperienceBox
                  company={experience.title}
                  role={experience.role}
                  description={experience.description}
                />
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </div>
  );
};
