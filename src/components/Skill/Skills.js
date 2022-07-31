import {React, useState, useEffect} from 'react';
import {Button, Stack, Container, Grid} from '@mui/material'
import Skillitem from './Skillitem';
import skill from '../../assets/img/banner-skill.png';
const Skills = () => {
    const [scrolled, setscrolled] = useState(false);

    const lang = [
      {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png",
        lang: "Html",
        percent: "html",
        per: "70%",
      },
      {
        img: "https://i.pinimg.com/originals/eb/7e/20/eb7e20e646f5b7ec9ed4f8f78a5dee8f.png",
        lang: "Css",
        percent: "css",
        per: "70%",
      },
      {
        img: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Javascript-shield.png",
        lang: "Javascript",
        percent: "js",
        per: "60%",
      },

      {
        img: "https://cdn-icons-png.flaticon.com/512/152/152760.png?w=360",
        lang: "Java",
        percent: "java",
        per: "40%",
      },

      // {
      //   img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png",
      //   lang: "BootStrap",
      //   percent: "Bs",
      //   per: "60%",
      // },
      // {
      //   img: "https://mui.com/static/logo.png",
      //   lang: "Mui",
      //   percent: "mui",
      //   per: "80%",
      // },
      // {
      //   img: "https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png",
      //   lang: "React",
      //   percent: "react",
      //   per: "50%",
      // }
    ]

    const tool = [
      {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png",
        lang: "BootStrap",
        percent: "Bs",
        per: "60%",
      },
      {
        img: "https://mui.com/static/logo.png",
        lang: "Mui",
        percent: "mui",
        per: "80%",
      },
      {
        img: "https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png",
        lang: "React",
        percent: "react",
        per: "50%",
      }
    ]

    useEffect(() => {
     const onScroll = () => {
          if (window.scrollY > 600) {
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

    

    // const [plus, setPlus] = useState(JSON.parse(window.localStorage.getItem('plus')));

    // useEffect(() => {
    //  JSON.parse(window.localStorage.getItem('plus'))
    //  setPlus(JSON.parse(data));
    //   }, []);
    
    //   useEffect(() => {
    //     window.localStorage.setItem('plus', plus);
    //   }, [plus]);

  return (
    <div className="skill">
      <Container>
        
        
      <Stack direction="column" className={scrolled ? " scrolled" : "skill-hind" }>
      <h3 className='font'>Skills</h3>
      <Grid container>
        <Grid item xs={12} md={6}>
          
          <h4 className='font lang-font'>Library/Framework</h4>
        {tool.map((tool) => {
            return(
              <Skillitem {...tool} scroll={scrolled} />
            )
           })}
           
      {/* <Button variant='contained' onClick={() => setPlus(plus + 1)}>Click me</Button> */}
      {/* <h5>{plus}</h5> */}
         </Grid>
        <Grid item xs={12} md={6}>
          <h4 className='font lang-font'>Languages</h4>
           {lang.map((lang) => {
            return(
              <Skillitem {...lang} scroll={scrolled} />
            )
           })}
         
         </Grid>
      </Grid>
      </Stack>
    
      </Container>
    </div>
  );
}

export default Skills;
