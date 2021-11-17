// set up data layer
// we this to track the basket
import React from "react";
import { createContext, useContext, useReducer } from "react";
// this is data layer
export const StateContext = createContext();

// BUILD A PROVIDER
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//this is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);
