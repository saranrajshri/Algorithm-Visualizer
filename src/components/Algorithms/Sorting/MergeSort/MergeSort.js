import React, { useState, useEffect, useContext } from "react";

import "./MergeSort.css";

// Fontawesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faSyncAlt } from "@fortawesome/free-solid-svg-icons";

// Context
import { Context } from "../../../../context/Context";

const MergeSort = () => {
  const [array, setArray] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [leftIndex, setLeftIndex] = useState(-1);
  const [rightIndex, setRightIndex] = useState(-1);
  const [messages, setMessages] = useState([]);
  const { speed } = useContext(Context);
  const [I, setI] = useState(-1);
  const [J, setJ] = useState(-1);
  const [K, setK] = useState(-1);

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

  const merge = async (l, m, r) => {
    var i, j, k;
    var n1 = m - l + 1;
    var n2 = r - m;

    /* create temp arrays */
    var L = new Array(n1);
    var R = new Array(n2);

    /* Copy data to temp arrays L[] and R[] */
    for (i = 0; i < n1; i++) L[i] = array[l + i];
    for (j = 0; j < n2; j++) R[j] = array[m + 1 + j];

    /* Merge the temp arrays back into arr[l..r]*/
    i = 0; // Initial index of first subarray
    j = 0; // Initial index of second subarray
    k = l; // Initial index of merged subarray
    setI(i);
    setJ(j);
    setK(k);
    await sleep(100);

    while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
        //   Log tracer
        setMessages((messages) => [
          ...messages,
          `Set value at index ${i} to the array at index ${k}`,
        ]);
        var tempArray = array;
        array[k] = L[i];
        setArray(tempArray);
        i++;
        setI(i);
        await sleep(100);
      } else {
        //   Log tracer
        setMessages((messages) => [
          ...messages,
          `Set value at index ${j} to the array at index ${k}`,
        ]);
        var tempArray = array;
        array[k] = R[j];
        setArray(tempArray);
        j++;
        setJ(j);
        await sleep(100);
      }
      k++;
      setK(k);
      await sleep(100);
    }

    /* Copy the remaining elements of L[], if there 
       are any */
    while (i < n1) {
      //   Log tracer
      setMessages((messages) => [
        ...messages,
        `Set value at index ${i} to the array at index ${k}`,
      ]);
      var tempArray = array;
      array[k] = L[i];
      setArray(tempArray);
      i++;
      k++;
      setI(i);
      setK(k);
      await sleep(100);
    }

    /* Copy the remaining elements of R[], if there 
       are any */
    while (j < n2) {
      //   Log tracer
      setMessages((messages) => [
        ...messages,
        `Set value at index ${j} to the array at index ${k}`,
      ]);
      var tempArray = array;
      array[k] = R[j];
      setArray(tempArray);
      j++;
      k++;
      setJ(j);
      setK(k);
      await sleep(100);
    }
  };
  //   merge sort
  const mergeSort = async (left, right) => {
    if (left < right) {
      setLeftIndex(left);
      setRightIndex(right);

      //   Log tracer
      setMessages((messages) => [
        ...messages,
        `Calling Merge Sort on leftIndex : ${left} & rightIndex : ${right}`,
      ]);

      await sleep(100);
      var mid = parseInt(left + (right - left) / 2);
      await mergeSort(left, mid);
      await mergeSort(mid + 1, right);
      await merge(left, mid, right);
    }
  };

  // solve
  const solve = async () => {
    await mergeSort(0, array.length - 1);
    //   Log tracer
    setMessages((messages) => [...messages, `Array Sorted!!`]);
    setLeftIndex(-1);
    setRightIndex(-1);
    setI(-1);
    setJ(-1);
    setK(-1);
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
          <div className="bars">
            {array.map((value, index) => {
              return (
                <div
                  title={value}
                  style={{ height: array[index], width: 20 }}
                  key={index}
                  className={
                    index >= leftIndex && index <= rightIndex
                      ? "bar rangeBar"
                      : index == I
                      ? "bar nodeI"
                      : index === J
                      ? "bar nodeJ"
                      : index === K
                      ? "bar nodeK"
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
                      : index >= leftIndex && index <= rightIndex
                      ? "node rangeNode"
                      : index == I
                      ? "node nodeI"
                      : index === J
                      ? "node nodeJ"
                      : index === K
                      ? "node nodeK"
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

export default MergeSort;
