import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MazeQuiz.css';

const MazeQuiz = ({ onAnswer, setTotalQuestions, onResetAnswers }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showCompletionMessage, setShowCompletionMessage] = useState(false);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/questions');
      setQuestions(response.data);
      setTotalQuestions(response.data.length);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const handleAnswer = (isCorrect) => {
    onAnswer(isCorrect);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setShowCompletionMessage(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setShowCompletionMessage(false);
    onResetAnswers(); // Reset maze
    fetchQuestions(); // Refetch or just reset
  };

  if (!questions.length) return <p style={{ color: "#fff" }}>Loading questions...</p>;

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <h2>Maze Coder Quiz</h2>
      {!showCompletionMessage ? (
        <div>
          <h3>{currentQuestion.question}</h3>
          {currentQuestion.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(option === currentQuestion.correctAnswer)}
              className="option-button"
            >
              {option}
            </button>
          ))}
        </div>
      ) : (
        <div className="quiz-summary">
          <h3>🎉 Maze Completed!</h3>
        </div>
      )}

      <div style={{ marginTop: '20px' }}>
        <button onClick={resetQuiz} className="refresh-button">
          🔄 Restart Quiz
        </button>
      </div>
    </div>
  );
};

export default MazeQuiz;
