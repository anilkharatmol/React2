import axios from 'axios';
import classes from './AddExpenseForm.module.css' ;
import { useState,useCallback,useEffect, useRef } from 'react';

export default function AddExpenseForm(){
    
    const[expenses,setExpenses]=useState([]);

    const amountRef=useRef('');
    
    const descriptionRef=useRef('');
    
    const categoryRef=useRef('');

    const firebaseUrl='https://expense-tracker-8d365-default-rtdb.firebaseio.com/expenses';

    
   async function OnAdd(event){
        event.preventDefault();
        const obj={
            description:descriptionRef.current.value,
            price: amountRef.current.value,
            category:categoryRef.current.value,
        }
        console.log(obj);
        
        setExpenses((prevExpenses)=>{
            return [...prevExpenses,obj];
          })

          const res = await axios.post(`${firebaseUrl}.json`, obj);
    
          console.log(res)

    }

  async  function deleteExpenseHandler(id){
           await  axios.delete(`${firebaseUrl}/${id}.json`)
            console.log("Expense successfuly deleted");

            setExpenses((prevExpItems) => prevExpItems.filter((expItem) => expItem.id !== id))
    }

   async function editExpenseHandler(id,category,description,price){

    await  axios.delete(`${firebaseUrl}/${id}.json`);
    
    categoryRef.current.value=category;
   descriptionRef.current.value=description;
   amountRef.current.value=price;

    }

 
  

    
    
    const fetchExpensesHandler=useCallback(async ()=>{
          const response=await  fetch(`${firebaseUrl}.json`);
          
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
        
        useEffect(()=>{fetchExpensesHandler()},[fetchExpensesHandler]);


        const expense=expenses.map(exp=>(
            <li key={exp.id} className={classes.expense}>
                <div>         
                  <h3>{exp.category}</h3>
            <div className={classes.description}>{exp.description}</div>
              </div>
            <div className={classes.price}>Rs {exp.price}
            <button onClick={()=>{deleteExpenseHandler(exp.id)}} className={classes.expense_delete}>Delete</button>
            <button onClick={()=>{editExpenseHandler(exp.id,exp.category,exp.description,exp.price)}} className={classes.expense_edit}>Edit</button>
            </div>
        </li>
        ))

    

    return(
        <div>
           <h1 style={{fontFamily:'cursive',textAlign:'center'}}>Enter the details to add expense</h1>
            <div className={classes.form}>
        <form onSubmit={OnAdd} >
            <div className={classes.control}>
        <label htmlFor="Money">Money Spent:</label><br></br>
        <input type="number" id="money" ref={amountRef} /><br></br>
        <label htmlFor="description">Description:</label><br></br>
        <input type="text" id="description"ref={descriptionRef}/>
        </div>
        <h3>Select Category:</h3>
        <select name="category" id="category" ref={categoryRef} className={classes.options}>
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