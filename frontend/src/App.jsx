import React, { useState } from 'react';
import MazeQuiz from './components/MazeQuiz';
import Maze from './components/Maze';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Login from "./pages/Login";
import Signup from './pages/Signup';

function App() {
  const [answerResults, setAnswerResults] = useState([]);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const handleQuizAnswer = (isCorrect) => {
    setAnswerResults(prev => [...prev, isCorrect]);
  };

  const resetAnswers = () => {
    setAnswerResults([]);
  };

  return (
    <div className="main-app">
      <h1>🧩 Maze Coder 🧩</h1>

      <div className="nav-links">
        <Link to="/login" className="btn">Login</Link>
        <Link to="/signup" className="btn">Signup</Link>
      </div>

      <Maze answerResults={answerResults} total={totalQuestions} />
      <MazeQuiz
        onAnswer={handleQuizAnswer}
        setTotalQuestions={setTotalQuestions}
        onResetAnswers={resetAnswers}
      />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
