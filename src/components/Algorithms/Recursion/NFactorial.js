import React, { useState, useEffect, useContext } from "react";

// import "./LinearSearch.css";

// Fontawesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faSyncAlt } from "@fortawesome/free-solid-svg-icons";

// Context
import { Context } from "../../../context/Context";

const NFactorial = () => {
  const [array, setArray] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [messages, setMessages] = useState([]);
  const { speed } = useContext(Context);

  const generateArray = () => {
    setCurrentIndex(-1);
    setMessages([]);

    var tempArray = [];
    for (var i = 0; i < 15; i++) {
      tempArray.push(0);
    }
    setArray(tempArray);
  };

  // Component Did Mount
  useEffect(() => {
    generateArray();
  }, []);

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  // linear Search
  const nthFactorial = async () => {
    var n = array.length;
    var res = 1;
    var tempArray = array;
    tempArray[0] = res;
    setCurrentIndex(0);
    await sleep(1000);
    setMessages((messages) => [...messages, `Set value ${res} at index ${0}`]);

    setArray(tempArray);
    for (var i = 2; i <= n; i++) {
      res *= i;

      setCurrentIndex(i - 1);
      setMessages((messages) => [
        ...messages,
        `Set value ${res} at index ${i - 1}`,
      ]);
      await sleep(1000);

      var tempArray = array;
      tempArray[i - 1] = res;
      setArray(tempArray);
    }
  };

  return (
    <div>
      <div className="settings">
        <div className="content">
          <div className="left-content">
            <span
              className="font-weight-bold cursor-pointer menu-item"
              onClick={() => nthFactorial()}
            >
              <FontAwesomeIcon icon={faPlay} /> Play
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mainContent">
        <div className="node-wrapper">
          {array.map((value, index) => {
            return (
              <div
                key={index}
                className={index === currentIndex ? "node currentNode" : "node"}
              >
                {value}
              </div>
            );
          })}
        </div>
        {/* Log Tracer */}
        <div className="log-tracer">
          <div className="label">Log Tracer</div>
          <div className="content">
            {messages.map((message) => {
              return <p>{message}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFactorial;
