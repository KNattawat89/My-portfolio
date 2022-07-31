import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Skillitem = ({percent, lang, img, per, scroll}) => {
  return (
    <div className='skill-m'>
      <Stack direction="row" >
      <Stack direction="column" className='font-cent' spacing={1} sx={{marginRight: "50px", width: "50px"}}>
      <img className='skill-img' src={img} />
      <h4 className='font'>{lang}</h4>
      </Stack>
   
      <Box className="skill-item" id={scroll ? percent: "" } >
        <Box sx={{display: "flex",justifyContent: "center", height: "30px", alignItems: "center"}} width={per}>
        <Typography variant='body' className='font-skill'> {per}</Typography>
        </Box>
      </Box>
      </Stack>
     
    </div>
  );
}

export default Skillitem;
