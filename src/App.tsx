import React, { useState } from 'react';
import './App.css';
import { questions } from './assets/questions';
import Question from './components/Question';
import FinalResult from './components/FinalResult';
import HomePage from './components/HomePage';
import GeneralInfo from './components/GeneralInfo';

function App() {
  const [showHome, setShowHome] = useState(true);
  const [showFinalResults, setFinalResults] = useState(false);
  const [showGeneralInfo, setShowGeneralInfo] = useState(false);
  const [showQuestionary, setShowQuestionary] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const data = new Array(19).fill(0).reduce((prev, curr) => [...prev, {
    x: prev.slice(-1)[0].x + 1,
    y: prev.slice(-1)[0].y * (0.9 + Math.random() * 0.2) 
  }], [{x: 0, y: 10}]);


  function setAnswer(point: number) {
    setScore(score + point)

    if (currentQuestionIndex === questions.length - 1) {
      showFinalScorePage()
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  }

  function restartGame() {
    setCurrentQuestionIndex(0)
    showQuestionaryPage()
    setScore(0)
  }

  function showHomePage(){
    setShowHome(true)
    setShowGeneralInfo(false)
    setShowGeneralInfo(false)
    setShowQuestionary(true)
  }

  function showGeneralInfoPage(){
    setShowHome(false)
    setShowGeneralInfo(true)
    setFinalResults(false)
    setShowQuestionary(true)
  }

  function showFinalScorePage(){
    setShowHome(false)
    setShowGeneralInfo(false)
    setFinalResults(true)
    setShowQuestionary(true)
  }

  function showQuestionaryPage(){
    setShowHome(false)
    setShowGeneralInfo(false)
    setFinalResults(false)
    setShowQuestionary(true)
  } 

  return (
    <div className="App">
      { showHome? 
      ( <HomePage onStartTest = {()=> {  showQuestionaryPage()}}
      onReadGeneralInfo ={()=> {  showGeneralInfoPage()}}
      ></HomePage>) :
      showGeneralInfo ? (
        <GeneralInfo onStartTest={()=> { showQuestionaryPage()}} onGoBackClicked = {()=> {showHomePage()} }></GeneralInfo>
      ) :
      showFinalResults ? (
        <FinalResult score={score}
          questionsCount={questions.length}
          onRestartHandler={restartGame} ></FinalResult>
      ) : showQuestionary ? ( 
        <div className={`question-page-background`} style={{backgroundImage: `url(${require(`${questions[currentQuestionIndex].bgImage}`)})`, backgroundColor: `${questions[currentQuestionIndex].bgColor}` }}>
          <div>
            {/* Question */}
            <Question question={questions[currentQuestionIndex]}
              questionIndex={currentQuestionIndex}
              numberOfQuestions={questions.length}
              onAnswer={setAnswer}></Question>
          </div>
        </div>

      ): null}
    </div >
  );
}

export default App;
