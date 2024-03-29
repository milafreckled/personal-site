import React from 'react';
import { styled, alpha} from '@mui/material/styles';
import Box from '@mui/material/Box';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import Tooltip from '@mui/material/Tooltip'
import BookIcon from '@mui/icons-material/Book';
import Typography from '@mui/material/Typography';
import myTheme from '../Theme/MyTheme'
import BlobBig from "../images/blob-big.svg"
import portrait from "../images/myself.jpeg"
import "../App.scss"

const HintContainer = styled('div')(({ theme = myTheme }) => ({
  display: 'flex',
  width: '20%',
  flexDirection: 'column',
  gap: '55px',
  position: 'absolute',
  left: '48%',
  top: '19%',
 
  "& a:nth-of-type(2n)": {
    marginLeft: '40px',
  }
}));

const Hint = styled('button')(({ theme=myTheme }) => ({
  position: 'relative',
  backgroundColor: '#664E87',
  color: '#fff',
  borderRadius: '50%',
  width: '60px',
  height: '60px',
  textAlign: 'center',
  font: '2rem, bold',
  border: 'none',
  outline: 'none',
  [theme.breakpoints.down('md')]:{ 
    display: 'none',
    '& >*':{
      display: 'none',
    }
  },
  '& >*':{
    position: 'absolute',
    top: '25%',
    left: '30%',
  },
  '&:hover':{
    border: `2px outset ${alpha(myTheme.palette.primary.main, 0.6)}`,
  },
}));

const ImageBox = styled('div')(({ theme=myTheme }) => ({
  padding: theme.spacing(2),
  zIndex: myTheme.zIndex.tooltip,
  margin: '5% 7%',
  width: '100%',
  minHeight: "60vh",
  color: theme.palette.primary.main,
  textAlign: 'center',
  [theme.breakpoints.down('md')]:{ 
    overflow: 'hidden',
    height: '100vh',
    background: 'none',
    fontSize: '.75rem',
    padding: '0',
    margin: '0',
    color: '#fff',
  }
}));

const TextBox = styled(Box)(({ theme=myTheme }) => ({
  overflowY: 'hidden',
  backfaceVisibility: 'hidden',
  lineHeight: "2.5", 
  backgroundSize: '90%',
  backgroundPosition: '20%, 50%',
  backgroundRepeat: 'no-repeat',
  transition: "opacity 0.1s",
  position: 'relative',
  left: '5%',
  textAlign: 'left',
  '& .MuiBox-root':{
    height: '100%',
    width: '100%',
  },
  '& .MuiTypography-root::before':{
    content: `""`,
    opaciy: '0',
  },
  [theme.breakpoints.down('sm')]:{ 
    px: 'ņone',
    left: '0',
    mt: '13%',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 'none',
    width: '100%',
    '& > *':{
      marginLeft: '0',
    },
  }
}));

const Image = styled('img')(({ theme=myTheme }) => ({
  boxShadow: `0px 0px 10px ${theme.palette.secondary.main}`,
  animation: '1s blink infinite',
  width: '30vw',
  height: '30vw',
  borderRadius: "50%",
  position: 'relative',
  float: 'left',
  transform: 'translateX(12%)',
  [theme.breakpoints.down('sm')]:{ 
    marginTop: '2.5vh',
    position: 'relative',
    display: 'block',
    width: '60vw',
    height: '60vw',
    transform: 'translateX(30%)',
  }
}));

  const MyContainer = styled('div')(({theme = myTheme}) => ({
    background: `url(${BlobBig}) no-repeat`,
    backgroundSize: '1800px 800px',
    backgroundPosition: '32% 50%', 
    [theme.breakpoints.down('sm')]:{
      background: 'none'
    }
  }))

const Portrait = () => {
    return(
      <MyContainer>
        <ImageBox >
        <Image alt="me" src={portrait} />
        <TextBox >
        <Typography variant="h2"  sx={{ textAlign: 'left', color: {lg: 'white', sm: myTheme.palette.primary.main, xs: myTheme.palette.primary.main}, animation: "fadeUp  1s ease-in-out forwards" }} component="h2"> I'm Ludmila</Typography>
        <Typography variant="h6"  sx={{  textAlign: 'left', color: myTheme.palette.text.disabled, animation: "appear  2s ease-in-out forwards"   }} component="h6">
         a programmer.
        </Typography>
        <Typography sx={{ 
  marginTop: {lg: '2%', sm: '0'}, color: {lg: '#fff', sm: myTheme.palette.primary.main, xs: myTheme.palette.primary.main},  maxWidth: {lg: '20vw'} }} variant="h4"  component="h4">Things to know about me:</Typography>
       <br />
       <Typography sx={{ lineHeight: '1.5',overflow: 'hidden', color: {lg: "#fff", sm: myTheme.palette.primary.main, xs: myTheme.palette.primary.main }}} variant="h6">
        <ul>
        <li><span id="emoji-rocket">🚀</span>I am turbulent and always learn fast.</li>
        <li><span style={{ color: myTheme.palette.text.secondary }} id="emoji-curious">🧐</span>I am curious about CS and not only.</li>
        <li><span style={{ color: myTheme.palette.text.secondary }} id="emoji-teamplayer">🙋🏼‍♀️</span>I am a teamplayer.<br />You are always welcome!</li>
        </ul>
      </Typography>
      <HintContainer>
      <Tooltip sx={{maxHeight: '12px'}} title="Download CV">
      <a href="https://docs.google.com/document/d/e/2PACX-1vSGQQxD1LFJJEnAVE5ppSy2-4LjgpvQU0KptgPANJwQAmfcxoYhAmQKAZf8g7-mv-QXFRQfOFGDFmpS/pub" download> 
      <Hint  sx={{zIndex: myTheme.zIndex.mobileStepper}}>
      <DownloadIcon /></Hint></a></Tooltip>
      <Tooltip sx={{maxHeight: '12px'}} title="Email me">
        <a href="mailto:miladul2014@gmail.com">
          <Hint sx={{zIndex: myTheme.zIndex.mobileStepper}} >
          <EmailIcon />
          </Hint>
      </a>
      </Tooltip>
      <Tooltip title="Visit Blog">
        <a href="https://www.freckledblog.studio/">
        <Hint><BookIcon /></Hint>
        </a>
      </Tooltip>   
  </HintContainer>
</TextBox>
</ImageBox>
</MyContainer>
  )
}
export default Portrait;
// https://docs.google.com/document/d/e/2PACX-1vSGQQxD1LFJJEnAVE5ppSy2-4LjgpvQU0KptgPANJwQAmfcxoYhAmQKAZf8g7-mv-QXFRQfOFGDFmpS/pub