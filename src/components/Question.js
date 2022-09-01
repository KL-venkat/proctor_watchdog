import React, { useState, useEffect, useRef } from 'react';
import {Button,Header,Card,Container} from 'semantic-ui-react';
import EndModal from './EndModal';
import Application from './Application';
import Modall from './Modall';
import './Question.css'


const Question = ({ data, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep }) => {
  const [selected, setSelected] = useState('');
  const [error, setError] = useState('');
  const radiosWrapper = useRef();

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
 
  return(

      <>
      
      <Container>
      <div  className="card">
        <div className="card-content">
          <div className="content"> 
           <p>{data.question}</p>
           {/* <Header as='h1' color='red'>{data.question}</Header> */}
            <div className="control" ref={radiosWrapper}>
              {data.choices.map((choice, i) => (
              <label  className="radio has-background-light" key={i}>
              <h1> <input  type="radio" name="answer" size='h1' value={choice} onChange={changeHandler} />
                {choice}</h1> 
              </label>
              ))}
            </div>
            {error && <div className="has-text-danger">{error} 
          </div>}
        </div>
      </div>
              
        {/* <button className="button is-link is-medium is-fullwidth mt-4" onClick={nextClickHandler}>Next</button> */}
        {/* </div>

        
        {/* </Card.Content>
        </Card> */}

      <div>
     
      {/* <Button color='red' textAlign='center' onClick={ <EndModal/>}>End Test</Button>  */}
      
      </div>
   
      {/* <Button size="huge" color='blue' textAlign='center' onClick={nextClickHandler}>Next</Button > 
      <EndModal/> */}
      
     </div>

      
      <h4 className='modall'>
     <Button size="huge" color='blue' textAlign='center' onClick={nextClickHandler}>Next</Button >  

     {/* <EndModal/> */}
      <Modall/>
      </h4>
      
      </Container>
     
     </>
  )
}
      
export default Question;