import React, { useState } from "react";

function Flashcard({ flashcard }) {
  const [flip, setFlip] = useState(false);
  return (
    <div
      className={`card ${flip ? `flip` : ""}`}
      onClick={() => setFlip(!flip)}
    >
      <div className="front">
        {flashcard.Question}
        <div className="flashcard-options">
          {flashcard.options.map((option) => {
            return (
              <div className="flashcard-option" key={option}>
                {option}
              </div>
            );
          })}
        </div>
      </div>
      <div className="back">{flashcard.answer}</div>
    </div>
  );
}

export default Flashcard;
