import * as React from 'react';
import "../App.scss"
import { styled } from '@mui/material/styles'
import myTheme from '../Theme/MyTheme'
import { useInView } from 'react-intersection-observer'

const ProjectLink = styled('a')(({theme = myTheme}) => ({
    margin: '.5vw 2.5vw',
    padding: '.2em',
    position: 'relative',
    borderRadius: '.1em',
    color: myTheme.palette.primary.main,
    backgroundColor: '#fff', 
    letterSpacing: '.3rem',
    textTransform: 'uppercase',
    textAlign: 'center',
    perspective: '500px',
    transformStyle: 'preserve-3d',
    display: 'block',
    minWidth: '45vw',
    '&:hover':{
      boxShadow: `2px 2px 10px ${myTheme.palette.text.disabled}`,
      transform: 'translateZ(10%)',
      letterSpacing: '2.5',
    },
    transform: 'translateY(20vh)',
    visibility: 'hidden',
    transition: 'opacity 0.2s ease-out , transform 0.6s ease-out',
    willChange: 'opacity, visibility',
    '&.is-visible':{
      opacity: 1,
      transform: 'none',
      visibility: 'visible',
      display: 'flex'
    },
    [myTheme.breakpoints.down('sm')]:{
      margin: '1vw 2.5vw',
    }
  }))
    


interface ProjectItemProps {
    text: string, 
    url: string, 
 }

export default function ProjectItem(props: ProjectItemProps){
  const { ref, inView } = useInView({
    threshold: 0,
    trackVisibility: true,
    delay: 100
  });
    return(
      <ProjectLink ref={ref} className={inView ? 'is-visible' : ''} href={props.url}>{props.text}</ProjectLink>
    )
}