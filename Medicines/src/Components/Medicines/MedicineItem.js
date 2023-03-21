import classes from'./MedicineItem.module.css';
import MedicineItemForm from './MedicineItemForm';

export default function MedicineItem(props){
    return(
        <li className={classes.meal}>
            <div key={props.id}>  
                <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>Rs {props.price}</div>
            </div>
            <MedicineItemForm  id={props.id} item={props}/>
        </li>
    )
}