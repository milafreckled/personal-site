
import React, { RefObject, useEffect } from 'react'
import { styled } from '@mui/material/styles'
import myTheme from '../Theme/MyTheme';
import Form from './Form';

interface IModalProps{
    buttonRef: RefObject<HTMLButtonElement>;
    modalRef: RefObject<HTMLDivElement>;
    onClickOutside?: (e: React.MouseEvent) => void;
    onKeyDown?: (e: React.KeyboardEvent) => void;
    closeModal: () => void;
}
function Modal({ onClickOutside, onKeyDown, closeModal, buttonRef, modalRef }: IModalProps) {
    const ModalArea = styled('div')(({theme=myTheme}) => ({
        position: 'fixed',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '30vw',
        padding: '2.5em 1.5em 1.5em 1.5em',
        background: '#f6f6f7',
        borderRadius: '1em',
        boxShadow: '0 0 10px 3px rgba(0, 0, 0, 0.1)',
        overflowY: 'auto',
        zIndex: myTheme.zIndex.modal,
        '-webkit-overflow-srolling': 'touch',
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            left: '50%',
            top: '50%',
            height: 'auto',
            transform: 'translate(-50%, -50%)',
            maxWidth: '30em',
            maxHeight: 'calc(100% - 1em)'
        }
    }));

    const ModalCover = styled('aside')(({theme=myTheme}) => ({
        position: 'relative',
        top: '0',
        left: '0',
        margin: '0 auto',
        width: '30vw',
        height: '100%',
        backgrounColor: 'rgba(0, 0, 0, 0.8)',
        zIndex: theme.zIndex.drawer,
        transform: 'translateZ(0)',

    }))
    const ModalBody = styled('div')(({theme=myTheme}) => ({
        paddingTop: '0.25em',
    }));
    const CloseButton = styled('button')(({theme=myTheme}) => ({
        position: 'absolute',
        right: '0',
        top: '0',
        padding: '0.5em 0.5em 0 0',
        lineHeight: '1',
        background: '#f6f6f7',
        border: '0',
        boxShadow: '0',
        cursor: 'pointer',
        ' ._hide-visual':{
            border: '0 !important',
            clip: 'rect(0 0 0 0) !important',
            height: '1px !important',
            margin: '-1px !important',
            overflow: 'hidden !important',
            padding: '0 !important',
            position: 'absolute !important',
            width: '1px !important',
            whiteSpace: 'nowrap !important'
        },
        ' ._modal-close-icon':{
            width: '25px',
            height: '25px',
            fill: 'transparent',
            strokeLineCap: 'round'
        }
    }));

useEffect(() => {
    function clickOutsideHandler(e: any){
        if (onClickOutside){
            onClickOutside(e);
        }
    }
    document.addEventListener(('click'), clickOutsideHandler);
    return () => document.removeEventListener('click', clickOutsideHandler);
}, []);


  return (
    <ModalArea ref={modalRef}>
        <ModalCover
        role="dialog"
        tabIndex={-1}
        aria-modal="true"
        className="modal-cover"
        onClick={onClickOutside}
        onKeyDown={onKeyDown}
      >
    <ModalBody>
    <CloseButton
            ref={buttonRef}
            aria-label="Close Modal"
            aria-labelledby="close-modal"
            className="_modal-close"
            onClick={closeModal}
          >
            <span id="close-modal" className="_hide-visual">
              Close
            </span>
            <svg className="_modal-close-icon" viewBox="0 0 40 40">
              <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </svg>
    </CloseButton>
        <Form />
    </ModalBody>
    </ModalCover>
    </ModalArea>
  )
}


export default Modal
