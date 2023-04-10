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

        fetch('https://crudcrud.com/api/26c6a22935e349eebea672702aafbaac/NewlyAddedCandies',{
            method:'POST',
            body:JSON.stringify({obj}),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(res=>{res.json().then(data=>{console.log(data);})})
    }


    return(
        <form onSubmit={onAdd}  > 
            <div  id={props.id} className="new-candie__controls">
            <div className="new-candie__control">
            <label >Medicine Name:</label>
            <input type='text' onChange={nameHandler}></input>
            </div>
            <div className="new-candie__control">
            <label>Description:</label>
            <input type='text' onChange={descriptionHandler}></input>
            </div>
            <div className="new-candie__control">
            <label >Price:</label>
            <input type='number'  onChange={amountHandler}></input>
            </div>
            <button className="new-candie__actions"   type="submit" >Add Item</button>
            </div>
            <hr></hr>
        </form>
    )
}