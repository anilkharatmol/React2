import { useState } from "react";
import "./AddItemForm.css";


export default function AddItemForm(props){

    const[enteredName,setEneteredName]=useState('');

    function nameHandler(event){
        event.preventDefault();
        setEneteredName(event.target.value);
    }
    
    const[enteredAmount,setenteredAmount]=useState('');
    function amountHandler(event){
        event.preventDefault();
        setenteredAmount(event.target.value);
    }
    
    const[eneteredDescription,setEneteredDescription]=useState('');
    function descriptionHandler(event){
        event.preventDefault();
        setEneteredDescription(event.target.value);
    }
    
    function onAdd(event){
        event.preventDefault();
        const obj={
            name:enteredName,
            description:eneteredDescription,
            price: +enteredAmount,
        }
        props.onClick(obj);
        setEneteredName('');
        setenteredAmount('');
        setEneteredDescription('');
    }


    return(
        <form onSubmit={onAdd}  > 
            <div  id={props.id} className="new-medicine__controls">
            <div className="new-medicine__control">
            <label >Medicine Name:</label>
            <input type='text' onChange={nameHandler}></input>
            </div>
            <div className="new-medicine__control">
            <label>Description:</label>
            <input type='text' onChange={descriptionHandler}></input>
            </div>
            <div className="new-medicine__control">
            <label >Price:</label>
            <input type='number'  onChange={amountHandler}></input>
            </div>
            </div>
            <button className="new-medicine__actions"   type="submit" >Add Item</button>
            <hr></hr>
        </form>
    )
}