import React, { useState } from 'react';
import './App.css';
import { questions } from './assets/questions';
import Question from './components/Question';
import FinalResult from './components/FinalResult';

function App() {

  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  function setAnswer(isCorrect: Boolean) {
    setScore(isCorrect ? score + 1 : score)

    if (currentQuestionIndex === questions.length - 1) {
      setFinalResults(true)
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  }

  function restartGame() {
    setCurrentQuestionIndex(0)
    setFinalResults(false)
    setScore(0)
  }

  return (

    <div className="App">
      {showFinalResults ? (
        <FinalResult score={score}
          questionsCount={questions.length}
          onRestartHandler={restartGame} ></FinalResult>
      ) : (
        <div>

          {/* Score */}
          <span className='score'>Current score is {score} </span>

          {/* Question */}
          <Question question={questions[currentQuestionIndex]}
            questionIndex={currentQuestionIndex}
            numberOfQuestions={questions.length}
            onAnswer={setAnswer}></Question>
        </div>

      )}
    </div >
  );
}

export default App;
