import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import Rules from "./Rules";
import styled from "styled-components";
import RollDice from "./RollDice";
import { Button, OutlineButton } from "../styled/Button";

const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [roll, setRoll] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNum = (max, min) => {
    return Math.floor(Math.random() * (max - min) + 1);
  };

  const rollDice = () => {
    if (!selectedNumber) {
      setError("Please select a number");
      return;
    }
    setError("");
    const randomNum = generateRandomNum(6, 1);
    setRoll((prev) => randomNum);

    if (selectedNumber === randomNum) {
      setScore((prev) => prev + randomNum);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice
        roll={roll}
        rollDice={rollDice}
        // selectedNumber={selectedNumber}
      />
      <div className="btn_section">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide Rules" : "Show Rules"} Rules
        </Button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.div`
  padding: 0 24px;
  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .btn_section {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
  }
`;
