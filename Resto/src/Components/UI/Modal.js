import React from 'react';
import  ReactDOM  from 'react-dom';
import classes from './Modal.module.css';

const BackDrop=()=>{
    return(
    <div className={classes.backdrop}></div>
)
}

const ModalOverlay=(props)=>{
    return(
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )

}

const portal=document.getElementById('overlays');

export default function Modal(props){

    return(
        <React.Fragment>
           {ReactDOM.createPortal(<BackDrop/>,portal)}
           {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portal)}
        </React.Fragment>
    )
}