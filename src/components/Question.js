import React, { useState, useEffect, useRef } from 'react';
import {Button,Container, Card, Header} from 'semantic-ui-react';
import ModallEndTest from './Modall';
import './Question.css'
import MyTimer from './MyTimer'; 
import { useTimer } from 'react-timer-hook';
import End from './End';


const Question = ({ data, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, 
  onSetStep ,  expiryTimestamp, results, quizdata, time}) => {
  const [selected, setSelected] = useState('');
  const [error, setError] = useState('');
  const radiosWrapper = useRef();

  const {seconds, minutes, hours} = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called")
  });

  useEffect(() => {
    const findCheckedInput = radiosWrapper.current.querySelector('input:checked');
    if(findCheckedInput) {
      findCheckedInput.checked = false;
    }
  }, [data]);

  const changeHandler = (e) => {
    setSelected(e.target.value);
    if(error) {
      setError('');
    }
  }
  
  const nextClickHandler = (e) => {
    if(selected === '') {
      return setError('Please select one option!');
    }
    onAnswerUpdate(prevState => [...prevState, { q: data.question, a: selected }]);
    setSelected('');
    if(activeQuestion < numberOfQuestions - 1) {
      onSetActiveQuestion(activeQuestion + 1);
    }else {
      onSetStep(3);
    }
  }
 
  if(seconds === 0 && minutes === 0 && hours === 0)
  {
    console.log("Time ended");
    return(
      <End 
      results={results}
      quizdata={quizdata}
      time={time}
      />
    )
  }
  return(
    <>
      <Container className='displayQuestions'>
      <div  className="card">
        
          <MyTimer expiryTimestamp={expiryTimestamp}/>
           <p className='questions'>{data.question}</p>
           {/* <Header as='h1' color='red'>{data.question}</Header> */}
            <div className="control" ref={radiosWrapper}>
              {data.choices.map((choice, i) => (
              <label  className="radio has-background-light" key={i}>
              <h1> <input  type="radio" name="answer" size='h1' color='black' value={choice} onChange={changeHandler} />
                {choice}</h1> 
              </label>
              ))}
            </div>
            {error && <div className="has-text-error">{error} 
          </div>}
        </div>
      
      <h4 className='modall'>
     <Button size="medium" color='blue' textAlign='center' onClick={nextClickHandler}>Next</Button >  

     {/* <EndModal/> */}
      <ModallEndTest/>
      </h4>
     
     </Container>

    </>
  )
}      
export default Question;