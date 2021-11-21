import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import ProjectItem from "./ProjectItem"
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import myTheme from '../Theme/MyTheme'
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
    color: '#fff',
    marginTop: '1.5vw',
    [theme.breakpoints.down('sm')]:{
      display: 'block',
      marginInline: '2.5vw',
    },
    '& a':{
      color: 'white',
    }
  }));

const ProjectImage = styled('img')(({ theme }) => ({
  marginInline: "2.5vw",
  flex: '50%',
  borderRadius: '20px',
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
  return(
      <div style={{ backgroundColor: '#fff', paddingBlock: '40px'}}>
    <Typography sx={{ typography:  'h2', textAlign: "center", color:'#fff' }} >My Projects</Typography>
        <ProjectsContainer >  
          <ProjectImage src={weatherApiImg} alt="" />
          <ProjectDesc>
          <h2><a href="https://thawing-beach-25991.herokuapp.com/" >WEATHER API</a></h2>
          <Divider />
          <p>
         Weather API using current weather data from https://openweathermap.org/api.<br />
            Search for a current temperature in any place, and add records to the weather archive.<br />
            Technologies included: Express, EJS, MongoDB. Hosted with heroku.
          </p>
          </ProjectDesc>
        </ProjectsContainer>
        <ProjectsContainer>
        <ProjectImage src={calculatorImg} alt="" />
          <ProjectDesc>

          <h2><a href="https://tranquil-castle-21899.herokuapp.com/">PROFIT CALCULATOR</a></h2>  
          <Divider />
          <p>
            Profit calculator for cryptocurrency.<br />
            Technologies used: Materialize CSS framework, SCSS, JavaScript, HTML.<br />
            Hosted with heroku.
          </p>
          </ProjectDesc>
        
          </ProjectsContainer>
          <ProjectsContainer>
          <ProjectImage src={hackerImg} alt="" />
          <ProjectDesc>
      
            <h2><a href="https://hackers-stories.web.app/">HACKER STORIES APP</a></h2>  
            <Divider />
          <p>
    
            App where you can search for any term in web programming world.<br />
            Technologies used: React, Redux, Typescript.<br />
            Hosted with firebase.
          </p>
          </ProjectDesc>
          </ProjectsContainer>
       {/* <ProjectItem url="https://thawing-beach-25991.herokuapp.com/"  text="Weather API"></ProjectItem>
       <ProjectItem url="https://dreamy-volhard-522fd9.netlify.app/ " text="Profit Calculator"></ProjectItem>
       <ProjectItem url="https://tranquil-castle-21899.herokuapp.com/"  text="Sign Up Page"></ProjectItem>
 
       <ProjectItem url="https://thawing-beach-25991.herokuapp.com/"  text="Weather API"></ProjectItem>
       <ProjectItem url="https://dreamy-volhard-522fd9.netlify.app/ " text="Profit Calculator"></ProjectItem>
       <ProjectItem url="https://tranquil-castle-21899.herokuapp.com/"  text="Sign Up Page"></ProjectItem> */}
   </div>
   )
    
}