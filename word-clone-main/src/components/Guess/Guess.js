import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";

  return <span className={className}>{letter}</span>;
}

function Guess({ value, answer }) {
  const results = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((number) => (
        <Cell
          key={number}
          letter={results ? results[number]?.letter : undefined}
          status={results ? results[number]?.status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
