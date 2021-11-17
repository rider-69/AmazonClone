import React from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { auth } from "./firebase";
  
function Login() {
  const history = useHistory() ;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault(); //do the login stuff

    //logic
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
       
        //logged in, redirect to homepage
         history.push("/")
      })
      .catch((e) => alert(e.message));
  };

  const register = (event) => {
    
      event.preventDefault(); //this stops the refresh
      //do the register work
      auth
      .createUserWithEmailAndPassword(email,password)
      .then((auth)=>{

        //create a user and logged in and redirect to the homepage
        history.push("/")  ;

      })
     .catch((e) => alert(e.message))
  }
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG24.png"
          alt=""
        />
      </Link>
      <div className="login__cotainer">
        <h1>Sign in</h1>
        <form action="">
          <h5>E-mail</h5>
          <input
            value={email}
            onClick={(event) => setEmail(event.target.value)}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          />
          <h5>Password</h5>
          <input
            value={password}
            onClick={(event) => setPassword(event.target.value)}
           onChange={(event)=> setPassword(event.target.value)}
               type="password"
               
          />

          <button onClick={login} type="submit" className="login__signInButton">
            Sign In
          </button>
          <p>
            By signing-in you agree to Amazon's Conditions of Use and
            Sales.Please see our Privacy policy and Notice, our Cookies and our
            interest-Based Ads Notices.
          </p>
          <button onClick={register} className="login__registerButton">
            Create your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
