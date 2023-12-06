// import React, { useState, useEffect } from 'react';
// import './App.css';

// import Start from './components/Start';
// import Question from './components/Question';
// import End from './components/End';
// import Modal from './components/Modal';
// import quizData from './data/Test.json';
// import {Header,Button} from 'semantic-ui-react';
// import Modall from './components/Modall';
// import MyTimer from './components/MyTimer'

// let interval;

// const App = () => {
//   const timer = new Date();
//   timer.setSeconds(timer.getSeconds() + 100);

//   const [step, setStep] = useState(1);
//   const [activeQuestion, setActiveQuestion] = useState(0);
//   const [answers, setAnswers] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [time, setTime] = useState(0);

//   useEffect(() => {
//     if(step === 3) {
//       clearInterval(interval);
//     }
//   }, [step]);
  
//   const DIV = document.querySelector('div')
//   const quizStartHandler = () => {
//     setStep(2);
//     if (document.fullscreenElement)
//         document.exitFullscreen()
//       else
//         DIV.requestFullscreen()
//     interval = setInterval(() => {
//       <MyTimer/>
//       setTime(prevTime => prevTime + 1);
//     }, 1000);
//   }


  


//   const resetClickHandler = () => {
//     setActiveQuestion(0);
//     setAnswers([]);
//     setStep(2);
//     setTime(0);
//     interval = setInterval(() => {
//       setTime(prevTime => prevTime + 1);
//     }, 1000);
//   }

//   // document.querySelector("div.lightbox").addEvenListener("keydown",function(e){
//   //   var charCode = e.charCode || e.keyCode || e.which;
//   //   if(charCode === 27){
//   //   alert("error");
//   //   return false;
//   //   }
//   //   });

//     // window.addEventListener("keydown",chekKeyPress,false);

//     // function chekKeyPress(key)
//     // {
//     //   if(key.keycode === '27')
//     //   {
//     //     alert("error")
//     //   }
//     // }
  

//   return (
//     <>
    
//     <div className="flex-container">
      
       
//           <Header as='h1' textAlign='left'>Online Examination </Header> 
          
//       </div>
//       {/* <div><Button size='huge' onClick={toggleFullscreen}>Toggle Fullscreen!</Button></div> */}
     
//     <div className="App">
//       {/* {step === 1 && <Start onQuizStart={quizStartHandler} onToggleScreen={toggleFullscreen} />} */}
//        {step === 1 && <Start onQuizStart={quizStartHandler} />}
   
//       {step === 2 && <Question 
      
//         data={quizData.data[activeQuestion]}
//         onAnswerUpdate={setAnswers}
//         numberOfQuestions={quizData.data.length}
//         activeQuestion={activeQuestion}
//         onSetActiveQuestion={setActiveQuestion}
//         onSetStep={setStep}
//       />}
//       {step === 3 && <End 
//         results={answers}
//         data={quizData.data}
//         onReset={resetClickHandler}
//         onAnswersCheck={() => setShowModal(true)}
//         time={time}
//       />}

//       {showModal && <Modal 
//         onClose={() => setShowModal(false)}
//         results={answers}
//         data={quizData.data}
//       />}
//     </div>

//           <MyTimer/>
//     </>
//   );
// }

// export default App;



import React from 'react';
import  { useState, useEffect } from 'react';
import './App.css';

import Start from './components/Start';
import Question from './components/Question';
import End from './components/End';
import Modal from './components/Modal';
import quizData from './data/Test.json';
import {Header,Button} from 'semantic-ui-react';
import Modall from './components/Modall';
import MyTimer from './components/MyTimer'
import {useTimer} from 'react-timer-hook'

let interval;

//const App = ({expiryTimestamp}) => {
//   const {
//     seconds,
//     minutes,
//     hours,
//     isRunning,
//     start,
//     pause,
//     resume,
//     restart,
//   }=useTimer({expiryTimestamp, onExpire:()=>console.warn('Time up!')})
  const App = () => {
    const timer = new Date();
  timer.setSeconds(timer.getSeconds() + 100);

  const [step, setStep] = useState(1);
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
 const loop=()=>
 {
    quizStartHandler()
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




  return (
    <>
      <div className="flex-container">
      
       
        <Header as='h1' textAlign='left'>Online Examination </Header> 
          
      </div>
      {/* <div><Button size='huge' onClick={toggleFullscreen}>Toggle Fullscreen!</Button></div> */}
     
      <div className="App">
        {/* {step === 1 && <Start onQuizStart={quizStartHandler} onToggleScreen={toggleFullscreen} />} */}
        {step === 1 && <Start onQuizStart={quizStartHandler} onTimer={loop} />}
   
        {step === 2 && <Question 
      
          data={quizData.data[activeQuestion]}
          onAnswerUpdate={setAnswers}
          numberOfQuestions={quizData.data.length}
          activeQuestion={activeQuestion}
          onSetActiveQuestion={setActiveQuestion}
          onSetStep={setStep}
        />}

        {step === 3 && <End 
          results={answers}
          data={quizData.data}
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
      <MyTimer/>
      </div>
      
     
    </>
  )
    

}
export default App;
