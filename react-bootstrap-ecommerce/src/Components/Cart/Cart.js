import { Button, Card, Image,Overlay} from "react-bootstrap";
import React, { useContext,useState,useRef } from "react";
import CartContext from "../../Store/CartContext";

const Cart=(props)=>{

    const [show, setShow] = useState(false);
  const target = useRef(null);
  
    const Ctx=useContext(CartContext)

        const element =( <Card style={{width:'15rem'}}>
                { Ctx.items.map((item) => (
                    <div style={{borderBottom:'1px solid #ddd',marginBottom:'1cm'}}>
                        <h3>{item.title}</h3>
                        <Image style={{border:'1px solid #ddd',borderRadius:'4px',padding: '5px',width: '150px'}} src={item.imageUrl}></Image>

                            <h4>Rs {item.price}</h4>
                        <h5> Quantity:{item.quantity}</h5>
                       
                        <Button variant="danger" style={{float:'right'}} onClick={()=>{Ctx.removeItem(item)}}>REMOVE</Button>
                        </div>
                ))}
                    </Card>)


            

         return(   <React.Fragment >
                <h1 style={{textAlign:"center"}}> SHOWING CART ITEMS</h1>
                <Button variant="danger" style={{float:'right'}} onClick={props.onHide}>Close Cart X</Button>
            <Button variant="success"  style={{float:'right'}}  ref={target} onClick={() => setShow(!show)} >
        Open Cart
      </Button>
      <Overlay target={target.current} show={show}placement="left">
          <div
            style={{
              margin:'5rem 0',
              marginBottom:'2cm',
                position: "fixed",
                top:'2cm',
                left: '5%',
                width: '30%',
                backgroundColor: 'white',
                padding: '1rem',
                borderRadius: '5px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
                Zindex: '10',
                Animation: 'slide-down 300ms ease-out forwards'
            }}
          >
            {element}
          </div>
      </Overlay>
        </React.Fragment>
         )

      
      }


export default Cart;