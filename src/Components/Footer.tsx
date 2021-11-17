import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Form, Button as Btn} from 'react-bootstrap'
import { makeStyles } from '@mui/styles'
import CheckoutForm from "../Checkout/CheckoutForm"
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom';
import myTheme from "../Theme/MyTheme";
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import { FormEvent, MouseEventHandler, useState } from "react";
import axios from "axios";
import { Typography } from '@mui/material';


export default function Footer(){
    const useStyles = makeStyles({
        footer: {
            textAlign: 'center',
            padding: '0',
            margin: '0',
            width: '100vw',
        },
        modal: {
          borderRadius: "20px",
          padding: "2% 5%",
          fontSize: '12px',
          "& > .close": {
            width: '30px',
            height: '30px',
            cursor: 'pointer',
            position: 'absolute',
            display: 'block',
            padding: '2px 5px',
            lineHeight: '20p',
            right: '5px',
            top: '-5px',
            fontSize: '24px',
            background: '#ffffff',
            zIndex: myTheme.zIndex.tooltip,
          }
        }
        
    });
    const classes = useStyles();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    function onSubmit(e: FormEvent<HTMLFormElement>){
      e.preventDefault();
      axios.post('http://localhost:8080/subscribe', { email,
      firstName,
      lastName
      })
      .then((response: any) => {
          console.log(response);
      }, (error: Error) => {
          console.log(error);
      });
    
}
return(
    <div className={classes.footer} >
        <Router>
        {/* <Button style={{ color: myTheme.palette.primary.main}} component="a" href="mailto:miladul2014@gmail.com">Email me</Button> */}
        {/* <Button style={{display: 'block', color: myTheme.palette.primary.main}}><Link style={{display: 'block', color: myTheme.palette.primary.main}} to="/checkout">Buy me a coffee</Link></Button> */}
         
        <Switch>
          <Route path="/checkout">
            <CheckoutForm />
          </Route>
          <Route path="/subscribe">
          </Route>
        </Switch>
        </Router>
        <div style={{ background: myTheme.palette.primary.main, paddingBlock: '2rem', textAlign: 'center' }}>
        <Popup modal nested trigger={ <Button style={{ display: 'block', color: '#fff', marginLeft: `calc(50% - 132px)`, cursor: 'pointer'}}>Subscribe to a newsletter</Button>} position="center center">
            {(close: MouseEventHandler<HTMLButtonElement> | undefined) => (
      <div className={classes.modal}>
        <button className="close" onClick={close}>
          &times;
          </button>
          <Form method="POST" action="http://localhost:8080/subscribe">
  <Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>First name</Form.Label>
    <Form.Control type="text" placeholder="Name" name="firstName" onChange={(e) => setFirstName(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Last name</Form.Label>
    <Form.Control type="text" placeholder="Name" name="lastName" onChange={(e) => setLastName(e.target.value)}/>
  </Form.Group>
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name="email" onChange={(e) => setEmail(e.target.value)} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="I agree to receive weekly newsletter from freckled blog" />
  </Form.Group>
  <Btn variant="primary" type="submit" onClick={(e) => onSubmit} style={{backgroundColor: myTheme.palette.primary.main}} >
    Subscribe
  </Btn>
</Form>
 
    </div>
            )}
          </Popup>  
        <Typography variant="body1" color="#fff">All rights reserved, 2021 &copy;</Typography>
        <Typography variant="body1" color="#fff">made with ❤️, using React and Typescript</Typography>
        </div>
    </div>
)
}