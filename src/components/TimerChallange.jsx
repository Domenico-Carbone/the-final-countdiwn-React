import styled from "styled-components";
import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

const Challenge = styled.section`
    width: 22rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    margin: 2rem auto;
    background: linear-gradient(#4df8df, #4df0f8);
    color: #221c18;
    box-shadow: 0 2px 8px rgba(35, 34, 34, 0.6);
    border-radius: 6px;
  
  & button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    background: #12352f;
    color: #edfcfa;
    font-size: 1.2rem;
    cursor: pointer;
  }
  
  & button:hover {
    background: #051715;
  }
  
  & h2 {
    font-size: 1.5rem;
    letter-spacing: 0.1em;
    margin: 0;
    text-align: center;
    text-transform: uppercase;
    color: #221c18;
  }
  
  .challenge-time {
    border: 1px solid #46cebe;
    border-radius: 4px;
    padding: 0.25rem 0.5rem;
    margin: 0.5rem;
  }
  
  .active {
    animation: flash 1s infinite;
  }

  @keyframes flash {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }

`;


export default function TimerChallenge({title, targetTime}){
//   const [timerExpired, setTimerExpired] = useState(false);
//   const [timerStarted, setTimerStarted] = useState(false);
  const [timerRemaining, setTimerRemaining] = useState(targetTime*1000);
  
  const timerIsActive = timerRemaining > 0 && timerRemaining < targetTime*1000
  const dialog = useRef();
  const timer = useRef(); 

  function handleStart(){
    timer.current = setInterval(() => {
    //   setTimerExpired(true);
    //   dialog.current.open();
    setTimerRemaining(prevTime => prevTime-10)
    }, 10);
    // setTimerStarted(true);
  }


  if(timerRemaining<=0){
    clearInterval(timer.current);
    //setTimerRemaining(targetTime*1000);
    dialog.current.open();
  }

  function handleReset(){
    setTimerRemaining(targetTime*1000);
  }

  function handleStop(){
    dialog.current.open();
    clearInterval(timer.current);
  }
    
    return(
        <>
            <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timerRemaining} onReset={handleReset} />
            <Challenge>
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? "s" : ""}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart} >{timerIsActive ? "Stop" : "Start"} Challenge</button>
                </p>
                <p className={timerIsActive ? "active" : undefined}>
                    {timerIsActive ? "Time is running..." : "Timer inactive"}
                </p>
            </Challenge>
        </>
    );
}