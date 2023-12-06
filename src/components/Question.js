import React, { useState, useEffect, useRef } from 'react';
import {Button,Header,Card,Container} from 'semantic-ui-react';
import EndModal from './EndModal';
import Application from './Application';
import ModallEndTest from './Modall';
import './Question.css'
import MyTimer from './MyTimer';
import { useTimer } from 'react-timer-hook';
import End from './End';


const Question = ({ data, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep , handleClick, expiryTimestamp, results, quizdata, time}) => {
  const [selected, setSelected] = useState('');
  const [error, setError] = useState('');
  const radiosWrapper = useRef();
  const [count, setCount] = useState(0);

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
    
      <Container>
      <div  className="card">
        <div className="card-content">
          <div className="content"> 
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
            {error && <div className="has-text-danger">{error} 
          </div>}
        </div>
      </div>

     </div>

      
      <h4 className='modall'>
     <Button size="huge" color='blue' textAlign='center' onClick={nextClickHandler}>Next</Button >  

     {/* <EndModal/> */}
      <ModallEndTest/>
      </h4>
     
     </Container>
     
     
     </>
  )
}
      
export default Question;