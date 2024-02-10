import Player from './components/Player.jsx';
import Header from './components/Header.jsx';
import styled from "styled-components";
import TimerChallenge from './components/TimerChallange.jsx';

const DivChallenges = styled.div`
  max-width: 50rem;
  margin: 3rem auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

function App() {
  return (
    <>
      <Header />
      <Player />
      <DivChallenges>
        <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="Not Easy" targetTime={5} />
        <TimerChallenge title="Getting Tough" targetTime={10} />
        <TimerChallenge title="Pros Only" targetTime={15} />
      </DivChallenges>
    </>
  );
}

export default App;
