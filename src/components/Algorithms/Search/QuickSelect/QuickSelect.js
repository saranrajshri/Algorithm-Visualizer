import React, { useState, useEffect, useContext } from "react";

import "./Quickselect.css";

// Fontawesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faSyncAlt } from "@fortawesome/free-solid-svg-icons";

// Context
import { Context } from "../../../../context/Context";

const QuickSelect = () => {
  const [array, setArray] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [leftIndex, setLeftIndex] = useState(-1);
  const [rightIndex, setRightIndex] = useState(-1);
  const [resultIndex, setResultIndex] = useState(-1);
  const [pivotIndex, setPivotIndex] = useState(-1);

  const [target, setTarget] = useState("");
  const [messages, setMessages] = useState([]);
  const { speed } = useContext(Context);

  const generateArray = () => {
    setCurrentIndex(-1);
    setLeftIndex(-1);
    setRightIndex(-1);
    setPivotIndex(-1);
    setMessages([]);
    setTarget("");

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

  const handleChange = (e) => {
    setTarget(e.target.value);
  };

  // solve
  const solve = () => {
    if (target.trim() !== "") {
      var position = parseInt(target) - 1;
      quickSelect(0, array.length - 1, position);
    } else {
      alert("Enter the value of K");
    }
  };

  const quickSelect = async (startIndex, endIndex, position) => {
    while (true) {
      var leftIndex = startIndex + 1;
      var rightIndex = endIndex;
      var pivotIndex = startIndex;

      setCurrentIndex(startIndex);
      setLeftIndex(leftIndex);
      setRightIndex(rightIndex);
      setPivotIndex(pivotIndex);
      await sleep(500);

      // Log tracer
      setMessages((messages) => [...messages, `Start Index ${startIndex}`]);
      setMessages((messages) => [...messages, `Left Index ${leftIndex}`]);
      setMessages((messages) => [...messages, `Right Index ${rightIndex}`]);
      setMessages((messages) => [...messages, `Pivot Index ${pivotIndex}`]);

      while (leftIndex <= rightIndex) {
        if (
          array[leftIndex] > array[pivotIndex] &&
          array[rightIndex] < array[pivotIndex]
        ) {
          setMessages((messages) => [
            ...messages,
            `Swapping left and right index`,
          ]);

          swap(leftIndex, rightIndex);
        }

        if (array[leftIndex] <= array[pivotIndex]) {
          leftIndex++;
          setLeftIndex(leftIndex);
          setMessages((messages) => [...messages, `Left Index ${leftIndex}`]);
          await sleep(500);
        }
        if (array[rightIndex] >= array[pivotIndex]) {
          rightIndex--;
          setRightIndex(rightIndex);
          setMessages((messages) => [...messages, `Right Index ${rightIndex}`]);
          await sleep(500);
        }
      }
      setMessages((messages) => [
        ...messages,
        `Swapping pivot and right index`,
      ]);
      swap(pivotIndex, rightIndex);
      if (rightIndex === position) {
        console.log(array[rightIndex]);
        setResultIndex(rightIndex);
        setMessages((messages) => [
          ...messages,
          `Element : ${array[rightIndex]} (found at ${rightIndex})`,
        ]);
        setLeftIndex(-1);
        setRightIndex(-1);
        setCurrentIndex(-1);
        break;
      } else if (rightIndex < position) startIndex = rightIndex + 1;
      else endIndex = rightIndex - 1;
    }
  };

  const swap = (left, right) => {
    var tempArray = array;
    var temp = tempArray[left];
    tempArray[left] = tempArray[right];
    tempArray[right] = temp;
    setArray(tempArray);
  };
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
            <input
              type="text"
              focus
              placeholder="Value of K"
              className="inputField"
              onChange={handleChange}
              value={target}
            />
            <span
              className="font-weight-bold cursor-pointer menu-item"
              onClick={solve}
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
                  index === currentIndex
                    ? "node currentNode"
                    : index === leftIndex
                    ? "node leftIndex"
                    : index === rightIndex
                    ? "node rightIndex"
                    : index === resultIndex
                    ? "node resultIndex"
                    : "node"
                }
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

export default QuickSelect;
