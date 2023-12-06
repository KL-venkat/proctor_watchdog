import React, { useEffect, useState } from 'react';

import { formatTime } from '../utils';

const End = ({ results, data, onReset, onAnswersCheck, time }) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    let correct = 0;
    results.forEach((result, index) => {
      if(result.a === data[index].answer) {
        correct++;
      }
    });
    setCorrectAnswers(correct);
    // eslint-disable-next-line
  }, []);

  return(
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h1 className='endtest'>Your results</h1>
          {/* <p>{correctAnswers} of {data.length}</p> */}
          <p className='endtest'><strong>{Math.floor((correctAnswers / data.length) * 100)}%</strong></p>
          <p className='endtest'><strong>Your time:</strong> {formatTime(time)}</p>
          <h2 className='endtest'>Greetings, Thanks for taking test Our Recruiting team will get back to you!</h2>
          {/* <button className="button is-info mr-2" onClick={onAnswersCheck}>Check your answers</button> */}
          {/* <button className="button is-success" onClick={onReset}>Try again</button> */}
        </div>
      </div>
    </div>
  );
}

export default End;