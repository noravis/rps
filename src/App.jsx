
import './App.css';
import '../src/style.scss'
import rand from './Functions/rand';
import { useState } from 'react';

function App() {


const [result, setResult] = useState('');
const [streakCPU, setStreakCPU] = useState(0);
const [streakYou, setStreakYou] = useState(0)

const compareRock = () => {
const CPUnum = rand(1,3);
let streakCPUCopy = streakCPU;
let streakYouCopy = streakYou;


if (CPUnum === 1) {
  setResult('you chose ROCK, computer chose ROCK, its a draw');
} else if (CPUnum === 2) {
  setResult('you chose ROCK, computer chose PAPER, computer wins');
  streakCPUCopy +=1 
  setStreakCPU(streakCPUCopy);
  setStreakYou(0)
 
} else {
  setResult('you chose ROCK, computer chose SCISSORS,  you win');
  streakYouCopy +=1
  setStreakYou(streakYouCopy);
  setStreakCPU(0)
}

}

const comparePaper = () => {
  const CPUnum = rand(1,3);
  let streakYouCopy = streakYou;
  let streakCPUCopy = streakCPU
  if (CPUnum === 1) {
    setResult('you chose PAPER, computer chose ROCK, you win');
    streakYouCopy += 1
    setStreakYou(streakYouCopy)
    setStreakCPU(0)
  } else if (CPUnum === 2) {
    setResult('you chose PAPER, computer chose PAPER,  its a draw');
  } else {
    setResult(' you chose PAPER, computer chose SCISSORS, computer wins');
    streakCPUCopy += 1
    setStreakCPU(streakCPUCopy)
    setStreakYou(0)
  }
  
  }

  const compareScissors = () => {
    const CPUnum = rand(1,3);
    let streakYouCopy = streakYou;
    let streakCPUCopy = streakCPU
    if (CPUnum === 1) {
      setResult('you chose SCISSORS, computer chose ROCK, computer wins');
      streakCPUCopy += 1
      setStreakCPU(streakCPUCopy)
      setStreakYou(0)

    } else if (CPUnum === 2) {
      setResult('you chose SCISSORS, computer chose paper,  you win');
      streakYouCopy += 1
      setStreakYou(streakYouCopy)
      setStreakCPU(0)
    } else {
      setResult('you chose SCISSORS, computer chose scissors, its a draw'); 
    }
    
    }

  return (
    <>
    <div className="App">
      Rock Paper Scissors game
    </div>
    <div className='button-block'>
      <button onClick={compareRock}> Rock</button>
      <button onClick={comparePaper}>Paper</button>
      <button onClick={compareScissors}>Scissors</button>
    </div>
    <div className='result'><b>{result}</b></div>
    <div>win streak: 
      <div>You {streakYou}</div>
      <div>Computer {streakCPU}</div>
    </div>
  
    
    
    </>
  );
}

export default App;
