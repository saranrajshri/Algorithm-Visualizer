import React, { useState, useEffect, useContext } from "react";

import "./QuickSort.css";

// Fontawesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faSyncAlt } from "@fortawesome/free-solid-svg-icons";

// Context
import { Context } from "../../../../context/Context";

const QuickSort = () => {
  const [array, setArray] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [leftIndex, setLeftIndex] = useState(-1);
  const [rightIndex, setRightIndex] = useState(-1);
  const [messages, setMessages] = useState([]);
  const { speed } = useContext(Context);

  const generateArray = () => {
    setCurrentIndex(-1);
    setLeftIndex(-1);
    setRightIndex(-1);
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

  // quickSort

  const quickSortHelper = async (startIndex, endIndex) => {
    setMessages((messages) => [
      ...messages,
      `Calling Quick Sort on startIndex ${startIndex} to endIndex ${endIndex}`,
    ]);
    if (startIndex >= endIndex) return;
    var leftIndex = startIndex + 1;
    var rightIndex = endIndex;
    var pivotIndex = startIndex;

    //   Log tracer
    setMessages((messages) => [...messages, `Leftindex at ${leftIndex}`]);
    //   Log tracer
    setMessages((messages) => [...messages, `RightIndex at ${rightIndex}`]);
    //   Log tracer
    setMessages((messages) => [...messages, `PivotIndex at ${pivotIndex}`]);

    setLeftIndex(leftIndex);
    setRightIndex(rightIndex);
    setCurrentIndex(pivotIndex);

    while (leftIndex <= rightIndex) {
      if (
        array[leftIndex] > array[pivotIndex] &&
        array[rightIndex] < array[pivotIndex]
      ) {
        swap(leftIndex, rightIndex);
        setMessages((messages) => [
          ...messages,
          `Swapping values at index ${leftIndex} and ${rightIndex}`,
        ]);

        await sleep(300);
      }
      if (array[leftIndex] <= array[pivotIndex]) {
        leftIndex++;
        setMessages((messages) => [...messages, `Incrementing leftIndex by 1`]);

        setLeftIndex(leftIndex);
      }
      if (array[rightIndex] >= array[pivotIndex]) {
        rightIndex--;
        setMessages((messages) => [
          ...messages,
          `Decrementing rightIndex by 1`,
        ]);

        setRightIndex(rightIndex);
      }
    }
    swap(rightIndex, pivotIndex);
    setMessages((messages) => [
      ...messages,
      `Swapping values at index ${rightIndex} and ${pivotIndex}`,
    ]);

    await sleep(300);
    var isLeftSmaller =
      rightIndex - 1 - startIndex < endIndex - (rightIndex + 1);
    if (isLeftSmaller) {
      await quickSortHelper(startIndex, rightIndex - 1);
      await quickSortHelper(rightIndex + 1, endIndex);
    } else {
      await quickSortHelper(rightIndex + 1, endIndex);
      await quickSortHelper(startIndex, rightIndex - 1);
    }
  };

  const quickSort = async () => {
    await quickSortHelper(0, array.length - 1);
    setCurrentIndex(-1);
    setLeftIndex(-1);
    setRightIndex(-1);
    setMessages((messages) => [...messages, `Array Sorted!!`]);
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

            <span
              className="font-weight-bold cursor-pointer menu-item"
              onClick={quickSort}
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

export default QuickSort;
