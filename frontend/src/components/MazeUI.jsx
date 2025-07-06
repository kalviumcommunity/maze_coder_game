// src/components/MazeUI.jsx
import React from 'react';
import './MazeUI.css'; // Ensure you have this CSS file for styling

const MazeUI = ({ currentQuestionIndex, totalQuestions }) => {
  const blocks = Array.from({ length: totalQuestions }, (_, index) => (
    <div
      key={index}
      className={`maze-block ${index <= currentQuestionIndex ? 'active' : ''}`}
    >
      {index + 1}
    </div>
  ));

  return (
    <div className="maze-container">
      {blocks}
    </div>
  );
};

export default MazeUI;
