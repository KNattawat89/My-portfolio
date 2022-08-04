import { Grid, Typography , Stack, Button, colors} from '@mui/material';
import React from 'react';
import ban from '../assets/img/banner.png'
import { useState, useEffect } from 'react';

const Banner = () => {
    const [loopNum, setloopNum] = useState(0);
    const [isDeleting, setisDeleting] = useState(false);
    const toRotate = [ "I'm Night", "I'm Web Developer"];
    const [text, settext] = useState('');
    const [delta, setdelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
    
      let ticker = setInterval(() => {
        tick();
      }, delta);

      return () => {
        clearInterval(ticker)
      };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length; //toRotate = 2
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        settext(updatedText);

        if (isDeleting) {
            setdelta(prevDelta => prevDelta / 2)
        }

        if(!isDeleting && updatedText === fullText) {
            setisDeleting(true);
            setdelta(period)
        }
            else if(isDeleting && updatedText === '') {
                    setisDeleting(false);
                    setloopNum(loopNum + 1);
                    setdelta(500);
            }
    }


  return (
    <div className="space">
    <Stack direction={{xs: "column", md: "row"}} alignItems="center">
        

          <Stack direction="column" className='header'>
          <h4>Welcome to my website and portfolio</h4> 
          <h1>Hi, {text}</h1>
          <p>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, 
            I’m focused on building accessible, human-centered products at Upstatement.
          </p>
          <span><a href='https://github.com/KNattawat89'><Button  variant="contained" sx={{width: "100px", height: "50px", position: "static", background: "black", marginBottom: "50px"}}>Github</Button></a></span>
          
          </Stack>
    
       
       
        <img src={ban} className="headerIcon"/>
        
        </Stack>
    </div>
  );
}

export default Banner;
