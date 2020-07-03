import React, { useState, useEffect, useContext } from "react";

import "./SumOfSubSets.css";

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
    setTarget(e.target.value);
  };

  const displaySubset = (subSet, size) => {
    var tempSolution = solution;
    var tempSub = [];
    for (var i = 0; i < size; i++) {
      tempSub.push(subSet[i]);
    }
    tempSolution.push(tempSub);
    setMessages((messages) => [...messages, `Possible Solution : ${tempSub}`]);
    setSolution(tempSolution);
  };
  //  Solve
  const subsetSum = async (subSet, n, subSize, total, nodeCount, sum) => {
    setCurrentIndex(subSize);
    await sleep(50);
    if (total === sum) {
      displaySubset(subSet, subSize); //print the subset
      await subsetSum(
        subSet,
        n,
        subSize - 1,
        total - array[nodeCount],
        nodeCount + 1,
        sum
      ); //for other subsets
      return;
    } else {
      for (var i = nodeCount; i < n; i++) {
        setFirstIndex(i);
        await sleep(50);
        //find node along breadth
        subSet[subSize] = array[i];
        await subsetSum(subSet, n, subSize + 1, total + array[i], i + 1, sum); //do for next node in depth
      }
    }
  };

  const findSubSet = async (size, sum) => {
    let subSet = [];
    //   Log Tracer
    setMessages((messages) => [...messages, `Searching for the sum: ${sum}`]);
    await subsetSum(subSet, size, 0, 0, 0, parseInt(sum));
    subSet = undefined;
  };

  const execute = async () => {
    //   Log Tracer
    setMessages((messages) => [...messages, `Given set : ${array}`]);
    setMessages((messages) => [...messages, `Desired Sum : ${target}`]);
    await findSubSet(array.length, target);
    setFirstIndex(-1);
    setCurrentIndex(-1);
    //   Log Tracer
    setMessages((messages) => [...messages, `========`]);
    setMessages((messages) => [...messages, `Solution`]);
    setMessages((messages) => [...messages, `========`]);
    setMessages((messages) => [...messages, `${solution}`]);
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
