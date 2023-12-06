// import React, { useEffect } from 'react';
// import {Button} from 'semantic-ui-react';


// const MyTimer = () =>{

//   let time = 200;
//   let TimeInMinutes = time * 60 * 60;   
//   let Time = TimeInMinutes / 60;
  
//     //const counting = document.getElementById("count-time");
//     //const data=`<p id="count-time"/>`;
  
//    const Timer = setInterval(function(){
//     const counting = document.getElementById("count-time");
   
//     //  window.onload = {counting}
//       if(Time <= 0) {
//         clearInterval(Timer);
          
//       } else {
//           Time--;
          
//           let sec = Math.floor(Time % 60);
//           let min = Math.floor(Time / 60) % 60;
//           counting.innerHTML = `Time  ${min} : ${sec}`;
//           //const Times = `TIME: ${min} : ${sec}`;
//       }
//   },1000);

 
  
  
//   return (
//     <>
//     <div>
//      <p id="count-time"/>
//     {/* <p dangerouslySetInnerHTML={{__html : data}}></p> */}
//      {/* <p>{Times}></p> */}

//     </div>
//     </>
//   );

// }
// export default MyTimer;


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
      <div style={{ fontSize: "60px" }}>
      <p style={{ color: "skyblue"}}>{isRunning ? "Time left": "Time up"}</p>
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      
    </div>
  );
  
 
}
export default MyTimer;

// export default function MyTimer() {
//   const time = new Date();
//   time.setSeconds(time.getSeconds() + 30); // 20 minutes timer 1200
//   return (
//     <div>
//       <CountDown expiryTimestamp={time} />      {/*defines how time period of timer*/}
//     </div>
    
//   );

// }
