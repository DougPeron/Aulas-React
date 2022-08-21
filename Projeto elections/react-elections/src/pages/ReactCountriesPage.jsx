import { useState } from "react";
import Button from "../components/Button";
import Candidates from "../components/Candidates";
import CandidatesId from "../components/CandidatesId";
import Header from "../components/Heander";
import Main from "../components/Main";

import { allInformation } from "../data/allInformation";

console.log(allInformation);

function ReactCountriesPage() {
  const [city, setCity] = useState(null);
  const [showCandidates, setShowCandidates] = useState("null");
  console.log(showCandidates);
  function hadleButtonClick(id, name) {
    setCity(name);
    const showSelectedCity = Candidates(id);
    setShowCandidates(showSelectedCity);
  }

  return (
    <>
      <Header>React Countries</Header>
      <Main>
        {allInformation.cities.map((city) => {
          return (
            <Button
              id={city.id}
              value={city.name}
              onButtonClick={hadleButtonClick}
              key={city.id}
            >
              {city.name}
            </Button>
          );
        })}
        <div className="flex flex-col">
          <h1 className="text-center font-semibold mt-4 text-xl">
            Elections City: {city}
          </h1>
          <div className=" p-2">
            {showCandidates.map((candidates) => {
              return (
                <CandidatesId>
                  {candidates.id} = Votes: {candidates.votes}
                </CandidatesId>
              );
            })}
          </div>
        </div>
      </Main>
    </>
  );
}

export default ReactCountriesPage;
