import Flashcard from "../components/Flashcard";
import Flashcards from "../components/Flashcards";
import Header from "../components/Header";
import Main from "../components/Main";
import { AllFlashcards } from "../data/AllFlashcards";
console.log(AllFlashcards);

function FlashCardsPage() {
  return (
    <>
      <Header>React Flash-cards</Header>

      <Main>
        <Flashcards>
          {AllFlashcards.map((flashcard) => {
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
