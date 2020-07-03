import React, { useState, useContext } from "react";

// Stylesheet
import "./Content.css";

// Context
import { Context } from "../../context/Context";

// Algorithms
import LinearSearch from "../Algorithms/Search/LinearSearch/LinearSearch";
import BinarySearch from "../Algorithms/Search/BinarySearch/BinarySearch";
import JumpSearch from "../Algorithms/Search/JumpSearch/JumpSearch";
import Fibonacci from "../Algorithms/DynamicProgramming/Fibonacci/Fibonacci";
import NQueens from "../Algorithms/Backtracking/NQueens/NQueens";
import SumOfSubSets from "../Algorithms/Backtracking/SumOfSubSets/SumOfSubsets";
import NFactorial from "../Algorithms/Recursion/NFactorial";
import SlidingWindow from "../Algorithms/DynamicProgramming/SlidingWindow/SlidingWindow";
import QuickSelect from "../Algorithms/Search/QuickSelect/QuickSelect";
import BubbleSort from "../Algorithms/Sorting/BubbleSort/BubbleSort";
import SelectionSort from "../Algorithms/Sorting/SelectionSort/SelectionSort";
import InsertionSort from "../Algorithms/Sorting/InsertionSort/InsertionSort";
import MergeSort from "../Algorithms/Sorting/MergeSort/MergeSort";

// CodeString
// CPP
import {
  LinearSearchCPP,
  BinarySearchCPP,
  JumpSearchCPP,
  FibonacciCPP,
  NQueensCPP,
  SumOfSubsetsCPP,
  NFactorialCPP,
  SlidingWindowCPP,
  QuickSelectCPP,
  BubbleSortCPP,
  SelectionSortCPP,
  InsertionSortCPP,
  MergeSortCPP,
  QuickSortCPP,
} from "../CodeStrings/CodeStringsCPP";

import {
  LinearSearchPY,
  BinarySearchPY,
  JumpSearchPY,
  FibonacciPY,
  NQueensPY,
  SumOfSubSstsPY,
  NFactorialPY,
  SlidingWindowPY,
  QuickSelectPY,
  BubbleSortPY,
  SelectionSortPY,
  InsertionSortPY,
  MergeSortPY,
  QuickSortPY,
} from "../CodeStrings/CodeStringsPY";

// Code Themes
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import QuickSort from "../Algorithms/Sorting/QuickSort/QuickSort";

const Content = () => {
  const { selectedComponent } = useContext(Context);
  const [language, setLanguage] = useState("CPP");

  // Mappings
  const components = {
    LinearSearch: LinearSearch,
    BinarySearch: BinarySearch,
    JumpSearch: JumpSearch,
    Fibonacci: Fibonacci,
    NQueens: NQueens,
    SumOfSubsets: SumOfSubSets,
    NFactorial: NFactorial,
    SlidingWindow: SlidingWindow,
    QuickSelect: QuickSelect,
    BubbleSort: BubbleSort,
    SelectionSort: SelectionSort,
    InsertionSort: InsertionSort,
    MergeSort: MergeSort,
    QuickSort: QuickSort,
  };
  const codeStringsMappingCPP = {
    LinearSearch: LinearSearchCPP,
    BinarySearch: BinarySearchCPP,
    JumpSearch: JumpSearchCPP,
    Fibonacci: FibonacciCPP,
    NQueens: NQueensCPP,
    SumOfSubsets: SumOfSubsetsCPP,
    NFactorial: NFactorialCPP,
    SlidingWindow: SlidingWindowCPP,
    QuickSelect: QuickSelectCPP,
    BubbleSort: BubbleSortCPP,
    SelectionSort: SelectionSortCPP,
    InsertionSort: InsertionSortCPP,
    MergeSort: MergeSortCPP,
    QuickSort: QuickSortCPP,
  };
  const codeStringsMappingPY = {
    LinearSearch: LinearSearchPY,
    BinarySearch: BinarySearchPY,
    JumpSearch: JumpSearchPY,
    Fibonacci: FibonacciPY,
    NQueens: NQueensPY,
    SumOfSubsets: SumOfSubSstsPY,
    NFactorial: NFactorialPY,
    SlidingWindow: SlidingWindowPY,
    QuickSelect: QuickSelectPY,
    BubbleSort: BubbleSortPY,
    SelectionSort: SelectionSortPY,
    InsertionSort: InsertionSortPY,
    MergeSort: MergeSortPY,
    QuickSort: QuickSortPY,
  };

  var Component = components[selectedComponent];
  var codeString;

  if (language === "CPP") {
    codeString = codeStringsMappingCPP[selectedComponent];
  } else {
    codeString = codeStringsMappingPY[selectedComponent];
  }

  return (
    <div className="root">
      <div className="row">
        <div className="column" id="main-content-column">
          <div className="main-content">
            <div>
              <Component />
            </div>
          </div>
        </div>
        <div className="column" id="code">
          <div className="code">
            <div>
              <span
                className="label lang-selector"
                onClick={() => setLanguage("CPP")}
              >
                <span>C++</span>
              </span>
              <span
                className="label lang-selector"
                onClick={() => setLanguage("PY")}
              >
                <span>Python</span>
              </span>
            </div>
            <SyntaxHighlighter
              language={language === "CPP" ? "cpp" : "py"}
              style={atomDark}
              customStyle={{ fontSize: 12 }}
            >
              {codeString}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Content;
