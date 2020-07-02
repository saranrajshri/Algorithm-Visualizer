import React, { useState, createContext } from "react";

export const Context = createContext();

const ContextProvider = (props) => {
  const [selectedComponent, setSelectedComponent] = useState("InsertionSort");
  const [speed, setSpeed] = useState(1);

  return (
    <Context.Provider
      value={{ selectedComponent, setSelectedComponent, speed, setSpeed }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
