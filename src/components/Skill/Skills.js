import { React, useRef } from 'react';
import { Stack, Container,Box } from '@mui/material'
import Skillitem from './Skillitem';
import useOnScreen from '../UseonScreen';
const Skills = () => {
  // const [scrolled, setscrolled] = useState(false);
  // const [scrolled2, setscrolled2] = useState(false);
  const ref = useRef()
  const isVisible = useOnScreen(ref)

  const lang = [
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png",
      lang: "Html",
      percent: 70,
      per: "70%",
    },
    {
      img: "https://i.pinimg.com/originals/eb/7e/20/eb7e20e646f5b7ec9ed4f8f78a5dee8f.png",
      lang: "Css",
      percent: 70,
      per: "70%",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Javascript-shield.png",
      lang: "Javascript",
      percent: 60,
      per: "60%",
    },

    {
      img: "https://cdn-icons-png.flaticon.com/512/152/152760.png?w=360",
      lang: "Java",
      percent: 50,
      per: "50%",
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
      per: "70%",
    },
    {
      img: "https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png",
      lang: "React",
      percent: "react",
      per: "50%",
    }
  ]

  // useEffect(() => {
  //   const onScroll = () => {
  //     if (window.scrollY > 700) {
  //       setscrolled(true);
  //     }
  //     else {
  //       setscrolled(false)
  //     }

  //   }
  //   window.addEventListener("scroll", onScroll);

  //   return () => {
  //     window.removeEventListener("scroll", onScroll);
  //   };
  // }, []);

  // useEffect(() => {
  //   const onScroll2 = () => {
  //     if (window.scrollY > 1400) {
  //       setscrolled2(true);
  //     }
  //     else {
  //       setscrolled2(false)
  //     }

  //   }
  //   window.addEventListener("scroll", onScroll2);

  //   return () => {
  //     window.removeEventListener("scroll", onScroll2);
  //   };
  // }, []);



  // const [plus, setPlus] = useState(JSON.parse(window.localStorage.getItem('plus')));

  // useEffect(() => {
  //  JSON.parse(window.localStorage.getItem('plus'))
  //  setPlus(JSON.parse(data));
  //   }, []);

  //   useEffect(() => {
  //     window.localStorage.setItem('plus', plus);
  //   }, [plus]);
  // console.log(isVisible);
  return (
    <div className="skill" ref={ref}>
      <Container>
        <Box className={isVisible ? " scrolled" : "skill-hind"}>
         <h3 className='font'>Skills</h3>
        <Stack direction={{xs: "column", md: "row"}} spacing={5} justifyContent="center">
          <Stack alignItems="center">
            <h4 className='font lang-font'>Library/Framework</h4>
            {tool.map((tool) => {
              return (
                <Skillitem {...tool} scroll={isVisible} />
              )
            })}
          </Stack>
          <Stack alignItems="center">
            <h4 className='font lang-font'>Languages</h4>
            {lang.map((lang) => {
              return (
                <Skillitem {...lang} scroll={isVisible} />
              )
            })}
          </Stack>
        </Stack>
        </Box>
      </Container>
    </div>
  );
}

export default Skills;
