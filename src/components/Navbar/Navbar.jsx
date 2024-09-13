import MenuIcon from "@mui/icons-material/Menu";
import { Box, Button, IconButton, Menu, MenuItem, Stack } from "@mui/material";
import React, { useLayoutEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Navbaritem from "./Navbaritem";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(false);
  const location = useLocation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useLayoutEffect(() => {
    
    window.addEventListener('resize', updateWindowWidth);
    
    
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(true);
  };

  const handleCloseNavMenu = () => {
    if (windowWidth < 450) {
      window.scrollTo(0, 0);
    } else{
      window.scrollTo({
        top: 0,
        behavior: "smooth", 
      });
    }
   
    setAnchorElNav(false);
  };

  return (
    <div>
      <Box
        className="font"
        sx={{
          width: "100%",
          backgroundColor: "white",
          height: "60px",
          top: 0,
          position: "fixed",
          zIndex: 1000,
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            height: "60px",
            marginLeft: "30px",
            marginRight: "30px",
          }}
        >
          <Stack direction="row" display={{ xs: "none", md: "flex" }}>
            <Box
              sx={{
                marginRight: "20px",
                height: "60px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Link to="/" onClick={handleCloseNavMenu}>
                <h2 className="font-navbarbrand">Nao_Night</h2>
              </Link>
            </Box>
            <NavLink to="/" onClick={handleCloseNavMenu}>
              <Navbaritem
                nav="Home"
                active={location.pathname === "/" ? "active" : "navbarItem"}
              />
            </NavLink>
            <NavLink to="/Projects" onClick={handleCloseNavMenu}>
              <Navbaritem
                nav="Projects"
                active={
                  location.pathname === "/Projects" ? "active" : "navbarItem"
                }
              />
            </NavLink>
          </Stack>

          <Stack direction="row" display={{ xs: "flex", md: "none" }}>
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
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Stack
                direction="column"
                spacing={0.5}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <MenuItem key="/" onClick={handleCloseNavMenu}>
                  <Link to="/">Home</Link>
                </MenuItem>
                <MenuItem key="projects" onClick={handleCloseNavMenu}>
                  <Link to="/Projects">Projects</Link>
                </MenuItem>
                <MenuItem key="resume" onClick={handleCloseNavMenu}>
                  <Button
                  onClick={() => {
                    window.open('https://drive.google.com/file/d/1MWNW6LJXYaTezYmQYnnhY0SR4geKsGBL/view?usp=share_link', '_blank');
                  }}
                    style={{
                      backgroundColor: "#D9D9D9",
                      color: "black",
                      boxShadow: "rgba(0, 0, 0, 0.25) 0px 3px 3px",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: 600,
                        textTransform: "none",
                        margin: 0,
                      }}
                    >
                      Resume
                    </h3>
                  </Button>
                </MenuItem>
                <MenuItem key="transcript" onClick={handleCloseNavMenu}>
                  <Button
                    onClick={() => {
                      window.open('https://drive.google.com/file/d/1mP6UBs9uqwdmHjNDS55bUxiyhK7F22mr/view?usp=sharing', '_blank');
                    }}
                    style={{
                      backgroundColor: "#D9D9D9",
                      color: "black",
                      boxShadow: "rgba(0, 0, 0, 0.25) 0px 3px 3px",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: 600,
                        textTransform: "none",
                        margin: 0,
                      }}
                    >
                      Transcript
                    </h3>
                  </Button>
                </MenuItem>
              </Stack>
            </Menu>
            <Box sx={{ marginLeft: "20px", marginRight: "20px" }}>
              <Link to="/Home">
                <span className="font">
                  {" "}
                  <h2>Nao_Night</h2>
                </span>
              </Link>
            </Box>
          </Stack>

          <Stack
            direction={"row"}
            spacing={2}
            display={{ xs: "none", md: "flex" }}
          >
            <Button
             onClick={() => {
              window.open('https://drive.google.com/file/d/1qMLGMtapEzgrMZxoL5Efs8uPf0kZ9Qi4/view?usp=share_link', '_blank');
            }}
              style={{
                backgroundColor: "#D9D9D9",
                color: "black",
                boxShadow: "rgba(0, 0, 0, 0.25) 0px 3px 3px",
              }}
            >
              <h3
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 600,
                  textTransform: "none",
                  margin: 0,
                }}
              >
                Resume
              </h3>
            </Button>
            {/* <Button
             onClick={() => {
              window.open('https://drive.google.com/file/d/1mP6UBs9uqwdmHjNDS55bUxiyhK7F22mr/view?usp=sharing', '_blank');
            }}
              style={{
                backgroundColor: "#D9D9D9",
                color: "black",
                boxShadow: "rgba(0, 0, 0, 0.25) 0px 3px 3px",
              }}
            >
              <h3
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 600,
                  textTransform: "none",
                  margin: 0,
                }}
              >
                Transcript
              </h3>
            </Button> */}
          </Stack>
        </Stack>
      </Box>
    </div>
  );
};

export default Navbar;
