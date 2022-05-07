import * as React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import { isMobile } from 'react-device-detect';
import myTheme from "../Theme/MyTheme"
import "../App.scss"
import weatherApiImg from "../images/weather-api.jpeg"
import calculatorImg from "../images/profit-calculator.png"
import nutritionImg from "../images/nutrition-app.png"


//https://bjw6l.csb.app/ = calculator app
//https://nutrition-app-milafreckled.herokuapp.com/ - nutrition app
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
          <a href="https://dreamy-volhard-522fd9.netlify.app/"> <ProjectImage src={calculatorImg} alt="" /></a>
          </ProjectsContainer>
          <ProjectsContainer>
          <a href="https://hackers-stories.web.app/"> <ProjectImage src={nutritionImg} alt="" /></a>
          <ProjectDesc>
      
            <h2>NUTRITION APP</h2>  
            <Divider />
          <p>
          App where you can search for receipes, check ingredients, calories and nutritional characteristics simultaneously.<br />
            Technologies used: React, Typescript, used Edamam Nutrition Analysis API.<br />
            Hosted with heroku.
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
            Hosted with netlify.
          </p>
         
          </ProjectDesc>
          </ProjectsContainer>
          <ProjectsContainer>
          <a href="https://hackers-stories.web.app/"> <ProjectImage src={nutritionImg} alt="" /></a>
          <ProjectDesc>
      
            <h2>NUTRITION APP</h2>  
            <Divider />
          <p>
    
            App where you can search for receipes, check ingredients, calories and nutritional characteristics simultaneously.<br />
            Technologies used: React, Typescript, used Edamam Nutrition Analysis API.<br />
            Hosted with heroku.
          </p>
          </ProjectDesc>
          </ProjectsContainer>
          </div>
)
    }
  
}