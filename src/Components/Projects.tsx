import * as React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import { isMobile } from 'react-device-detect';
import myTheme from "../Theme/MyTheme"
import "../App.scss"
import weatherApiImg from "../images/weather-api.jpeg"
import calculatorImg from "../images/profit-calculator.jpeg"
import hackerImg from "../images/hacker-stories.png"


//https://bjw6l.csb.app/ = calculator app
//https://tranquil-castle-21899.herokuapp.com/ - sign in app
//https://dreamy-volhard-522fd9.netlify.app/ - profit calculator
const ProjectsContainer = styled('div')(({ theme}) => ({
    ...theme.typography.body2,
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '1.5vw',
    [theme.breakpoints.down('sm')]:{
      display: 'block',
      marginInline: '2.5vw',
    },
    '& a':{
      color: 'white',
      flex: '50%',
      margin: "2.5vw",
    }
  }));

const ProjectImage = styled('img')(({ theme }) => ({
  marginInline: "2.5vw",
  flex: '50%',
  borderRadius: '20px',
  maxWidth: '85%',
  '&:hover':{
    boxShadow: '0 0 5px white',
    transform: 'translateZ(1.2)',
  },
  [theme.breakpoints.down('sm')]:{
    display: 'block',
    maxWidth: '95%'
  },
}));
const ProjectDesc = styled('article')(({ theme }) => ({
  flex: '50%',
  margin: "2.5vw",
  lineHeight: '1.5',
  '& h2':{
    letterSpacing: '1.2',
    marginBottom: '1rem',
    color: theme.palette.primary.main,
  },
  '& p':{
    color: theme.palette.text.primary,
    marginTop: '2rem', 
    lineHeight: '2',
    fontSize: '16px',
  },
  [theme.breakpoints.down('sm')]:{
    display: 'block',
    maxWidth: '90vw',
    wordWrap: 'break-word',
    textAlign: 'justify',
    '& h2':{
      marginBlock: '1rem',
    },
  },
}));
export default function Projects(){
    if (!isMobile){ 
      return(
      <div style={{ backgroundColor: '#fff', paddingBlock: '40px'}}>
    <Typography sx={{ typography:  'h2', textAlign: "center", color: myTheme.palette.primary.main }} >My Projects</Typography>
        <ProjectsContainer >  
        <a href="https://thawing-beach-25991.herokuapp.com/" > <ProjectImage src={weatherApiImg} alt="" /></a>
          <ProjectDesc>
          <h2>WEATHER API</h2>
          <Divider />
          <p>
         Weather API using current weather data from https://openweathermap.org/api.<br />
            Search for a current temperature in any place, and add records to the weather archive.<br />
            Technologies included: Express, EJS, MongoDB. Hosted with heroku.
          </p>
          </ProjectDesc>
        </ProjectsContainer>
        <ProjectsContainer>     
          <ProjectDesc>
          <h2>PROFIT CALCULATOR</h2>  
          <Divider />
          <p>
            Profit calculator for cryptocurrency.<br />
            Technologies used: Materialize CSS framework, SCSS, JavaScript, HTML.<br />
            Hosted with heroku.
          </p>
         
          </ProjectDesc>
          <a href="https://tranquil-castle-21899.herokuapp.com/"> <ProjectImage src={calculatorImg} alt="" /></a>
          </ProjectsContainer>
          <ProjectsContainer>
          <a href="https://hackers-stories.web.app/"> <ProjectImage src={hackerImg} alt="" /></a>
          <ProjectDesc>
      
            <h2>HACKER STORIES APP</h2>  
            <Divider />
          <p>
    
            App where you can search for any term in web programming world.<br />
            Technologies used: React, Redux, Typescript.<br />
            Hosted with firebase.
          </p>
          </ProjectDesc>
          </ProjectsContainer>
          </div>
          )
    }else{
return(
<div style={{ backgroundColor: '#fff', paddingBlock: '40px'}}>
    <Typography sx={{ typography:  'h2', textAlign: "center", color:'#fff' }} >My Projects</Typography>
        <ProjectsContainer >  
        <a href="https://thawing-beach-25991.herokuapp.com/" > <ProjectImage src={weatherApiImg} alt="" /></a>
          <ProjectDesc>
          <h2>WEATHER API</h2>
          <Divider />
          <p>
         Weather API using current weather data from https://openweathermap.org/api.<br />
            Search for a current temperature in any place, and add records to the weather archive.<br />
            Technologies included: Express, EJS, MongoDB. Hosted with heroku.
          </p>
          </ProjectDesc>
        </ProjectsContainer>
        <ProjectsContainer> 
        <a href="https://dreamy-volhard-522fd9.netlify.app/"> <ProjectImage src={calculatorImg} alt="" /></a>    
          <ProjectDesc>
          <h2>PROFIT CALCULATOR</h2>  
          <Divider />
          <p>
            Profit calculator for cryptocurrency.<br />
            Technologies used: Materialize CSS framework, SCSS, JavaScript, HTML.<br />
            Hosted with heroku.
          </p>
         
          </ProjectDesc>
          </ProjectsContainer>
          <ProjectsContainer>
          <a href="https://hackers-stories.web.app/"> <ProjectImage src={hackerImg} alt="" /></a>
          <ProjectDesc>
      
            <h2>HACKER STORIES APP</h2>  
            <Divider />
          <p>
    
            App where you can search for any term in web programming world.<br />
            Technologies used: React, Redux, Typescript.<br />
            Hosted with firebase.
          </p>
          </ProjectDesc>
          </ProjectsContainer>
          </div>
)
    }
       /* <ProjectItem url="https://thawing-beach-25991.herokuapp.com/"  text="Weather API"></ProjectItem>
       <ProjectItem url="https://dreamy-volhard-522fd9.netlify.app/ " text="Profit Calculator"></ProjectItem>
       <ProjectItem url="https://tranquil-castle-21899.herokuapp.com/"  text="Sign Up Page"></ProjectItem>
 
       <ProjectItem url="https://thawing-beach-25991.herokuapp.com/"  text="Weather API"></ProjectItem>
       <ProjectItem url="https://dreamy-volhard-522fd9.netlify.app/ " text="Profit Calculator"></ProjectItem>
       <ProjectItem url="https://tranquil-castle-21899.herokuapp.com/"  text="Sign Up Page"></ProjectItem> */
}