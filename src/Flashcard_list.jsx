import React from "react";
import Flashcard from "./Flashcard";

function Flashcard_list({ flashcards }) {
  //destructuring
  return (
    <div className="card-grid">
      {flashcards.map((flashcard) => {
        return <Flashcard flashcard={flashcard} key={flashcard.id} />;
      })}
    </div>
  );
}

export default Flashcard_list;
