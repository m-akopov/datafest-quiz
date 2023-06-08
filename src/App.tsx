import React, { useState } from 'react';
import './App.css';
import { questions } from './assets/questions';
import Question from './components/Question';
import FinalResult from './components/FinalResult';

function App() {

  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  function setAnswer(point: number) {
    setScore(score + point)

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
        
        <div className={`question-page-background`} style={{backgroundImage: `url(${require(`${questions[currentQuestionIndex].bgImage}`)})`, backgroundColor: `${questions[currentQuestionIndex].bgColor}` }}>
          <div>
            {/* Question */}
            <Question question={questions[currentQuestionIndex]}
              questionIndex={currentQuestionIndex}
              numberOfQuestions={questions.length}
              onAnswer={setAnswer}></Question>
          </div>
        </div>

      )}
    </div >
  );
}

export default App;
