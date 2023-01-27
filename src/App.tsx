import React, { useState } from 'react';
import './App.css';

function App() {

  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const questions = [
    {
      text: "What is the capital of America?",
      options: [
        { id: 0, text: "New York City", isCorrect: false },
        { id: 1, text: "Boston", isCorrect: false },
        { id: 2, text: "Santa Fe", isCorrect: false },
        { id: 3, text: "Washington DC", isCorrect: true },
      ],
    },
    {
      text: "What year was the Constitution of America written?",
      options: [
        { id: 0, text: "1787", isCorrect: true },
        { id: 1, text: "1776", isCorrect: false },
        { id: 2, text: "1774", isCorrect: false },
        { id: 3, text: "1826", isCorrect: false },
      ],
    },
    {
      text: "Who was the second president of the US?",
      options: [
        { id: 0, text: "John Adams", isCorrect: true },
        { id: 1, text: "Paul Revere", isCorrect: false },
        { id: 2, text: "Thomas Jefferson", isCorrect: false },
        { id: 3, text: "Benjamin Franklin", isCorrect: false },
      ],
    },
    {
      text: "What is the largest state in the US?",
      options: [
        { id: 0, text: "California", isCorrect: false },
        { id: 1, text: "Alaska", isCorrect: true },
        { id: 2, text: "Texas", isCorrect: false },
        { id: 3, text: "Montana", isCorrect: false },
      ],
    },
    {
      text: "Which of the following countries DO NOT border the US?",
      options: [
        { id: 0, text: "Canada", isCorrect: false },
        { id: 1, text: "Russia", isCorrect: true },
        { id: 2, text: "Cuba", isCorrect: true },
        { id: 3, text: "Mexico", isCorrect: false },
      ],
    },
  ];

  
  function setAnswer(isCorrect: Boolean) {
     setScore(isCorrect ? score+1: score)

    if(currentQuestionIndex === questions.length -1){
      setFinalResults(true)
    }else{
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  }

  function restartGame(){
    setCurrentQuestionIndex(0)
    setFinalResults(false)
    setScore(0)
  }

  
  return (

    <div className="App">
      {showFinalResults ? (
        // Result
        <div className='final-results-wrapper'>
          <h1>Final Results</h1>
          <h2>{score} out of {questions.length} is correct - ({score/questions.length*100}%)</h2>
          <button onClick={restartGame}>Restart game</button>
        </div>
      ) : (
        <div>
          {/* Score */}
          Current score is {score}

          {/* Question */}
          <div className='question-section-wrapper'>
            <span className='progress-text'>Question 1 of 9 </span>
            <span className='question-text'>{questions[currentQuestionIndex].text}</span>

            <ul className='answers-wrapper'>
              {
                questions[currentQuestionIndex].options.map(answer => {
                  return <li key={answer.id} onClick={() => {
                    setAnswer(answer.isCorrect)
                  } }>{answer.text}</li>;
                })
              }
            </ul>
          </div>

        </div>

      )}
    </div >
  );
}

export default App;
