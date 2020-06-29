import React, { useState, useEffect, useRef } from "react";

import "./LinearSearch.css";

// Fontawesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faSyncAlt } from "@fortawesome/free-solid-svg-icons";

const LinearSearch = () => {
  const [array, setArray] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [target, setTarget] = useState("");
  const [messages, setMessages] = useState([]);

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

  const handleChange = (e) => {
    setTarget(e.target.value);
  };

  // linear Search
  const linearSearch = async () => {
    if (target.trim() !== "") {
      for (var i = 0; i < array.length; i++) {
        setCurrentIndex(i);
        await sleep(1000);
        setCurrentIndex(i + 1);

        // Log tracer
        setMessages((messages) => [
          ...messages,
          `Checking at index ${i}. Value at index ${i} is ${array[i]}`,
        ]);

        if (array[i] === parseInt(target)) {
          // Log tracer
          setMessages((messages) => [
            ...messages,
            `Element Found at index ${i}`,
          ]);

          setCurrentIndex(i);
          break;
        }
      }
    } else {
      alert("Enter the element to find");
    }
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
              placeholder="Element to be found"
              className="inputField"
              onChange={handleChange}
            />
            <span
              className="font-weight-bold cursor-pointer menu-item"
              onClick={linearSearch}
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
