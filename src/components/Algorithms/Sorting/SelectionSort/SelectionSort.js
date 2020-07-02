import React, { useState, useEffect, useContext } from "react";

import "./SelectionSort.css";

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
    var i, j, min_idx;
    var n = array.length;
    // One by one move boundary of unsorted subarray
    for (i = 0; i < n - 1; i++) {
      // Find the minimum element in unsorted array
      min_idx = i;
      // Log
      setMessages((messages) => [...messages, `New Min Index : ${i}`]);
      for (j = i + 1; j < n; j++)
        if (array[j] < array[min_idx]) {
          // Log
          setMessages((messages) => [...messages, `New Min Index : ${j}`]);
          min_idx = j;
        }
      // Swap the found minimum element with the first element
      var tempArray = array;
      var temp = tempArray[min_idx];
      tempArray[min_idx] = tempArray[i];
      tempArray[i] = temp;
      // Log
      setMessages((messages) => [
        ...messages,
        `Swapping values at index ${j} and ${j + 1}`,
      ]);
      setLeftIndex(min_idx);
      setRightIndex(i);
      await sleep(300);
      setArray(tempArray);
    }
    setLeftIndex(-1);
    setRightIndex(-1);
    // Log
    setMessages((messages) => [...messages, `Array Sorted`]);
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
