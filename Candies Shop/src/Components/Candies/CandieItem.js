import classes from'./CandieItem.module.css';
import CandieItemForm from './CandieItemForm';

export default function CandieItem(props){
    return(
        <li className={classes.candie}>
            <div key={props.id}>  
                <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>Rs {props.price}</div>
            </div>
            <CandieItemForm  id={props.id} item={props}/>
        </li>
    )
}