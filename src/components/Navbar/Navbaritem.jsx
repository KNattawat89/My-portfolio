import { Box, Typography } from '@mui/material';
import React from 'react';

const Navbaritem = ({nav, active}) => {
  return (
    <div>
      <Box className={active} sx={{
        width: "85px",
        height: "65px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"

      }}>
      <span><h3 className={active}>{nav}</h3></span>
      </Box>
    </div>
  );
}

export default Navbaritem;
