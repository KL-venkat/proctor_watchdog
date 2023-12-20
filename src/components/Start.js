import React from 'react';
import { Button,Header, Image } from 'semantic-ui-react';

const Start = ({ onQuizStart}) => {
  return(
        <div className="card">
          <Header className='start' color='white' as='h1'  >Click to Start the Examination</Header>
          <Header className='greet-for-test' color="yellow" as='h1'>Good luck!</Header>
          <Button className ='TgScreen' as='h1' size='huge' primary  onClick={onQuizStart}>Start Test</Button>
        </div>
  );
}

export default Start;






