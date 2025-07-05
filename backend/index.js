const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
// const mongoose = require("mongoose");
// const cors = require("cors");
// const User = require("./models/User");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
const authRoutes = require("./routes/auth")
const questions = [
  {
    "level": "easy",
    "question": "What is the output of: console.log(typeof 'Hello')?",
    "options": ["undefined", "string", "object", "function"],
    "correctAnswer": "string"
  },
  {
    "level": "easy",
    "question": "Which HTML tag is used to insert a line break?",
    "options": ["<p>", "<br>", "<hr>", "<div>"],
    "correctAnswer": "<br>"
  },
  {
    "level": "easy",
    "question": "What does CSS stand for?",
    "options": [
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets"
    ],
    "correctAnswer": "Cascading Style Sheets"
  },
  {
    "level": "medium",
    "question": "Which of the following is NOT a JavaScript data type?",
    "options": ["Boolean", "Undefined", "Float", "Object"],
    "correctAnswer": "Float"
  },
  {
    "level": "medium",
    "question": "What does the 'this' keyword refer to in JavaScript inside a regular function?",
    "options": ["The function", "The object that owns the function", "Global object", "None"],
    "correctAnswer": "The object that owns the function"
  },
  {
    "level": "medium",
    "question": "What is the purpose of the useState hook in React?",
    "options": [
      "To fetch data",
      "To style components",
      "To manage state in functional components",
      "To create routes"
    ],
    "correctAnswer": "To manage state in functional components"
  },
  {
    "level": "hard",
    "question": "What will the output be?\nconst a = [1, 2, 3];\nconst b = a;\nb.push(4);\nconsole.log(a);",
    "options": ["[1, 2, 3]", "[1, 2, 3, 4]", "undefined", "Error"],
    "correctAnswer": "[1, 2, 3, 4]"
  },
  {
    "level": "hard",
    "question": "Which method is used to combine two or more arrays in JavaScript?",
    "options": ["concat()", "push()", "merge()", "join()"],
    "correctAnswer": "concat()"
  },
  {
    "level": "hard",
    "question": "What is closure in JavaScript?",
    "options": [
      "Function having access to parent scope after execution",
      "A way to declare variables",
      "A loop inside a function",
      "A debugging technique"
    ],
    "correctAnswer": "Function having access to parent scope after execution"
  }
]

app.get('/api/questions', (req, res) => {
  res.json(questions);
});
app.use('/api/auth', authRoutes);
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});