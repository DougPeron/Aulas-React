import { useState } from "react";
import Button from "../components/Button";
import Flashcard from "../components/Flashcard";
import Flashcards from "../components/Flashcards";
import Header from "../components/Header";
import Main from "../components/Main";
import { AllFlashcards } from "../data/AllFlashcards";
import { helperShuffleArray } from "../helpers/arrayHelpers";

function FlashCardsPage() {
  const [allCards, setAllCards] = useState(AllFlashcards);

  function handleButtonClick() {
    const shuflleCards = helperShuffleArray(allCards);
    setAllCards(shuflleCards);
    console.log(allCards);
  }
  return (
    <>
      <Header>React Flash-cards</Header>

      <Main>
        <div className="mb-4 text-center">
          <Button onButtonClick={handleButtonClick}>
            Embaralhar Flashcards
          </Button>
        </div>
        <Flashcards>
          {allCards.map((flashcard) => {
            return (
              <Flashcard
                key={flashcard.id}
                title={flashcard.title}
                description={flashcard.description}
              ></Flashcard>
            );
          })}
        </Flashcards>
      </Main>
    </>
  );
}

export default FlashCardsPage;
