import { styled } from '@mui/material/styles'
import myTheme from "../Theme/MyTheme";
import 'reactjs-popup/dist/index.css';
import React, {  useState, useEffect, SetStateAction, FormEvent } from "react";
import axios from "axios";
import { Typography } from '@mui/material';
import Modal from './Modal'
import { initializeApp } from "firebase/app";
import { getFunctions, httpsCallable, connectFunctionsEmulator } from "firebase/functions"


export default function Footer(){
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const TrapDiv = styled('div')(({theme=myTheme}) => ({
      position: "fixed",
      top: "10%",
      left: "50%",
      transform: "translateX(-50%)",
      maxWidth: "500px",
      borderRadius: "20px",
      padding: theme.spacing(2),
      fontSize: '12px',
      width: '100%',
      height: 'auto',
      backgroundColor: '#fff',
      margin: '0 auto',
      zIndex: myTheme.zIndex.modal,
      overflow: 'visible',
      pointerEvents: 'all'
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
    '& > ._hide-visual':{
      visibility: 'hidden'
    }
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
    margin: '5px auto',
    border: `2px solid ${ theme.palette.primary.main}`,
    cursor: 'pointer',
    fontSize: '1.4rem',
    '&:hover': {
      color: '#fff',
      background: theme.palette.primary.main,
      border: '2px solid #fff',
    }
    }));

  const Content = styled('div')(({ theme=myTheme }) => ({ 
      background: theme.palette.primary.main,
      paddingBlock: '2rem',
      textAlign: 'center',
  }));

const Form = styled('form')(({theme=myTheme}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}));


const modalRef = React.useRef(null);
const buttonRef = React.useRef(null);

interface ModalProps {
  modalRef: React.RefObject<HTMLDivElement>;
  buttonRef: React.RefObject<HTMLButtonElement>;
  closeModal: () => void;
};

interface ModalFormProps {
  setFirstName: React.Dispatch<SetStateAction<string>>;
  setLastName: React.Dispatch<SetStateAction<string>>;
  setEmail: React.Dispatch<SetStateAction<string>>;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
}


// const ModalForm = ({
//   setFirstName,
//   setLastName,
//   setEmail,
//   onSubmit
// }: ModalFormProps) => {
// return(
//   <Form onSubmit={(e) => submitForm()}>
//     <label>First name:</label>
//     <input type="text" required onChange={(e) => setFirstName(e.target.value)} />
//     <label>Last name:</label>
//     <input type="text" onChange={(e) => setLastName(e.target.value)} />
//     <label>Email:</label>
//     <input type="text" required onChange={(e) => setEmail(e.target.value)} />
//     <SubBtn type='submit'>Submit</SubBtn>
//   </Form>
// )
// }

// const Modal = ({
//   modalRef,
//   buttonRef,
//   closeModal
// }: ModalProps) => {
//   return (
//       <TrapDiv ref={modalRef}>
//           <CloseBtn
//             ref={buttonRef}
//             aria-label="Close Modal"
//             aria-labelledby="close-modal"
//             onClick={closeModal}
//           >
//             <span id="close-modal" className="_hide-visual">
//               Close
//             </span>
//             <svg className="_modal-close-icon" viewBox="0 0 40 40">
//               <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
//             </svg>
//           </CloseBtn>
//           <div className="modal-body">
//             <ModalForm onSubmit={(e: FormEvent<HTMLFormElement>) => onSubmit(e)} setFirstName={setFirstName} setLastName={setLastName} setEmail={setEmail} />
//           </div>
//       </TrapDiv>
//     )};

return(
  <Footer>
    <Content>   
      <SubBtn onClick={() => setShowPopup(!showPopup)}>
            Subscribe to a newsletter
      </SubBtn>
      {showPopup && <Modal modalRef={modalRef} buttonRef={buttonRef} closeModal={() => setShowPopup(false)}/>}
        <Typography variant="body1" color="#fff">All rights reserved, 2021 &copy;</Typography>
        <Typography variant="body1"color="#fff">made with ❤️, using React and Typescript</Typography>
    </Content>
  </Footer>
)
}
