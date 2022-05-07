import React from 'react';
import Navigation from './Components/Navigation';
import Portrait  from './Components/Portrait'
import "./App.scss"
import myTheme from './Theme/MyTheme'
import { ThemeProvider } from '@mui/material/styles';
import  Projects  from "./Components/Projects"
import Timeline from "./Components/Timeline"
import Footer from "./Components/Footer"

function App() {
  return (
 <ThemeProvider theme={myTheme}>
     <Navigation></Navigation>
    <Portrait />
   <Projects></Projects>
   <Timeline></Timeline>
   <Footer></Footer>
    </ThemeProvider>
  );
}

export default App;
