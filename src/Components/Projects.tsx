
import { useInView } from 'react-intersection-observer';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import { isMobile } from 'react-device-detect';
import myTheme from "../Theme/MyTheme"
import "../App.scss"
import interactiveCardImg from "../images/interactive-card.png"
import calculatorImg from "../images/profit-calculator.png"
import nutritionImg from "../images/nutrition-app.png"


//https://bjw6l.csb.app/ - calculator app
//https://nutrition-app-milafreckled.herokuapp.com/ - nutrition app
//https://dreamy-volhard-522fd9.netlify.app/ - profit calculator
//https://interactive-card-rouge.vercel.app/ - interactive card
const ProjectWrapper = styled('div')(({theme=myTheme}) => ({
  backgroundColor: '#fff', 
  paddingBlock: '40px',
  overflowY: 'hidden',
  visibility: 'hidden',
  opacity: '0',
  willChange: 'opacity, visibility',
  transition: 'all 0.2s ease-out',
  '&.is-visible':{
    opacity: 1,
    transform: 'none',
    visibility: 'visible'
  },
}))

const ProjectsContainer = styled('div')(({ theme=myTheme }) => ({
    ...theme.typography.body2,
    overflowY: 'hidden',
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '1.5vw',
    transform: 'translateY(20vh)',
    transition: 'opacity 0.2s ease-out , transform 0.6s ease-out',
    willChange: 'opacity, visibility',
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

const ProjectImage = styled('img')(({ theme=myTheme }) => ({
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
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '0px'
  });

    if (!isMobile){ 
      return(
      <ProjectWrapper className={inView ? 'is-visible' : ''}>
    <Typography sx={{ typography:  'h2', textAlign: "center", color: myTheme.palette.primary.main }} >My Projects</Typography>
        <ProjectsContainer ref={ref}>  
        <a href="https://interactive-card-rouge.vercel.app/"> <ProjectImage src={interactiveCardImg} alt="" /></a>
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
          </ProjectWrapper>
        )
    }else{
return(
  <ProjectWrapper className={inView ? 'is-visible' : ''}>
    <Typography sx={{ typography:  'h2', textAlign: "center", color:'#fff' }} >My Projects</Typography>
        <ProjectsContainer ref={ref} >  
        <a href="https://thawing-beach-25991.herokuapp.com/" > <ProjectImage src={interactiveCardImg} alt="" /></a>
          <ProjectDesc>
          <h2>INTERACTIVE CARD</h2>
          <Divider />
          <p>
            Interactive card component with form validation.<br />
            Build with React and hosted with Vercel.
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
          </ProjectWrapper>
)
    }
  
}