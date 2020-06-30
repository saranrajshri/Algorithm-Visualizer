import React from "react";


// Stylesheet
import "./App.css";

// Components
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";

// Context
import Context from "./context/Context";

const App = () => {
  return (
    <div>
      <Context>
        <div>
          <Header />
          <Content />
        </div>
      </Context>
    </div>
  );
};
export default App;
