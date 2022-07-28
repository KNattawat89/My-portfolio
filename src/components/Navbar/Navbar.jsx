import { AppBar, Box, Stack, Typography, Menu, IconButton, MenuItem } from '@mui/material';
import React from 'react';
import Navbaritem from './Navbaritem';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import CallIcon from '@mui/icons-material/Call';
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from 'react';

const Navbar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [anchorElNav, setAnchorElNav] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(false);
  const pages = ["Home", "Projects", "About me"];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(true);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(false);
  };

  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  }

  return (
    <div> 
      <Box sx={{
        width: "100%",
        backgroundColor: "white",
        height: "60px",
        top: 0,
        position: "fixed",
        zIndex: 1000,
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}>
        
          <Stack direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            height: "60px"
          }}
          >
            <Stack direction="row" display={{xs: "none", md: "flex"}}>
            <Box sx={{marginLeft: "20px", marginRight: "20px"}}>
            <a href='#home'>
            <span className="font"> <h2>Nao_Night</h2></span>
            </a>
            </Box>

            <a href='#home' onClick={() => onUpdateActiveLink('home')}><Navbaritem nav="Home" active={activeLink === 'home' ? 'active font' : 'Navbaritem font'} /></a>
            <a href='#projects' onClick={() => onUpdateActiveLink('projects')}><Navbaritem nav="Projects" active={activeLink === 'projects' ? 'active font' : 'Navbaritem font'} /></a>
            <a href='#aboutme' onClick={() => onUpdateActiveLink('aboutme')}><Navbaritem nav="About me" active={activeLink === 'aboutme' ? 'active font' : 'Navbaritem font'} /></a>
            </Stack>

            <Stack direction="row" display={{xs: "flex", md: "none"}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" }
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
            <Box sx={{marginLeft: "20px", marginRight: "20px"}}>
            <a href='#home'>
            <span className="font"> <h2>Nao_Night</h2></span>
            </a>
            </Box>
            </Stack>

      
            <Stack direction="row" spacing={5} sx={{marginRight: "30px"}}>
              <a href='https://www.facebook.com/profile.php?id=100007457503353'>
                <Box className='Circleone' sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <img  src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/800px-Facebook_Logo_%282019%29.png' 
                height="40px" width="45px"/>
                </Box>
              </a>
              <a href='https://www.instagram.com/nn_nattawat/'>
                <Box className='Square' sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png'
                  height="40px" width="45px"/>
              </Box>
              </a>
              <a href='tel:0948426152'>
                  <CallIcon className='Circle'  sx={{color: "green", width: "40px", height: "45px"}}/>
              </a>

            </Stack>

          </Stack>
      </Box>
    </div>
  );
}

export default Navbar;
