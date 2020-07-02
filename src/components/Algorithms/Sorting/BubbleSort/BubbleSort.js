import React, { useState, useEffect, useContext } from "react";

import "./BubbleSort.css";

// Fontawesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faSyncAlt } from "@fortawesome/free-solid-svg-icons";

// Context
import { Context } from "../../../../context/Context";

const LinearSearch = () => {
  const [array, setArray] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [leftIndex, setLeftIndex] = useState(-1);
  const [rightIndex, setRightIndex] = useState(-1);
  const [messages, setMessages] = useState([]);
  const { speed } = useContext(Context);

  const generateArray = () => {
    setCurrentIndex(-1);
    setMessages([]);

    var tempArray = [];
    for (var i = 0; i < 15; i++) {
      var number = Math.floor(Math.random() * 100 + 1);
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

  // bubble sort
  const bubbleSort = async () => {
    for (var i = 0; i < array.length; i++) {
      for (var j = 0; j < array.length - i - 1; j++) {
        // Log
        setMessages((messages) => [
          ...messages,
          `Comparing values at index ${j} and ${j + 1}`,
        ]);

        if (array[j] > array[j + 1]) {
          // Log
          setMessages((messages) => [
            ...messages,
            `Swapping values at index ${j} and ${j + 1}`,
          ]);
          var tempArray = array;
          var temp = tempArray[j];
          tempArray[j] = tempArray[j + 1];
          tempArray[j + 1] = temp;
          setLeftIndex(j);
          setRightIndex(j + 1);
          await sleep(200);
          setArray(tempArray);
        }
        var tempArray = array;
        setArray(tempArray);
      }
      var tempArray = array;
      setArray(tempArray);
      // Log
      setMessages((messages) => [...messages, `Array Sorted!!`]);
      setLeftIndex(-1);
      setRightIndex(-1);
    }
  };
  console.log(array);
  return (
    <div>
      <div className="settings">
        <div className="content">
          <div className="left-content">
            <span
              className="font-weight-bold cursor-pointer menu-item"
              onClick={generateArray}
            >
              <FontAwesomeIcon icon={faSyncAlt} /> Generate array
            </span>

            <span
              className="font-weight-bold cursor-pointer menu-item"
              onClick={bubbleSort}
            >
              <FontAwesomeIcon icon={faPlay} /> Play
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mainContent">
        <div className="node-wrapper">
          <div className="bars">
            {array.map((value, index) => {
              return (
                <div
                  title={value}
                  style={{ height: array[index], width: 20 }}
                  key={index}
                  className={
                    index === currentIndex
                      ? "bar currentNode"
                      : index === leftIndex
                      ? "bar leftBar"
                      : index === rightIndex
                      ? "bar rightBar"
                      : "bar"
                  }
                >
                  {/* {value} */}
                </div>
              );
            })}
          </div>

          <div className="nodes">
            {array.map((value, index) => {
              return (
                <div
                  key={index}
                  className={
                    index === currentIndex
                      ? "node currentNode"
                      : index === leftIndex
                      ? "node leftIndex"
                      : index === rightIndex
                      ? "node rightIndex"
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
    </div>
  );
};

export default LinearSearch;
