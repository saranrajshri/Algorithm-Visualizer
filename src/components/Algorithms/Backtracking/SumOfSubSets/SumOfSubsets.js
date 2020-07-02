import React, { useState, useEffect, useContext } from "react";

// Fontawesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faSyncAlt } from "@fortawesome/free-solid-svg-icons";

// Context
import { Context } from "../../../../context/Context";

const SumOfSubSets = () => {
  const [array, setArray] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [firstIndex, setFirstIndex] = useState(-1);
  const [target, setTarget] = useState("");
  const [messages, setMessages] = useState([]);
  const { speed } = useContext(Context);
  const [solution, setSolution] = useState([]);

  const generateArray = () => {
    setCurrentIndex(-1);
    setMessages([]);
    setTarget("");

    var tempArray = [];
    for (var i = 0; i < 10; i++) {
      var number = Math.floor(Math.random() * 80 + 1);
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
    setTarget(parseInt(e.target.value));
  };

  //  Solve
  const solve = async (n, sum) => {
    //   Log Tracer
    setMessages((messages) => [...messages, `Searching for the sum: ${sum}`]);

    setCurrentIndex(n);
    await sleep(100);
    if (target !== "") {
      if (sum == 0) {
        return true;
      }
      if (n == 0 && sum != 0) return false;

      if (array[n - 1] > sum) {
        setFirstIndex(n - 1);
        await sleep(100);
        return solve(n - 1, sum, currentIndex);
      }
      return (
        (await solve(n - 1, sum, currentIndex)) ||
        (await solve(n - 1, sum - array[n - 1], currentIndex))
      );
    } else {
      alert("Enter the sum to find");
    }
  };

  const execute = async () => {
    //   Log Tracer
    setMessages((messages) => [...messages, `Given set : ${array}`]);
    setMessages((messages) => [...messages, `Desired Sum : ${target}`]);
    if (await solve(array.length, target, [])) {
      await sleep(100);
      //   Log Tracer
      setMessages((messages) => [...messages, `Found a Possible Solution`]);
    } else {
      //   Log Tracer
      setMessages((messages) => [...messages, `No Solution found`]);
    }
    //   Log Tracer
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
              placeholder="Sum to be found"
              className="inputField"
              onChange={handleChange}
              value={target}
            />
            <span
              className="font-weight-bold cursor-pointer menu-item"
              onClick={() => execute()}
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
                    : index === firstIndex
                    ? "node firstIndex"
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
            {solution}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SumOfSubSets;
