import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import { auth } from "./firebase";

function App() {
  const [{ user}, dispatch] = useStateValue();
  //use Effect << <<<<    POWERFUL
  //piece of code which runs on a given conditions

  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //use is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    }); 
         console.log("User is >>>>>>>>>" , user)
    return () => {
      //any cleaup operation go in here...
      unsubscribed();
    };
  }, []);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Header />
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
