import React from 'react';
import { useTimer } from 'react-timer-hook';

function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


  return (
      <div style={{textAlign: 'center'}}>
       <div style={{fontSize: '16px'}}>
        Session Timeout In : <span>{minutes}</span>:<span>{seconds}</span> mins
      </div>
     
    </div>
  );
}

export default function CountDownTimer() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 1800); // 10 minutes timer
  return (
    <div>

      <MyTimer expiryTimestamp={time} />
    </div>
  );
}