import { useState } from 'react';
import { quizCategories } from '../data/quizQuestions';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './CloudQuiz.css';

export default function CloudQuiz() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const { ref, isVisible } = useScrollReveal();

  const startQuiz = (categoryId) => {
    setActiveCategory(quizCategories.find(c => c.id === categoryId));
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  const handleAnswer = (optionIndex) => {
    if (isAnswered) return;
    
    setSelectedAnswer(optionIndex);
    setIsAnswered(true);

    const isCorrect = optionIndex === activeCategory.questions[currentQuestion].correct;
    if (isCorrect) setScore(score + 1);
  };

  const nextQuestion = () => {
    if (currentQuestion < activeCategory.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const skipQuiz = () => {
    setActiveCategory(null);
  };

  if (!activeCategory) {
    return (
      <section id="quiz" className="section" ref={ref}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Knowledge Evaluation</h2>
            <p className="section-subtitle">Test your knowledge across different tech domains.</p>
          </div>

          <div className={`quiz-categories ${isVisible ? 'visible' : ''}`}>
            {quizCategories.map(category => (
              <div key={category.id} className="quiz-category-card" onClick={() => startQuiz(category.id)}>
                <span className="quiz-icon">{category.icon}</span>
                <h3>{category.name}</h3>
                <p>{category.questions.length} Questions</p>
                <button className="btn btn-secondary start-quiz-btn">Start Quiz</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="quiz" className="section">
      <div className="container">
        <div className="quiz-active-container">
          <div className="quiz-header">
            <div className="quiz-title">
              <span className="quiz-icon">{activeCategory.icon}</span>
              {activeCategory.name} Quiz
            </div>
            <button className="btn-close" onClick={skipQuiz}>Skip Quiz ×</button>
          </div>

          {!showResult ? (
            <div className="quiz-question-area">
              <div className="quiz-progress">
                Question {currentQuestion + 1} of {activeCategory.questions.length}
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${((currentQuestion + 1) / activeCategory.questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              <h3 className="question-text">
                <span className="prompt-symbol">$</span> 
                {activeCategory.questions[currentQuestion].question}
              </h3>

              <div className="options-grid">
                {activeCategory.questions[currentQuestion].options.map((option, index) => {
                  let optionClass = '';
                  if (isAnswered) {
                    if (index === activeCategory.questions[currentQuestion].correct) {
                      optionClass = 'correct';
                    } else if (index === selectedAnswer) {
                      optionClass = 'incorrect';
                    }
                  } else if (selectedAnswer === index) {
                    optionClass = 'selected';
                  }

                  return (
                    <button
                      key={index}
                      className={`option-btn ${optionClass}`}
                      onClick={() => handleAnswer(index)}
                      disabled={isAnswered}
                    >
                      <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                      {option}
                    </button>
                  );
                })}
              </div>

              {isAnswered && (
                <div className="explanation-box">
                  <h4>Explanation:</h4>
                  <p>{activeCategory.questions[currentQuestion].explanation}</p>
                  <button className="btn btn-primary next-btn" onClick={nextQuestion}>
                    {currentQuestion < activeCategory.questions.length - 1 ? 'Next Question →' : 'View Results →'}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="quiz-results">
              <div className="score-circle">
                <span className="score-number">{score}</span>
                <span className="score-total">/ {activeCategory.questions.length}</span>
              </div>
              <h3>Assessment Complete</h3>
              <p className="score-message">
                {score === activeCategory.questions.length ? 'Perfect Score! Expert Level.' : 
                 score >= activeCategory.questions.length / 2 ? 'Good job! Solid understanding.' : 
                 'Keep learning! Review the explanations to improve.'}
              </p>
              <div className="result-actions">
                <button className="btn btn-secondary" onClick={() => startQuiz(activeCategory.id)}>Retry Module</button>
                <button className="btn btn-primary" onClick={skipQuiz}>Back to Categories</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
