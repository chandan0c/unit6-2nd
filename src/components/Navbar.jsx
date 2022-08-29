import React from "react";
import { useState } from "react";
import { useEffect } from "react";
// use react-router Link or NavLink
// const Link = <a />;
import { Link } from "react-router-dom";

const Navbar = () => {
  const [count,setCount]=useState(0)
  useEffect(()=>{
   fetch(" http://localhost:8080/cartItems").then(res=>res.json()).then(res=>{
    setCount(res.length)
   })

  },[])

  return (
    <div data-cy="navbar">
      <Link to="/login" style={{margin:"20px"}}>Home</Link>
      <span data-cy="navbar-cart-items-count" style={{margin:"20px"}}> Total item in cart :{count}</span>
      <button data-cy="navbar-login-logout-button" style={{margin:"20px"}}>Login</button>
    </div>
  );
};

export default Navbar;
