import React, { useEffect, useState } from 'react';
import { Button,Card,Header } from 'semantic-ui-react';



const Start = ({ onQuizStart}) => {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(0);

 
  return(
    <div className="card">
      <div className="card-content">
        <div className="content">
    
          <Header className='start' color='white' as='h1'  >Click to Start the Examination</Header>
          <Header as='h2' color='white'>Good luck!</Header>
          <Button className ='TgScreen' as='h1' size='massive' primary  onClick={onQuizStart}>Start</Button>
        

          
          

        </div>
      </div>
    </div>
  );
}

export default Start;






