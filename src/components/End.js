import React, { useEffect, useState } from 'react';
import {Card, Icon} from 'semantic-ui-react';

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
      <Card color='blue' fluid className='test-results'>
        <Card.Content>
          <Card.Header as="h1">Your Results <Icon circular color='blue' name='hand point down outline'/></Card.Header>
          <Card.Meta as="h4" textAlign='center'>Attempted Questions attempted: <tb/>{correctAnswers} of {quizdata.length}</Card.Meta>
          <Card.Meta as="h4" textAlign='center'>Attempted Correct Answers:<h3>{Math.floor((correctAnswers / quizdata.length) * 100)}%</h3></Card.Meta>
          <Card.Description as='h2'>Greetings, Thanks for taking test Our Recruiting team will get back to you!</Card.Description>
        </Card.Content>
      </Card>
    </>
  );
}

export default End;