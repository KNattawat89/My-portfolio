import { Box } from '@mui/material';
import React from 'react';

const Projectitem = ({title, description, img}) => {
  return (
    <div>
      <Box className='project-img'>
        <img src={img} />
        <div className='font project-text'>
           <h4>{title}</h4>
           <p>{description}</p>
        </div>

      </Box>
    </div>
  );
}

export default Projectitem;
