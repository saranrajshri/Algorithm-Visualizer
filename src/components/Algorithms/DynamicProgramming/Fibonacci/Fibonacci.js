import React, { useState, useEffect } from "react";

// Stylesheet
import "./Fibonacci.css";

// Fontawesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faSyncAlt } from "@fortawesome/free-solid-svg-icons";

const Fibonacci = () => {
  const [array, setArray] = useState([]);
  const [firstIndex, setFirstIndex] = useState(-1);
  const [secondIndex, setSecondIndex] = useState(-1);
  const [messages, setMessages] = useState([]);

  const generateArray = () => {
    var tempArray = [];
    for (var i = 0; i < 15; i++) {
      var number = 0;
      tempArray.push(number);
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

  // generateFibonacci
  const generateFibonacci = async () => {
    array[0] = 0;
    setFirstIndex(0);
    await sleep(1000);

    array[1] = 1;
    setSecondIndex(1);
    await sleep(1000);

    for (var i = 2; i < array.length; i++) {
      array[i] = array[i - 1] + array[i - 2];
      setMessages((messages) => [
        ...messages,
        `Adding Values at index ${i - 2} and ${i - 1} : ${array[i - 2]} + ${
          array[i - 1]
        } = ${array[i - 1] + array[i - 2]}`,
      ]);

      setFirstIndex(i);
      setSecondIndex(i - 1);
      await sleep(1000);
    }
  };
  return (
    <div>
      <div className="settings">
        <div className="content">
          <div className="left-content">
            <span
              className="font-weight-bold cursor-pointer menu-item"
              onClick={generateFibonacci}
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
                className={
                  index === firstIndex
                    ? "node firstIndex"
                    : index === secondIndex
                    ? "node secondIndex"
                    : "node"
                }
              >
                {value}
              </div>
            );
          })}
        </div>
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
  );
};

export default Fibonacci;
