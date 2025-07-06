const QuestionCard = ({ question, onAnswer }) => {
  return (
    <div className="question-card">
      <h3>{question.text}</h3>
      {question.options.map((option, idx) => (
        <button key={idx} onClick={() => onAnswer(option === question.correct)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default QuestionCard;