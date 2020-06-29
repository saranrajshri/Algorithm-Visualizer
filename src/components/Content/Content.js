import React, { useState, useContext } from "react";

// Stylesheet
import "./Content.css";

// Context
import { Context } from "../../context/Context";

// Algorithms
import LinearSearch from "../Algorithms/Search/LinearSearch/LinearSearch";
import BinarySearch from "../Algorithms/Search/BinarySearch/BinarySearch";

// CodeString
// CPP
import {
  LinearSearchCPP,
  BinarySearchCPP,
  JumpSearchCPP,
} from "../CodeStrings/CodeStringsCPP";

import {
  LinearSearchPY,
  BinarySearchPY,
  JumpSearchPY,
} from "../CodeStrings/CodeStringsPY";

// Code Themes
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import JumpSearch from "../Algorithms/Search/JumpSearch/JumpSearch";

const Content = () => {
  const { selectedComponent } = useContext(Context);
  const [language, setLanguage] = useState("CPP");

  // Mappings
  const components = {
    LinearSearch: LinearSearch,
    BinarySearch: BinarySearch,
    JumpSearch: JumpSearch,
  };
  const codeStringsMappingCPP = {
    LinearSearch: LinearSearchCPP,
    BinarySearch: BinarySearchCPP,
    JumpSearch: JumpSearchCPP,
  };
  const codeStringsMappingPY = {
    LinearSearch: LinearSearchPY,
    BinarySearch: BinarySearchPY,
    JumpSearch: JumpSearchPY,
  };

  var Component = components[selectedComponent];
  var codeString;

  if (language === "CPP") {
    codeString = codeStringsMappingCPP[selectedComponent];
  } else {
    codeString = codeStringsMappingPY[selectedComponent];
  }

  return (
    <div className="root">
      <div className="row">
        <div className="column" id="main-content-column">
          <div className="main-content">
            <div>
              <Component />
            </div>
          </div>
        </div>
        <div className="column" id="code">
          <div className="code">
            <div>
              <span
                className="label lang-selector"
                onClick={() => setLanguage("CPP")}
              >
                <span>C++</span>
              </span>
              <span
                className="label lang-selector"
                onClick={() => setLanguage("PY")}
              >
                <span>Python</span>
              </span>
            </div>
            <SyntaxHighlighter
              language={language === "CPP" ? "cpp" : "py"}
              style={atomDark}
              customStyle={{ fontSize: 12 }}
            >
              {codeString}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Content;
