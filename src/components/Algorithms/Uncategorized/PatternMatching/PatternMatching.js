import React, { useState } from "react";

// Fontawesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faSyncAlt } from "@fortawesome/free-solid-svg-icons";

// stylesheet
import "./PatternMatching.css";

const PatternMatching = () => {
  const [text, setText] = useState("");
  const [target, setTarget] = useState("");
  const [messages, setMessages] = useState([]);
  const [IthIndex, setI] = useState(-1);
  const [JthIndex, setJ] = useState(-1);
  const [sleepTime, setSleepTime] = useState(500);
  const [leftIndex, setLeftIndex] = useState(-1);
  const [rightIndex, setRightIndex] = useState(-1);

  const handleChange = (e) => {
    if (e.target.name === "text") setText(e.target.value);
    else setTarget(e.target.value);
  };

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };
  const reset = () => {
    setText("Hello World");
    setTarget("World");
    setLeftIndex(-1);
    setRightIndex(-1);
    setI(-1);
    setJ(-1);
  };

  const computeLPSArray = async (target, M, lps) => {
    var len = 0;

    lps[0] = 0; // lps[0] is always 0

    // the loop calculates lps[i] for i = 1 to M-1
    var i = 1;
    while (i < M) {
      if (target[i] == target[len]) {
        len++;
        lps[i] = len;
        i++;
        setI(i);
        // Log tracer
        setMessages((messages) => [...messages, `Incrementing i by one`]);
        await sleep(sleepTime);
      } // (pat[i] != pat[len])
      else {
        // This is tricky. Consider the example.
        // AAACAAAA and i = 7. The idea is similar
        // to search step.
        if (len != 0) {
          len = lps[len - 1];

          // Also, note that we do not increment
          // i here
        } // if (len == 0)
        else {
          lps[i] = 0;
          i++;
          setMessages((messages) => [...messages, `Incrementing i by one`]);

          setI(i);
          await sleep(sleepTime);
        }
      }
    }
  };
  const kmp = async () => {
    var M = target.length;
    var N = text.length;

    // Log tracer
    setMessages((messages) => [...messages, `Length of the text : ${N}`]);
    setMessages((messages) => [...messages, `Length of the pattern : ${M}`]);

    // create lps[] that will hold the longest prefix suffix
    // values for pattern
    var lps = new Array(M);

    // Preprocess the pattern (calculate lps[] array)
    computeLPSArray(target, M, lps);

    var i = 0; // index for txt[]
    var j = 0; // index for pat[]
    setI(i);
    setJ(j);
    await sleep(sleepTime);
    while (i < N) {
      if (target[j] == text[i]) {
        j++;
        i++;
        setI(i);
        setJ(j);
        await sleep(sleepTime);
        // Log tracer
        setMessages((messages) => [
          ...messages,
          `Incrementing i-th pointer and j-th pointer by one`,
        ]);
      }

      if (j == M) {
        // Log tracer
        setMessages((messages) => [
          ...messages,
          `Pattern found at index ${i - j}`,
        ]);
        setLeftIndex(i - j);
        setRightIndex(i - j + target.length - 1);
        j = lps[j - 1];
      }

      // mismatch after j matches
      else if (i < N && target[j] != text[i]) {
        // Do not match lps[0..lps[j-1]] characters,
        // they will match anyway
        if (j != 0) j = lps[j - 1];
        else {
          i = i + 1;
          // Log tracer
          setMessages((messages) => [...messages, `Incrementing i by one`]);
          setI(i);
          await sleep(sleepTime);
        }
      }
    }
    setI(-1);
    setJ(-1);
  };
  return (
    <div>
      <div className="settings">
        <div className="content">
          <div className="left-content">
            <span
              className="font-weight-bold cursor-pointer menu-item"
              onClick={reset}
            >
              <FontAwesomeIcon icon={faSyncAlt} /> Reset
            </span>
            <input
              type="text"
              focus
              name="text"
              placeholder="Enter the text"
              className="inputField"
              onChange={handleChange}
              value={text}
            />
            <input
              type="text"
              focus
              name="target"
              placeholder="Enter the pattern to find"
              className="inputField"
              onChange={handleChange}
              value={target}
            />
            <span
              className="font-weight-bold cursor-pointer menu-item"
              onClick={kmp}
            >
              <FontAwesomeIcon icon={faPlay} /> Play
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mainContent">
        <div className="node-wrapper">
          {text.split("").map((value, index) => {
            return (
              <div
                key={index}
                className={"node"}
                className={
                  index === IthIndex
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
          <br />

          <div className="pattern-container">
            {target.split("").map((value, index) => {
              return (
                <div
                  key={index}
                  className={"node"}
                  className={index === JthIndex ? "node rangeNode" : "node"}
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
export default PatternMatching;
