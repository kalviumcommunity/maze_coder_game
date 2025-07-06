// Maze.jsx
import React from "react";
import "./Maze.css";

const Maze = ({ answerResults = [], total = 0 }) => {
  const blocks = [];

  for (let i = 0; i < total; i++) {
    let className = "maze-block";
    if (i < answerResults.length) {
      className += answerResults[i] ? " correct" : " incorrect";
    }

    blocks.push(
      <div key={i} className={className}></div>
    );
  }

  const isComplete = answerResults.length === total && total > 0;
  const score = answerResults.filter((r) => r).length;

  return (
    <div className="maze-container-wrapper">
      <div className="maze-container">{blocks}</div>

      {isComplete && (
        <div className="maze-summary">
          {score === total ? (
            <h2 className="completed-text">🎉 Maze Completed! 🎉</h2>
          ) : (
            <h2 className="completed-text">Maze Completed</h2>
          )}
          <p>Your Score: {score} / {total}</p>
        </div>
      )}
    </div>
  );
};

export default Maze;
