import React, { useState, createContext } from "react";

export const Context = createContext();

const ContextProvider = (props) => {
  const [selectedComponent, setSelectedComponent] = useState("LinearSearch");

  return (
    <Context.Provider value={{ selectedComponent, setSelectedComponent }}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
