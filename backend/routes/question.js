const express = require('express');
const router = express.Router();
const Question = require('../models/Question'); // adjust the path if needed

// 👉 POST - Create a new question
router.post('/', async (req, res) => {
  try {
    const { text, options, correct, level } = req.body;
    const question = new Question({ text, options, correct, level });
    await question.save();
    res.status(201).json({ message: 'Question created', question });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 👉 GET - Get all questions
router.get('/', async (req, res) => {
  try {
    const questions = await Question.find();
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 👉 PUT - Update a question by ID
router.put('/:id', async (req, res) => {
  try {
    const updated = await Question.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) {
      return res.status(404).json({ message: 'Question not found' });
    }
    res.status(200).json({ message: 'Question updated', question: updated });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
