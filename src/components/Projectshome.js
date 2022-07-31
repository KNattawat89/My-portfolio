import { Container, Grid, Stack } from '@mui/material';
import {React, useState, useEffect} from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Projectitem from './Projectitem';

const Projectshome = () => {
    const project = [
      {
        title: "project1",
        description: "This is project1",
        img: "https://img.freepik.com/premium-photo/scene-with-geometrical-forms-arch-with-podium-natural-day-light-minimal-landscape-background-sea-view-3d-render-background_6436-195.jpg?w=2000"
      },
      {
        title: "project2",
        description: "This is project2",
        img: "https://img.freepik.com/free-photo/minimal-composition-with-blank-paper-with-green-leaves-top-view_24972-1595.jpg?w=2000"
      },
      {
        title: "project3",
        description: "This is project3",
        img: "https://previews.123rf.com/images/maximleshkovich/maximleshkovich1802/maximleshkovich180200195/96084580-hypericum-flower-in-vase-on-white-background-front-view-minimal-composition-.jpg"
      },
    ]
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

      useEffect(() => {
       const onScroll = () => {
            if (window.scrollY > 50) {
                setscrolled(true);
            }
            else{
              setscrolled(false)
            }
            
        }
        window.addEventListener("scroll", onScroll);

        return () => {
         window.removeEventListener("scroll", onScroll);
        };
      }, []);

  return (
    <div >
      <Container>

      {/* <Stack direction="column" className={scrolled ? "scrolled project-bg" : "hind"}>
        <h3 className='font'>Projects</h3>
        <div>
        <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2000} className="project">  */}
             {/* <div className='item font'>
                <img src='https://img.freepik.com/premium-photo/scene-with-geometrical-forms-arch-with-podium-natural-day-light-minimal-landscape-background-sea-view-3d-render-background_6436-195.jpg?w=2000' />
                <h4>project 1</h4>
            </div>
            <div className='item font'>
                <img src='https://img.freepik.com/free-photo/minimal-composition-with-blank-paper-with-green-leaves-top-view_24972-1595.jpg?w=2000' />
                <h4>project 2</h4>
            </div>
            <div className='item font'>
                <img src='https://previews.123rf.com/images/maximleshkovich/maximleshkovich1802/maximleshkovich180200195/96084580-hypericum-flower-in-vase-on-white-background-front-view-minimal-composition-.jpg' />
                <h4>project 3</h4>
            </div>  */}

            <Stack direction="column" className={scrolled ? "scrolled project-bg" : " project-bg"}>
              <h3 className='font'>Projects</h3>
              <p className='font'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
              <Stack direction="row" spacing={4} display={{xs: "none", md: "flex"}} sx={{justifyContent: "center"}}>
                       
                  {
                    project.map((projects) => {
                      return(
                        <Projectitem {...projects} />
                      )
                    })
                  }
                  
            </Stack>

            <Stack direction="column" spacing={4} display={{xs: "flex", md: "none"}} sx={{justifyContent: "center", alignItems: "center"}}>
                       
                  {
                    project.map((projects) => {
                      return(
                     
                        <Projectitem {...projects} />
                       
                      )
                    })
                  }
                  
            </Stack>
            </Stack>

            
            
             {/* </Carousel>
       
            </div>

          </Stack> */}
        
          
      </Container>
    </div>
  );
}

export default Projectshome;
