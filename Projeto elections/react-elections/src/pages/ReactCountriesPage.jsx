import { useState } from "react";
import Cities from "../components/Cities";
import Elections from "../components/Elections";
import Header from "../components/Heander";
import Main from "../components/Main";
import TextInput from "../components/TextInput";
import { allInformation } from "../data/allInformation";

console.log(allInformation);

function ReactCountriesPage() {
  const [city, setCity] = useState("Seu nome");

  function handleCityChange(newCity) {
    setCity(newCity);
  }

  return (
    <>
      <Header>React Countries</Header>

      <Main>
        <TextInput
          labelDecription="Pesquise a Cidade"
          inputValue={city}
          onInputChange={handleCityChange}
          autoFocus
        />

        <Elections />
      </Main>
    </>
  );
}

export default ReactCountriesPage;
