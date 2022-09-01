import React from 'react';
import { Button,Card,Header } from 'semantic-ui-react';

const Start = ({ onQuizStart,onToggleScreen }) => {
  return(
    <div className="card">
      <div className="card-content">
        <div className="content">
    
          <Header color='white' as='h1'  >Click to Start the Examination</Header>
          <Header as='h3'>Good luck!</Header>
          <Button className='TgScreen' as='h1' size='massive' primary  onClick={onQuizStart}>Start</Button>
          
          

        </div>
      </div>
    </div>
  );
}

export default Start;