import React, { useEffect, useState } from 'react';

import { formatTime } from '../utils';


const End = ({ results, quizdata, onReset, onAnswersCheck, time,seconds }) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    let correct = 0;
    results.forEach((result, index) => {
      if(result.a === quizdata[index].answer) {
        correct++;
      }
    });
    setCorrectAnswers(correct);
    // eslint-disable-next-line
  }, []);

  return(
    <>
    <div className="card">
      <div className="card-content">
        <div className="content">
          <p className='endtest'>Your results</p>
          <p>{correctAnswers} of {quizdata.length}</p>
          <p className='endtest'><strong>{Math.floor((correctAnswers / quizdata.length) * 100)}%</strong></p>
          <p className='endtest'>Greetings, Thanks for taking test Our Recruiting team will get back to you!</p>
        </div>
      </div>
    </div>

    </>
  );
}

export default End;