import styled from "styled-components";
import { useState, useRef } from "react";

const Section = styled.section`
  text-align: center;

  & h2 {
    color: #54a399;
  }
  
  & p {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  & input {
    font: inherit;
    border: 1px solid #54a399;
    background-color: #192f2b;
    border-radius: 4px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    padding: 0.25rem;
    color: #d1f0ec;
  }
  
  & button {
    cursor: pointer;
    background-color: #54a399;
    border: 1px solid #54a399;
    padding: 0.4rem 1rem;
    color: #061e1a;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  
  & button:hover {
    background-color: #3c8379;
    border-color: #3c8379;
  }
`;

export default function Player() {
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState('');
  // const [submitted, setSubmitted] = useState(false);


  // const handleChange = (event) => {
  //   setSubmitted(false)
  //   setEnteredPlayerName(event.target.value);
  // }

  const handleClick = () => {
    // setSubmitted(true);
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = "";
  }

  return (
    <Section>
      <h2>Welcome {enteredPlayerName ? enteredPlayerName : "unknown entity"}</h2>
      <p>
        <input 
          ref={playerName} 
          type="text" 
          // onChange={handleChange} 
          // value={enteredPlayerName} 
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </Section>
  );
}
