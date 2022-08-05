import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useRef } from 'react';
import useOnScreen from '../UseonScreen';

const Skillitem = ({ lang, img, per }) => {
  const ref = useRef()
  const isVisible = useOnScreen(ref)
  return (
    <div className='skill-m' ref={ref}>
      <Stack direction="row" >
        <Stack direction="column" className='font-cent' spacing={1} sx={{ marginRight: "50px", width: "50px" }}>
          <img className='skill-img' src={img} alt='' />
          <h4 className='font'>{lang}</h4>
        </Stack>

        <Box className="skill-item">
          <Box className="inner-skill-item" width={isVisible ? per : "0px"}>
            <Box sx={{ display: "flex", justifyContent: "center", height: "30px", alignItems: "center" }} width={per}>
              <Typography variant='body' className='font-skill'> {per}</Typography>
            </Box>
          </Box>
        </Box>
      </Stack>

    </div>
  );
}

export default Skillitem;
