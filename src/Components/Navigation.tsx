import React from 'react';
import { styled, alpha, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Divider from "@mui/material/Divider"
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
// ICONS
import "../App.scss"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import myTheme from '../Theme/MyTheme'
import Link from '@mui/material/Link'


import logo from "../images/freckled.svg"

const SocialIconWrapper = styled('div')(({ theme=myTheme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  left: "76%",
  top: '20%',
  pointerEvents: 'all',
  display: 'flex',
  alignItems: 'space-between',
  justifyContent: 'flex-end',
  color: '#fff',
  zIndex: theme.zIndex.drawer,
  [theme.breakpoints.down("sm")]:{ 
    left: '0%',
    top: '0%',
    backgroundColor: theme.palette.primary.main,
    alignItems: 'center',
    margin: 'none',
    justifyContent: 'center',
     height: '100vh',
     width: '100vw',
     flexDirection: 'column',
     '& .MuiSvgIcon-root': {
      fill: '#fff',
    },
  },
  '& a':{
    padding: '1.2em',
  },
  '& svg:hover': {
    fill: '#fff',
    transform: 'scale(1.1) translateZ(1.2)'
  },
  '& .MuiSvgIcon-root': {
    fill: '#fff',
  },
  '& .MuiTypography-root-MuiLink-root':{
    color: '#fff',
  }
}));

const StyledInputBase = styled(InputBase)(({ theme=myTheme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const LogoImage = styled('img')(({ theme=myTheme }) => ({
  display: 'inline',
  outline: 'none', 
  border: 'none',
  transform: "scale(1.6)",
  overflow: "hidden",
  [theme.breakpoints.down('sm')]: {
    position: 'relative',
    right: "-55%"
  }
}));


export default function Navigation() {

const [openMenu, setOpenMenu] = React.useState(false)
  return (
    <ThemeProvider theme={myTheme}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" enableColorOnDark>
        <Toolbar style={{overflow: "hidden"}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon sx={{ display: { lg: 'none', sm: 'block' }, zIndex: myTheme.zIndex.tooltip }} onClick={() => setOpenMenu(!openMenu)}/>      
          </IconButton>
          <LogoImage alt="logo" src={logo} />
            <SocialIconWrapper sx={{ display: { sm: 'none', xs: 'none', lg: 'block' } }}>
              <Link  underline="none" href="https://www.linkedin.com/in/liudmyla-malomuzh-4a8b36175/" ><LinkedInIcon className="glow-icon" /></Link>
             <Link underline="none" href="https://github.com/milafreckled"><GitHubIcon className="glow-icon" /></Link>
            <Link underline="none" href="https://www.facebook.com/profile.php?id=100005818517786"> <FacebookIcon className="glow-icon"  /></Link>
            </SocialIconWrapper>

        </Toolbar>
      </AppBar>
    </Box>
    {
              openMenu && <SocialIconWrapper sx={{  display: { lg: 'none', sm: 'block' }, zIndex: myTheme.zIndex.drawer}}>
             <Link  underline="none" href="https://www.linkedin.com/in/liudmyla-malomuzh-4a8b36175/" >
               <LinkedInIcon sx={{  width: "100%" }}/>
               </Link>
              <Divider />
              <Link underline="none" href="https://github.com/milafreckled">
                <GitHubIcon sx={{  width: "100%", borderBottom: '.5rem solid rgabs(255, 255, 255, 0.6)'}} />
                  </Link>
              <Divider sx={{bgcolor: 'rgba(255, 255, 255, 0.4)' }} />
              <Link underline="none" href="https://www.facebook.com/profile.php?id=100005818517786"> 
              <FacebookIcon sx={{ width: "100%", borderBottom: '.5rem solid rgabs(255, 255, 255, 0.6)'}} />
              </Link>
              <Divider sx={{bgcolor: myTheme.palette.background.default }}/>
            </SocialIconWrapper>
            }
    </ThemeProvider>
  );
}
