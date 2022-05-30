import "./App.css";
import "../src/style.scss";
import rand from "./Functions/rand";
import { useState } from "react";

function App() {
  const [result, setResult] = useState("");
  const [streakCPU, setStreakCPU] = useState(0);
  const [streakYou, setStreakYou] = useState(0);

  const compareRock = () => {
    const CPUnum = rand(1, 3);
    let streakCPUCopy = streakCPU;
    let streakYouCopy = streakYou;

    if (CPUnum === 1) {
      setResult("You chose ROCK, computer chose ROCK, it's a draw");
    } else if (CPUnum === 2) {
      setResult("You chose ROCK, computer chose PAPER, computer wins");
      streakCPUCopy += 1;
      setStreakCPU(streakCPUCopy);
      setStreakYou(0);
     
    } else {
      setResult("You chose ROCK, computer chose SCISSORS,  you win");
      streakYouCopy += 1;
      setStreakYou(streakYouCopy);
      setStreakCPU(0);
    }
  };

  const comparePaper = () => {
    const CPUnum = rand(1, 3);
    let streakYouCopy = streakYou;
    let streakCPUCopy = streakCPU;
    if (CPUnum === 1) {
      setResult("You chose PAPER, computer chose ROCK, you win");
      streakYouCopy += 1;
      setStreakYou(streakYouCopy);
      setStreakCPU(0);
    } else if (CPUnum === 2) {
      setResult("You chose PAPER, computer chose PAPER,  it's a draw");
    } else {
      setResult("You chose PAPER, computer chose SCISSORS, computer wins");
      streakCPUCopy += 1;
      setStreakCPU(streakCPUCopy);
      setStreakYou(0);
    }
  };

  const compareScissors = () => {
    const CPUnum = rand(1, 3);
    let streakYouCopy = streakYou;
    let streakCPUCopy = streakCPU;
    if (CPUnum === 1) {
      setResult("You chose SCISSORS, computer chose ROCK, computer wins");
      streakCPUCopy += 1;
      setStreakCPU(streakCPUCopy);
      setStreakYou(0);
    } else if (CPUnum === 2) {
      setResult("You chose SCISSORS, computer chose paper,  you win");
      streakYouCopy += 1;
      setStreakYou(streakYouCopy);
      setStreakCPU(0);
    } else {
      setResult("You chose SCISSORS, computer chose scissors, it's a draw");
    }
  };

  return (
    <>
      <header className="header">Rock Paper Scissors game</header>
      <div className="choice">Make a choice</div>
      <div className="button-block">
        <button onClick={compareRock} className="button">
          {" "}
          Rock
        </button>
        <button onClick={comparePaper} className="button">
          Paper
        </button>
        <button onClick={compareScissors} className="button">
          Scissors
        </button>
      </div>
      <div className="result">
        <b>{result}</b>
      </div>
      <div className="count-block">
        Win streak:
        <div>You <span className="count-you">{streakYou}</span></div>
        <div>Computer <span className="count-cpu">{streakCPU}</span></div>
      </div>
    </>
  );
}

export default App;
