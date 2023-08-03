import React, { FormEvent, useRef, useState } from 'react'
import styled from '@mui/styled-engine';
import myTheme from '../Theme/MyTheme';
import Modal from './Modal';
import axios from 'axios';

function Container() {
    const [isShown, setIsShown] = useState(false);
    const triggerButton = useRef<HTMLButtonElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const showModal = () => {
        setIsShown(true);
        if (buttonRef.current){
            buttonRef.current.focus()
        };
        toggleScrollLock();
    };
    const closeModal = () => {
        setIsShown(false);
        if (triggerButton.current){
            triggerButton?.current.focus();
        }
        toggleScrollLock();
    };
    const toggleScrollLock = () => {
        document.querySelector('html')?.classList.toggle('scroll-lock');
    };
    const onClickOutside = (e: React.MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)){
            closeModal();
        }
    };
    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter'){
            closeModal();
        }
    };
    const onSubmit = (event: FormEvent<Element>, email: any, firstName: any, lastName: any) => {
        event.preventDefault();
        setIsShown(false);
        axios.post('https://us-central1-ludas-website.cloudfunctions.net/subscribe', {
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
    const TriggerButton = styled('button')(({theme=myTheme}) => ({
        display: 'block', 
        color: myTheme.palette.primary.main,
        background: '#fff',
        margin: '0 auto',
        border: `2px solid ${ myTheme.palette.primary.main}`,
        cursor: 'pointer',
        '&:hover': {
        color: '#fff',
        background: myTheme.palette.primary.main,
        border: '2px solid #fff',
        }
    }));

  return (
    <>
    <TriggerButton
      className="btn btn-lg btn-danger center modal-button"
      ref={buttonRef}
      onClick={() => showModal()}
    >
     Subscribe to newsletter
    </TriggerButton>
    { isShown ? 
    <Modal 
    modalRef={modalRef} buttonRef={buttonRef} onClickOutside={onClickOutside}
    onKeyDown={onKeyDown}
    closeModal={closeModal}
     ></Modal>
    : null}
    </>
  )
}

Container.propTypes = {}

export default Container
