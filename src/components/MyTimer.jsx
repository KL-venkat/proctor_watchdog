import React from "react";                                      //initialising timer component
import { useTimer } from "react-timer-hook";
import End from './End'



const MyTimer =({ expiryTimestamp }) => {
  const {
    seconds,
    minutes,
    hours,
    isRunning,
    
  } = useTimer({
    expiryTimestamp,
    // onExpire: () => console.warn("onExpire called")
    onExpire: () => console.warn("onExpire called")
  });


  return (
    <div className='timerDiv' style={{ textAlign: "right"}}> 
      <p className="timeLeft">{isRunning ? "Time left": "Time up"}</p>
        <span className="timeDisplay" style={{fontSize: "30px"}}>{hours} : {minutes} : {seconds}</span>  
    </div>
  );
}
export default MyTimer;

