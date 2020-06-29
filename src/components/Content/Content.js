import React, { useContext } from "react";

// Stylesheet
import "./Content.css";

// Context
import { Context } from "../../context/Context";

// Algorithms
import LinearSearch from "../Algorithms/Search/LinearSearch/LinearSearch";
import BinarySearch from "../Algorithms/Search/BinarySearch/BinarySearch";

// CodeString
import { LinearSearchCode } from "../CodeStrings/CodeStrings";

// Code Themes
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Content = () => {
  const { selectedComponent } = useContext(Context);
  const components = {
    LinearSearch: LinearSearch,
    BinarySearch: BinarySearch,
  };
  const codeStringsMapping = {
    LinearSearch: LinearSearchCode,
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
