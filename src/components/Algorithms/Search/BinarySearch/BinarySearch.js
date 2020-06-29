import React, { useState, useEffect, useContext } from "react";

// Stylesheet
import "./BinarySearch.css";

// Fontawesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faSyncAlt } from "@fortawesome/free-solid-svg-icons";

// Context
import { Context } from "../../../../context/Context";

const BinarySearch = () => {
  const [array, setArray] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [leftIndex, setLeftIndex] = useState(-1);
  const [rightIndex, setRightIndex] = useState(-1);
  const [target, setTarget] = useState("");
  const [messages, setMessages] = useState([]);
  const { speed } = useContext(Context);

  const generateArray = () => {
    setCurrentIndex(-1);
    setLeftIndex(-1);
    setRightIndex(-1);
    setTarget("");

    var tempArray = [];
    var number = Math.floor(Math.random() * 80 + 1);
    for (var i = number; i < number + 15; i++) {
      tempArray.push(i);
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

  // binary Search
  const binarySearch = async () => {
    if (target.trim() !== "") {
      var left = 0;
      setLeftIndex(left);
      var right = array.length;
      setRightIndex(right);

      while (left <= right) {
        var mid = Math.floor(left + (right - left) / 2);

        // Log tracer
        setMessages((messages) => [...messages, `Middle Index : ${mid}`]);

        setCurrentIndex(mid);
        if (array[mid] === parseInt(target)) {
          // Log tracer
          setMessages((messages) => [
            ...messages,
            `Element found at index ${mid}`,
          ]);
          break;
        } else if (array[mid] < target) {
          left = mid + 1;
          setLeftIndex(left);
          // Log tracer
          setMessages((messages) => [
            ...messages,
            `Moving the left pointer to the index ${mid + 1}`,
          ]);
          await sleep((6 - speed) * 1000);
        } else {
          right = mid - 1;
          setRightIndex(right);
          // Log tracer
          setMessages((messages) => [
            ...messages,
            `Moving the right pointer to the index ${mid - 1}`,
          ]);
          await sleep((6 - speed) * 1000);
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
              value={target}
              onChange={handleChange}
            />
            <span
              className="font-weight-bold cursor-pointer menu-item"
              onClick={binarySearch}
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
                    : index >= leftIndex && index <= rightIndex
                    ? "node rangeNode"
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

export default BinarySearch;
