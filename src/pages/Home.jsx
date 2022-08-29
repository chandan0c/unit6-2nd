import React, { useState } from "react";
import { useEffect } from "react";
import Product from "../components/Product";

const Home = () => {
  const [Data,setData]=useState([])
  useEffect(()=>{
    fetch(" http://localhost:8080/products").then(res=>res.json()).then(res=>{
      setData(res)
    })
  },[])
  return <div style={{display:"flex"}}>
    {Data.map(e=>{
      return <Product product={e}/>
    })}
  </div>;
};

export default Home;
