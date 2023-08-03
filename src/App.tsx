import React from 'react';
import Navigation from './Components/Navigation';
import Portrait  from './Components/Portrait'
import "./App.scss"
import myTheme from './Theme/MyTheme'
import { ThemeProvider } from '@mui/material/styles';
import  Projects  from "./Components/Projects"
import Timeline from "./Components/Timeline"
import Footer from "./Components/Footer"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CheckoutForm from './Checkout/CheckoutForm';

function App() {
  return (
  <ThemeProvider theme={myTheme}>
    <Router>
          <Switch>
            <Route path="/checkout">
              <CheckoutForm />
            </Route>
              <Route path="/subscribe">
              </Route>
          </Switch>
      <Navigation />
      <Portrait />
      <Projects />
      <Timeline />
      <Footer />
      </Router>
  </ThemeProvider>
  );
}

export default App;
