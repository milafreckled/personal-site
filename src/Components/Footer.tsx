import { styled } from '@mui/material/styles'
import CheckoutForm from "../Checkout/CheckoutForm"

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import myTheme from "../Theme/MyTheme";
import 'reactjs-popup/dist/index.css';
import React, {  useState, useEffect, memo, SetStateAction } from "react";
import axios from "axios";
import { Typography } from '@mui/material';
import ReactDOM from 'react-dom';


export default function Footer(){

  const TrapDiv = styled('div')(({theme=myTheme}) => ({
      position: "absolute",
      top: "20%",
      maxWidth: "500px",
      borderRadius: "20px",
      padding: theme.spacing(2),
      fontSize: '12px',
      width: '100%',
      height: 'auto',
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
  };


const modalRef = React.useRef(null);
const buttonRef = React.useRef(null);

interface ModalProps {
  setFirstName?: React.Dispatch<SetStateAction<string>>;
  setLastName?: React.Dispatch<SetStateAction<string>>;
  setEmail?: React.Dispatch<SetStateAction<string>>;
  modalRef: React.RefObject<HTMLDivElement>;
  buttonRef: React.RefObject<HTMLButtonElement>;
  closeModal: () => void;
  onSubmit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
};

// const Modal = ({
//   modalRef,
//   buttonRef,
//   closeModal,
//   onSubmit
// }: ModalProps) => {
//   return (
//     <FocusTrap>
//         <TrapDiv ref={modalRef}>
//           <button
//             ref={buttonRef}
//             aria-label="Close Modal"
//             aria-labelledby="close-modal"
//             className="_modal-close"
//             onClick={closeModal}
//           >
//             <span id="close-modal" className="_hide-visual">
//               Close
//             </span>
//             <svg className="_modal-close-icon" viewBox="0 0 40 40">
//               <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
//             </svg>
//           </button>
//           <div className="modal-body">
//             <Form onSubmit={onSubmit} setFirstName={setFirstName} setLastName={setLastName} setEmail={setEmail} />
//           </div>
//         </TrapDiv>
//     </FocusTrap>);
// };

return(
  <Router>
   <Footer>
        <Switch>
          <Route path="/checkout">
            <CheckoutForm />
          </Route>
            <Route path="/subscribe">
            </Route>
        </Switch>
        <Content>   
     {/* { showPopup && <Modal closeModal={() => setShowPopup(false)} onSubmit={onSubmit} buttonRef={buttonRef} modalRef={modalRef} /> } */}
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