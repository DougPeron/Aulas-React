import { useState } from "react";
import Button from "../components/Button";
import Flashcard from "../components/Flashcard";
import Flashcards from "../components/Flashcards";
import Header from "../components/Header";
import Main from "../components/Main";
import RadioButton from '../components/RadioButton';
import { AllFlashcards } from "../data/AllFlashcards";
import { helperShuffleArray } from "../helpers/arrayHelpers";

function FlashCardsPage() {
  const [allCards, setAllCards] = useState(AllFlashcards);
  const [showTitle, setShowTitle] =useState(false);

  function handleButtonClick() {
    const shuflleCards = helperShuffleArray(allCards);
    setAllCards(shuflleCards);
  }
  function handleRadioShowDescriptionClick() {
    setShowTitle(false);
  }

  function handleRadioShowTitleClick() {
    setShowTitle(true);
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
        <div className="flex flex-row items-center justify-center space-x-4 m-4">
          <RadioButton
            id="radioButtonShowTitle"
            name="showInfo"
            buttonChecked={showTitle}
            onButtonClick={handleRadioShowTitleClick}
          >
            Mostrar título
          </RadioButton>

          <RadioButton
            id="radioButtonShowDescription"
            name="showInfo"
            buttonChecked={!showTitle}
            onButtonClick={handleRadioShowDescriptionClick}
          >
            Mostrar descrição
          </RadioButton>
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
