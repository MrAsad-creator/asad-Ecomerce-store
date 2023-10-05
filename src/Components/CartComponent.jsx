import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Card,Button } from "react-bootstrap";
import { remove } from './Store/CartSlice';
const CartComponent = () => {
const dispatch=useDispatch();
  //  Getting Products form Store
const selectedProducts=useSelector(state=>state.card)
//  Remove Cart
const removeToCart=(id)=>{
dispatch(remove(id))
}
console.log('Store Item',selectedProducts)
  //  Cards
 


  return (
   <>
        <h1 className='text-center'>Carts</h1>
      <div className='row'>
       {selectedProducts.length>0 && selectedProducts.map((curElmt) => {
          const {description,image,price,title,id}=curElmt;
          return (
             <div className="col-md-3 card_Item" key={id}>
            <Card style={{ width: "20rem" }}>
            <div className="text-center">
          <Card.Img variant="top" src={image} style={{width:'100px',height:'130px'}}/>
          </div>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
             {description.slice(0,60,)}...
            </Card.Text>
            <Card.Text className="text-center" >
             { `$ ${price}`}
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{background:'white'}}>
            <div className="text-center">
            <Button variant="danger" onClick={()=>removeToCart(id)}>Remove Item</Button>
           </div>
          </Card.Footer>
        </Card>
      </div>
    );
  })}
      </div>
      </>
  )
}

export default CartComponent;
