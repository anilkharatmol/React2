import classes from './AddExpenseForm.module.css' ;
import { useState,useCallback,useEffect } from 'react';

export default function AddExpenseForm(){
    
    const[expenses,setExpenses]=useState([]);

    
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
    
   async function OnAdd(event){
        event.preventDefault();
        const obj={
            description:eneteredDescription,
            price: enteredAmount,
            category:event.target.category.value,
        }
        console.log(obj);
        
        setExpenses((prevExpenses)=>{
            return [...prevExpenses,obj];
          })

          const response=await fetch('https://expense-tracker-8d365-default-rtdb.firebaseio.com/expenses.json',{
            method:'POST',
            body:JSON.stringify(obj),
            headers:{
              'Content-type':'application/json'
            }
          })
          const data=await response.json();
            console.log(data);
    }

    const expense=expenses.map(exp=>(
        <li className={classes.expense}>
            <div>         
              <h3>{exp.category}</h3>
        <div className={classes.description}>{exp.description}</div>
          </div>
        <div className={classes.price}>Rs {exp.price}</div>
    </li>
    ))

    
    
    const fetchExpensesHandler=useCallback(async ()=>{
          const response=await  fetch('https://expense-tracker-8d365-default-rtdb.firebaseio.com/expenses.json');
          
          const data= await response.json();
          
          const fetchedExpenses=[];
          
          for(const key in data){
              fetchedExpenses.push({
                  id:key,
                  description:data[key].description,
                  price:data[key].price,
                  category:data[key].category
                })
            }

            setExpenses(fetchedExpenses);
            
        },[])
        
        useEffect(()=>{fetchExpensesHandler()},[fetchExpensesHandler])

    

    return(
        <div>
           <h1 style={{fontFamily:'cursive',textAlign:'center'}}>Enter the details to add expense</h1>
            <div className={classes.form}>
        <form onSubmit={OnAdd} >
            <div className={classes.control}>
        <label htmlFor="Money">Money Spent:</label><br></br>
        <input type="number" id="money" onChange={amountHandler}/><br></br>
        <label htmlFor="description">Description:</label><br></br>
        <input type="text" id="description" onChange={descriptionHandler}/>
        </div>
        <h3>Select Category:</h3>
        <select name="category" id="category" className={classes.options}>
            <option value="movie">Movie</option>
            <option value="gym">Gym</option>
            <option value="mobilerecharge">Mobile Recharge</option>
            <option value="rent">Rent</option>
            <option value="Gas">Gas</option>
            <option value="electricitybill">Electricity Bill</option>
        </select>
        <div className={classes.actions}>
        <button>Add Expense</button>
        </div>
        </form>
        </div>
        <h1>Added Expenses</h1>
        {expense}
        </div>
    )
}