import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../AuthContext";


export default function HomePage(){
    
    const authcxt=useContext(AuthContext)
    return(
        <div>
            <h2 style={{fontFamily:'cursive',textAlign:'left'}}> Welcome to Expense Tracker!!!</h2>  
             <h4 style={{textAlign:'right'}}>Your profile is incomplete.<NavLink to='/updateprofile'>Complete Now</NavLink></h4>
            <button style={{backgroundColor:'red',fontSize:'25px',float:'right',cursor:'pointer',fontFamily:'fantasy'}} onClick={()=>{authcxt.logout()}}>logout</button>
            <hr/>
        </div>
    )
}