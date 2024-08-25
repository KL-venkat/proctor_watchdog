import React from 'react';
import  { useState, useEffect } from 'react';
import './App.css';
//import OpenForm from './components/CandidateForm/OpenForm';    
import Start from './components/Start';
import Question from './components/Question';
import End from './components/End';
import Modal from './components/Modal';
import quizData from './data/Test.json';
import {Header, Icon} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

 let interval;
  const App = () => {

  const timer = new Date();
  timer.setSeconds(timer.getSeconds() + 1200);  //time limit 20 min
  
  const [step, setStep] = useState(1);           //state for ui pages   
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if(step === 3) {
      clearInterval(interval);
    }
  }, [step]);

  
  const DIV = document.querySelector('div')

  const quizStartHandler = () => {
    setStep(2);
    if (document.fullscreenElement)
        document.exitFullscreen()
      else
        DIV.requestFullscreen()
     
    interval = setInterval(() => {
     
      setTime(prevTime => prevTime + 1);
    }, 1000);
  }

  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setStep(2);
    setTime(0);
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);

  }
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(0);

  const handleClick = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(0);
      return;
    }
    const newIntervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    setIntervalId(newIntervalId);
  };

  return (
    <>
     {/* <div><CandidateInfo/></div> */}
      <div className="flex-container">
        <Header as='h1' textAlign='left'>Online Examination <Icon className="men" name='bars' corner="ceter"/></Header> 
      </div>
     <br/>
      <div className="App">
    
       {step === 1 && <Start onQuizStart={quizStartHandler} />}

       {step === 2 && <Question 
      
        data={quizData.data[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={quizData.data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
        handleClick={handleClick}     

        expiryTimestamp={timer}
        results={answers}
        quizdata={quizData.data}
        time={time}
        />}   

        {step === 3 && <End 
            results={answers}
            quizdata={quizData.data}
            onReset={resetClickHandler}
            onAnswersCheck={() => setShowModal(true)}
            time={time}
        />}

        {showModal && <Modal 
          onClose={() => setShowModal(false)}
          results={answers}
          data={quizData.data}
        />}

      </div>
      <br/>
      <div>
      </div>
      <br/> 
    </>
  )   
}
export default App;
