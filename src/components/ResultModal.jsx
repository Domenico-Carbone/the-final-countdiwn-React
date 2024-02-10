import styled from "styled-components";
import { forwardRef, useImperativeHandle, useRef } from "react";
import {createPortal} from 'react-dom'

export const Result = styled.dialog`
  border: none;
  border-radius: 8px;
  padding: 2rem;
  background-color: #d7fcf8;

&[open] {
  animation: slide-in-from-top 0.35s ease-out;
}

&::backdrop {
  background: rgba(0, 0, 0, 0.9);
}

& h2 {
  font-family: 'Handjet', monospace;
  margin: 0 0 0.25rem 0;
  font-size: 3rem;
  text-transform: uppercase;
}

& progress {
  width: 100%;
  height: 1.5rem;
  margin: 0;
  accent-color: #46cebe;
}

 & p {
  margin: 0.5rem 0;
  font-size: 1.2rem;
}

& p strong {
  color: #10655b;
}

& form {
  text-align: right;
}

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

@keyframes slide-in-from-top {
  0% {
    transform: translateY(-15%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}


`;

const ResultModal = forwardRef(function ResultModal({remainingTime, targetTime, onReset}, ref){
    
    const userLost = remainingTime<=0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
    const dialog = useRef();
    const store = Math.round((1 - remainingTime / (targetTime*1000)) * 100)
    useImperativeHandle(ref, ()=>{
        return {
            open() {
                dialog.current.showModal();
            },
        }
    })
    
    return createPortal((
        <Result ref={dialog} onClose={onReset}>
            {userLost && <h2>You Lost</h2>}
            {!userLost && <h2>Your score: {store}</h2>}
            <p>The target time was <storng>{targetTime}</storng> second{targetTime>1 && "s"}.</p>
            <p>Ypu stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong></p>
            <form onSubmit={onReset} method="dialog">
                <button>Close</button>
            </form>
        </Result>
    ), document.getElementById("modal"));
});

export default ResultModal;