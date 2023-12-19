import React from 'react';
import { Button,Header } from 'semantic-ui-react';

const Start = ({ onQuizStart}) => {
  return(
    <div className="card">
      <div className="card-content">
        <div className="content">
          <Header className='start' color='white' as='h1'  >Click to Start the Examination</Header>
          <Header className='greet-for-test' color='green' as='h2'>Good luck!</Header>
          <Button className ='TgScreen' as='h1' size='massive' primary  onClick={onQuizStart}>Start</Button>
        </div>
      </div>
    </div>
  );
}

export default Start;






