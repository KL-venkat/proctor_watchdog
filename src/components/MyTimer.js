import React from 'react';
import { useTimer } from 'react-timer-hook';

const MyTimer=({ expiryTimestamp }) => {
  const {
    seconds,
    minutes,
    hours,
    
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('Time Up!') });


  return (
    <div style={{textAlign: 'center'}}>
   
     
      <div style={{fontSize: '100px'}}>
       <span>{hours}:</span>:<span>{minutes}:</span>:<span>{seconds}</span>
      </div>
      <br/>
      <p>{isRunning ? 'Running' : 'paused'}</p>
      {/* <button onClick={start}>Start</button> */}
      <button onClick={pause}>Pause</button>
      {/* <button onClick={resume}>Resume</button>  */}
      <button onClick={() => {
       
        const time = new Date();
        time.setSeconds(time.getSeconds() + 300);
        restart(time)
      }}>start</button>
    </div>
  );
}

export default MyTimer;