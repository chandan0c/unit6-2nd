import React from "react";
import { useState } from "react";

const Product = (props) => {
  let product=props.product;
  const [count,setCount]=useState(1)

  const AddTocart=async()=>{
   let data= await fetch(" http://localhost:8080/cartItems",{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
   })
   if(data.status===201){
    console.log("count")
    setCount(1)
   }
  }

  const RemoveFromCart=async(id)=>{
    let data= await fetch(`http://localhost:8080/cartItems/${id}`,{
    method: 'DELETE',
   })
   console.log(data)
    if(data.status===200){
      setCount(0)
    }   
  

  }

  const hanldeIncrement=(id)=>{
    fetch(`http://localhost:8080/cartItems?id=${id}`).then(res=>res.json()).then(res=>{
      if(res.length>0){
        setCount(count+1)
      }
    })
  }
  const hanldeDeccrement=(id)=>{
    fetch(`http://localhost:8080/cartItems?id=${id}`).then(res=>res.json()).then(res=>{
      if(res.length>0){
        setCount(count-1)
      }
    })
   
  }
  // Note: this id should come from api
  // const product = { id: 1 };
  return (
    <div style={{width:"200px"}} data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name">{product.name}</h3>
      <h6 data-cy="product-description">{product.description}</h6>
      <button data-cy="product-add-item-to-cart-button" onClick={()=>AddTocart(product)}>Add to cart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button" onClick={()=>hanldeIncrement(product.id)}>+</button>
        <span data-cy="product-count">
          {
            count
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button" onClick={()=>hanldeDeccrement(product.id)}>-</button>
        <button data-cy="product-remove-cart-item-button"onClick={()=>RemoveFromCart(product.id)}>remove Button</button>
      </div>
    </div>
  );
};

export default Product;
