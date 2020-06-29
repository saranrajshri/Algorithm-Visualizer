import React, { useState, useEffect, useContext } from "react";

// StyleSheet
import "./JumpSearch.css";

// Fontawesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faSyncAlt } from "@fortawesome/free-solid-svg-icons";

// Context
import { Context } from "../../../../context/Context";

const JumpSearch = () => {
  const [array, setArray] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [prevIndex, setPrevIndex] = useState(-1);
  const [stepIndex, setStepIndex] = useState(-1);
  const [target, setTarget] = useState("");
  const [messages, setMessages] = useState([]);
  const { speed } = useContext(Context);

  const generateArray = () => {
    setCurrentIndex(-1);
    setPrevIndex(-1);
    setStepIndex(-1);
    setMessages([]);

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

  // jump Search
  const jumpSearch = async () => {
    if (target.trim() !== "") {
      var step = Math.floor(Math.sqrt(array.length));
      setStepIndex(step);

      // Log tracer
      setMessages((messages) => [...messages, `Step value : ${step}`]);

      await sleep((6 - speed) * 1000);
      var prev = 0;
      var n = array.length;
      while (array[Math.min(step, n) - 1] < target) {
        prev = step;
        setPrevIndex(prev);
        // Log tracer
        setMessages((messages) => [...messages, `Previous Index : ${prev}`]);

        await sleep((6 - speed) * 1000);
        step += Math.floor(Math.sqrt(n));

        // Log tracer
        setMessages((messages) => [...messages, `Step value : ${step}`]);
        setStepIndex(step);
        await sleep((6 - speed) * 1000);

        if (prev >= n) {
          setCurrentIndex(-1);
          // Log tracer
          setMessages((messages) => [...messages, `Element Not Found`]);
          break;
        }
      }

      while (array[prev] < target) {
        prev++;
        setPrevIndex(prev);
        // Log tracer
        setMessages((messages) => [...messages, `Previous Index : ${prev}`]);
        await sleep((6 - speed) * 1000);
        if (prev === Math.min(step, n)) {
          setCurrentIndex(-1);
          // Log tracer
          setMessages((messages) => [...messages, `Element Not Found`]);
          break;
        }
      }

      if (array[prev] === parseInt(target)) {
        setCurrentIndex(prev);
        // Log tracer
        setMessages((messages) => [...messages, `Element Found at ${prev}`]);
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
              value={target}
            />
            <span
              className="font-weight-bold cursor-pointer menu-item"
              onClick={jumpSearch}
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
                    : index === prevIndex
                    ? "node rangeNode"
                    : index >=
                        stepIndex - Math.floor(Math.sqrt(array.length)) &&
                      index <= stepIndex
                    ? "node stepIndexNode"
                    : "node"
                }
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

export default JumpSearch;
