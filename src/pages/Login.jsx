import React from "react";
import { useNavigate } from "react-router-dom";



const Login = () => {
  let navigate = useNavigate();
  const HandleLogin=()=>{
    navigate(`/`)
  }
  return (
    <div>
      <input data-cy="login-email" />
      <input data-cy="login-password" />
      <button data-cy="login-submit" onClick={()=>HandleLogin()}>Login</button>
    </div>
  );
};

export default Login;
