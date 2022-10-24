import { styled } from '@mui/material/styles'
import CheckoutForm from "../Checkout/CheckoutForm"
import { Form, Button } from "react-bootstrap"
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import myTheme from "../Theme/MyTheme";
import 'reactjs-popup/dist/index.css';
import { DialogContentText, DialogTitle } from '@material-ui/core';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import React, {  useState, useEffect, memo } from "react";
import axios from "axios";
import { Typography } from '@mui/material';
import { Dialog} from '@material-ui/core';



export default function Footer(){

  const StyledModal = styled(Dialog)(({theme=myTheme}) => ({
      borderRadius: "20px",
      padding: theme.spacing(2),
      fontSize: '12px',
      width: '500px',
      height: '400px',
      backgroundColor: '#fff',
      margin: '0 auto',
      zIndex: myTheme.zIndex.modal,
  }));

  const CloseBtn = styled('button')({
    width: '30px',
    height: '30px',
    cursor: 'pointer',
    position: 'relative',
    display: 'block',
    padding: '2px 5px',
    lineHeight: '20px',
    fontSize: '24px',
    background: '#ffffff',
    border: 'none',
  });

    const Footer = styled('footer')({
      textAlign: 'center',
      padding: 0,
      margin: 0,
      width: '100vw',
  });

    const SubBtn = styled('button')(({ theme=myTheme }) => ({
    display: 'block', 
    color: theme.palette.primary.main,
    background: '#fff',
    margin: '0 auto',
    border: `2px solid ${ theme.palette.primary.main}`,
    cursor: 'pointer',
    '&:hover': {
    color: '#fff',
    background: theme.palette.primary.main,
    border: '2px solid #fff',
          }
        } ));

    const Content = styled('div')(({ theme=myTheme }) => ({ 
      background: theme.palette.primary.main,
      paddingBlock: '2rem',
      textAlign: 'center',
    }));

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {console.log('Show popup?', showPopup)}, [showPopup]);

    function onSubmit(event: React.MouseEvent<HTMLButtonElement>){
      event.preventDefault();
      setShowPopup(false);
      axios.post('https://us-central1-ludas-website.cloudfunctions.net/subscribe', 
      {
      email,
      firstName,
      lastName
      })
      .then((response: any) => {
          console.log(response);
      }, (error: Error) => {
          console.log(error);
      });  
    }


const ref = React.useRef(null);

const Popup = memo(() =>
  <StyledModal 
  aria-labelledby="alert-dialog-slide-title"
  aria-describedby="alert-dialog-slide-description"
  keepMounted 
  open={showPopup} 
    onClose={() => console.log("closed")}
    fullWidth>
         <CloseBtn onClick={() => setShowPopup(false)}> &times;</CloseBtn>
         <DialogContent>
<Form>

<Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>First name</Form.Label>
  <Form.Control type="text" placeholder="First name" onChange={(e) => setFirstName(e.target.value)}/>
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>Last name</Form.Label>
  <Form.Control type="text" placeholder="Last name" onChange={(e) => setLastName(e.target.value)}/>
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Email address</Form.Label>
  <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
  <Form.Text className="text-muted">
    We'll never share your email with anyone else.
  </Form.Text>
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicCheckbox">
  <Form.Check type="checkbox" label="Check me out" />
</Form.Group>
<DialogActions>
<Button variant="primary" type="submit" onClick={onSubmit}>
  Submit
</Button>
</DialogActions>
</Form>
</DialogContent>
</StyledModal>
);

return(
  <Router>
   <Footer>
        {/* <Button style={{ color: myTheme.palette.primary.main}} component="a" href="mailto:miladul2014@gmail.com">Email me</Button> */}
        {/* <Button style={{display: 'block', color: myTheme.palette.primary.main}}><Link style={{display: 'block', color: myTheme.palette.primary.main}} to="/checkout">Buy me a coffee</Link></Button> */}   
        <Switch>
          <Route path="/checkout">
            <CheckoutForm />
          </Route>
            <Route path="/subscribe">
            </Route>
        </Switch>
        <Content>   
     <Popup />
      <SubBtn onClick={() => setShowPopup(!showPopup)}>
            Subscribe to a newsletter
        </SubBtn>
        <Typography variant="body1" color="#fff">All rights reserved, 2021 &copy;</Typography>
        <Typography variant="body1"color="#fff">made with ❤️, using React and Typescript</Typography>
        </Content>
    </Footer>
  </Router>
)
}