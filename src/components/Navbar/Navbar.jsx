import { Box, Stack, Menu, IconButton, MenuItem } from '@mui/material';
import React from 'react';
import Navbaritem from './Navbaritem';
import CallIcon from '@mui/icons-material/Call';
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

  const [activeLink, setActiveLink] = useState(null);
  const [anchorElNav, setAnchorElNav] = useState(false);
  const pages = ["/Home", "/Projects", "/About"];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(true);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(false);
  };

  const onUpdateActiveLink = (value) => {
  
    setActiveLink(value)
    console.log(value);
    console.log({activeLink});
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
            <Box sx={{marginLeft: "20px", marginRight: "20px", height: "60px", display: "flex", alignItems: "center"}}>
            <Link to='/'>
                 <h2 className='font font-navbarbrand'>Nao_Night</h2>
            </Link>
        
            </Box>

            <NavLink to='/' onClick={() => onUpdateActiveLink('home')}><Navbaritem nav="Home" active={activeLink === 'home' ? 'active font' : 'Navbaritem font'} /></NavLink>
            <NavLink to='/Projects' onClick={() => onUpdateActiveLink('projects')}><Navbaritem nav="Projects" active={activeLink === 'projects' ? 'active font' : 'Navbaritem font'} /></NavLink>
            <NavLink to='/About' onClick={() => onUpdateActiveLink('aboutme')}><Navbaritem nav="About me" active={activeLink === 'aboutme' ? 'active font' : 'Navbaritem font'} /></NavLink>
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
              <Stack direction="column" spacing={0.5} sx={{display: "flex", alignItems: "center"}}>
              
                <MenuItem key='/' onClick={handleCloseNavMenu}>
                 <Link to='/'>Home</Link>
                </MenuItem>
                <MenuItem key='projects' onClick={handleCloseNavMenu}>
                 <Link to='/Projects'>Projects</Link>
                </MenuItem>
                <MenuItem key='about' onClick={handleCloseNavMenu}>
                 <Link to='/About'>Aboutme</Link>
                </MenuItem>
            
              <Stack spacing={1}>

               <a href='https://www.facebook.com/profile.php?id=100007457503353'>
                <Box className='Circleone-xs' sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <img  src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/800px-Facebook_Logo_%282019%29.png' 
                height="40px" width="45px" alt='facebook-xs'/>
                </Box>
              </a>

              <a href='https://www.instagram.com/nn_nattawat/'>
                <Box className='Square-xs' sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png'
                  height="40px" width="45px" alt='IG-xs'/>
              </Box>
              </a>

              <a href='tel:0948426152'>
                  <CallIcon className='Circle-xs'  sx={{color: "green", width: "40px", height: "45px"}}/>
              </a>
              </Stack>
              </Stack>
            </Menu>
            <Box sx={{marginLeft: "20px", marginRight: "20px"}}>
            <Link to="/Home">
            <span className="font"> <h2>Nao_Night</h2></span>
            </Link>
            </Box>
            </Stack>

      
            <Stack direction="row" spacing={5} sx={{marginRight: "30px"}}>
              <a href='https://www.facebook.com/profile.php?id=100007457503353'>
                <Box className='Circleone' sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <img  src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/800px-Facebook_Logo_%282019%29.png' 
                height="40px" width="45px" alt='facebook'/>
                </Box>
              </a>
              <a href='https://www.instagram.com/nn_nattawat/'>
                <Box className='Square' sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png'
                  height="40px" width="45px" alt='IG'/>
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
