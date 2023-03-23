import { Button, Image,Modal } from "react-bootstrap";
import React from "react";

const Cart=(props)=>{

    const cartElements = [

        {
        
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        quantity: 2,
        
        },
        
        {
        
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        quantity: 3,
        
        },
        
        {
        
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        quantity: 1,
        
        }
        
        ]



        const element = cartElements.map((element) => (
            <div
            className="modal show"
            style={{ display: 'block', position:"initial"}}>
                 <Modal.Dialog >
                        <Modal.Title>{element.title}</Modal.Title>
                        <Image style={{border:'1px solid #ddd',borderRadius:'4px',padding: '5px',width: '150px'}} src={element.imageUrl}></Image>
                        <Modal.Body>
                            <h3>Rs {element.price}</h3>
                        <h5> Quantity:{element.quantity}</h5>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="danger">REMOVE</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                    </div>
            ));


    return(
            <React.Fragment>
                <h1 style={{textAlign:"center"}}> SHOWING CART ITEMS</h1>
                <Button variant="danger" style={{float:'right'}} onClick={props.onHide}>Close Cart X</Button>
            {element}
        </React.Fragment>
    )
}

export default Cart;