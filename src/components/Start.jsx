import React from 'react';
import { Button,Header, Image, Container, Card } from 'semantic-ui-react';

const Start = ({ onQuizStart}) => {
  return(
        // <Card>
        //   <Header className='start' color='white' as='h1'  >Click to Start the Examination</Header>
        //   <Header className='greet-for-test' color="yellow" as='h1'>Good luck!</Header>
        //   <Button className ='TgScreen' as='h1' size='huge' primary  onClick={onQuizStart}>Start Test</Button>
        // </Card>
        <Card
          header ="Click to Start the Examination"
          description= "Good luck!"
          onClick={onQuizStart}
          className='start-card'
          color='blue'  
        />
  );
}

export default Start;






