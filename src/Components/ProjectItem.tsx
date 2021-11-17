import * as React from 'react';
import Paper from '@mui/material/Paper';
import "../App.scss"
import { makeStyles } from '@mui/styles'
import myTheme from '../Theme/MyTheme'

const useStyles=makeStyles({
  projectItem: {
    margin: '.5vw 2.5vw',
    padding: '.2em',
    position: 'relative',
    borderRadius: '.1em',
    color: myTheme.palette.primary.main,
    backgroundColor: '#fff', 
    letterSpacing: '.3rem',
    transition: 'all .4s ease-in-out',
    textTransform: 'uppercase',
    textAlign: 'center',
    perspective: '500px',
    transformStyle: 'preserve-3d',
    display: 'block',
    minWidth: '45vw',
    '& :hover':{
      boxShadow: `2px 2px 10px ${myTheme.palette.text.disabled}`,
      transform: 'translateZ(2rem)',
      letterSpacing: '2.5',
    },
    [myTheme.breakpoints.down('sm')]:{
      margin: '1vw 2.5vw',
    }
  },

})
interface ProjectItemProps {
    text: string, 
    url: string, 
 }

export default function ProjectItem(props: ProjectItemProps){
    const classes = useStyles()
    return(
      <a className={classes.projectItem} href={props.url}>{props.text}</a>

    )
}