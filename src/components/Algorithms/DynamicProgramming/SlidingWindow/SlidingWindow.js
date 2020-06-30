import React, { useState, useEffect, useContext } from "react";

// Fontawesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faSyncAlt } from "@fortawesome/free-solid-svg-icons";

// Context
import { Context } from "../../../../context/Context";

const SlidingWindow = () => {
  const [array, setArray] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [target, setTarget] = useState("");
  const [messages, setMessages] = useState([]);
  const [leftIndex, setLeftIndex] = useState(-1);
  const [rightIndex, setRightIndex] = useState(-1);
  const { speed } = useContext(Context);

  const generateArray = () => {
    setCurrentIndex(-1);
    setMessages([]);
    setTarget("");

    var tempArray = [1, 4, 2, 10, 23, 3, 1, 0, 20];
    // for (var i = 0; i < 15; i++) {
    //   var number = Math.floor(Math.random() * 100 + 1);
    //   tempArray.push(number);
    // }
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
      var n = array.length;
      if (n < target) {
        // Log Tracer
        setMessages((messages) => [...messages, "Invalid"]);
        return -1;
      }

      setLeftIndex(0);
      setRightIndex(target - 1);
      await sleep(1000);

      var maxSum = 0;
      for (var i = 0; i < target; i++) {
        // Log Tracer
        setMessages((messages) => [
          ...messages,
          `Adding value ${array[i]} to maxSum`,
        ]);
        maxSum += array[i];
      }

      // Log Tracer
      setMessages((messages) => [...messages, `Max Sum : ${maxSum}`]);

      setLeftIndex(target);
      setRightIndex(n - 1);
      await sleep(1000);

      var windowSum = maxSum;
      for (var i = target; i < n; i++) {
        // Log Tracer
        setMessages((messages) => [...messages, `Window Sum : ${windowSum}`]);
        windowSum += array[i] - array[i - target];
        setLeftIndex(i - target);
        setRightIndex(i - 1);
        await sleep(1000);
        maxSum = Math.max(maxSum, windowSum);
        // Log Tracer
        setMessages((messages) => [
          ...messages,
          `Comparing maxSum : ${maxSum} and Window Sum : ${windowSum}`,
        ]);
      }
      setLeftIndex(i - target);
      setRightIndex(n - 1);
      await sleep(1000);
      setLeftIndex(-1);
      setRightIndex(-1);
      // Log Tracer
      setMessages((messages) => [...messages, `The maximum sum is ${maxSum}`]);
    } else {
      alert("Enter the size of the subarray to be found");
    }

    console.log(maxSum);
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
              placeholder="Size of the subarray"
              className="inputField"
              onChange={handleChange}
              value={target}
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

export default SlidingWindow;
