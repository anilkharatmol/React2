import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../AuthContext";
import AddExpenseForm from "../Expenses/AddExpenseForm";


export default function HomePage(){
    
    const authcxt=useContext(AuthContext)

    function verifyEmailHandler(){


        fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBwXOwAnBdsjBSzz1ZdEKkrlHZWgkiUiC8',{
            method:'POST',
            body:JSON.stringify({
                idToken:authcxt.token,
                requestType:'VERIFY_EMAIL'
            }),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(res=>{
                return res.json()
        }
            ).then(data=>{console.log(data);}).catch(err=>{console.log(err);})
    }


    return(
        <div>
            <h2 style={{fontFamily:'cursive',textAlign:'left'}}> Welcome to Expense Tracker!!!</h2>  <br></br>
             <button  onClick={verifyEmailHandler} style={{backgroundColor:'green',fontSize:'20px',cursor:'pointer',color:'white'}}>Verify E-mail</button>
             <h4 style={{textAlign:'right'}}>Your profile is incomplete.<NavLink to='/updateprofile'>Complete Now</NavLink></h4>
            <button style={{backgroundColor:'red',fontSize:'25px',float:'right',cursor:'pointer',fontFamily:'fantasy'}} onClick={()=>{authcxt.logout()}}>logout</button>
            <hr/>
            <AddExpenseForm/>
        </div>
    )
}