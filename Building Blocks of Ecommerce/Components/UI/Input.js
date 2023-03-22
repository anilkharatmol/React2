import classes from './Input.module.css';

export default function Input(props){
        return(
            <div className={classes.input}>
            <label>{props.label}</label>
            <input {...props.attributes} size="40"></input>
            </div>
        )
}

