import React, { useState, useEffect } from "react";

// Stylesheet
import "./NQueens.css";

// Fontawesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faSyncAlt } from "@fortawesome/free-solid-svg-icons";

const NQueens = () => {
  const [boardValue, setBoardValue] = useState();
  const [board, setBoard] = useState([]);
  const [currentGrid, setCurrentGrid] = useState([-1, -1]);
  const [messages, setMessages] = useState([]);

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const isSafe = (board, row, col) => {
    var i, j;
    var N = board.length;

    /* Check this row on left side */
    for (i = 0; i < col; i++) if (board[row][i]) return false;

    /* Check upper diagonal on left side */
    for (i = row, j = col; i >= 0 && j >= 0; i--, j--)
      if (board[i][j]) return false;

    /* Check lower diagonal on left side */
    for (i = row, j = col; j >= 0 && i < N; i++, j--)
      if (board[i][j]) return false;

    return true;
  };

  // recursive call
  const solveNQ = async (board, col) => {
    if (col >= board.length) return true;

    for (var i = 0; i < board.length; i++) {
      setMessages((messages) => [...messages, `Checking row ${i} col  ${col}`]);

      //   console.log(i, col);
      setCurrentGrid([i, col]);
      await sleep(100);

      if (isSafe(board, i, col)) {
        setMessages((messages) => [
          ...messages,
          `Placing Queen at row ${i} col  ${col}`,
        ]);

        var tempBoard = board;
        tempBoard[i][col] = 1;
        setBoard(tempBoard);

        await sleep(1000);
        if (await solveNQ(board, col + 1)) {
          setCurrentGrid([-1, -1]);
          return true;
        }

        tempBoard = await board;
        setMessages((messages) => [
          ...messages,
          `Backtracking row ${i} col ${col}`,
        ]);

        tempBoard[i][col] = 0;
        setBoard(tempBoard);
        await sleep(1000);
      }
    }

    return false;
  };

  //   driver code
  const solve = () => {
    if (solveNQ(board, 0) === false) {
      setMessages((messages) => [...messages, `No Solution`]);
      return false;
    }
    return true;
  };

  useEffect(() => {
    // solve();
  }, []);

  const handleChange = (e) => {
    setBoardValue(parseInt(e.target.value));
    var tempBoard = [];
    var n = parseInt(e.target.value);
    for (var i = 0; i < n; i++) {
      var row = [];
      for (var j = 0; j < n; j++) {
        row.push(0);
      }
      tempBoard.push(row);
    }

    setBoard(tempBoard);
  };
  console.log(board);
  return (
    <div>
      <div className="settings">
        <div className="content">
          <div className="left-content">
            <input
              type="number"
              focus
              placeholder="Board Size"
              className="inputField"
              onChange={handleChange}
              value={boardValue}
              max={8}
            />
            <span
              className="font-weight-bold cursor-pointer menu-item"
              onClick={solve}
            >
              <FontAwesomeIcon icon={faPlay} /> Play
            </span>
          </div>
        </div>
      </div>

      {/* MainContent */}
      <div className="mainContent" style={{ overflow: "auto" }}>
        {board.map((row, rowIndex) => {
          return (
            <div className="grid-row" key={rowIndex}>
              {row.map((col, colIndex) => {
                return (
                  <div
                    className={
                      rowIndex === currentGrid[0] && colIndex === currentGrid[1]
                        ? "grid-column current-grid"
                        : board[rowIndex][colIndex] === 1
                        ? "grid-column queen-grid"
                        : "grid-column"
                    }
                  ></div>
                );
              })}
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
  );
};
export default NQueens;
