import React, { useContext } from "react";

// Stylesheet
import "./Content.css";

// Context
import { Context } from "../../context/Context";

// Algorithms
import LinearSearch from "../Algorithms/Search/LinearSearch/LinearSearch";
import BinarySearch from "../Algorithms/Search/BinarySearch/BinarySearch";

// CodeString
import {
  LinearSearchCode,
  BinarySearchCode,
  JumpSearchCode,
} from "../CodeStrings/CodeStrings";

// Code Themes
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import JumpSearch from "../Algorithms/Search/JumpSearch/JumpSearch";

const Content = () => {
  const { selectedComponent } = useContext(Context);

  // Mappings
  const components = {
    LinearSearch: LinearSearch,
    BinarySearch: BinarySearch,
    JumpSearch: JumpSearch,
  };
  const codeStringsMapping = {
    LinearSearch: LinearSearchCode,
    BinarySearch: BinarySearchCode,
    JumpSearch: JumpSearchCode,
  };
  var Component = components[selectedComponent];
  var codeString = codeStringsMapping[selectedComponent];

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
            <div className="label">
              <span>Code</span>
            </div>
            <SyntaxHighlighter
              language="cpp"
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
