import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card,Button } from "react-bootstrap";
import Product from './Product.module.css';
import { useDispatch,useSelector } from "react-redux";
import { add } from "./Store/CartSlice";
import { gettingProducts } from "./Store/ProductSlice";
const Products = () => {
  const dispatch=useDispatch()
  const {data:getProducts}=useSelector(state=>state.Products)
  //  States that hold data

  // const [getProducts, setGetProducts] = useState([]);
  // Getting Products

  useEffect(() => {
    // const FetchingData = async () => {
    //   const GettingProducts = await axios.get(
    //     "https://fakestoreapi.com/products"
    //   );
    //   console.log("=== Products response ===", GettingProducts);
    //   // setGetProducts(GettingProducts.data);
    // };
    // console.warn(" == State Data ===", getProducts);

    // FetchingData();
    dispatch(gettingProducts())
  }, []);

  // Dispatch function
  const addToCart=(curElmt)=>{
    dispatch(add(curElmt))
  }
  const Cards = getProducts.map((curElmt) => {
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
            <Button variant="primary" onClick={()=>addToCart(curElmt)}>Add to Cart</Button>
           </div>
          </Card.Footer>
        </Card>
      </div>
    );
  });
  return (
    <div>
      <h1 className="text-center mt-5">Products Dashbord</h1>
      <div className="row">
        {Cards}
      </div>
    </div>
  );
};

export default Products;
