import { useState } from "react";
import Countries from "../components/Contries";
import Header from "../components/Heander";
import Main from "../components/Main";
import TextInput from "../components/TextInput";
import { allCountries } from "../data/countries";

function ReactCountriesPage() {
  const [country, setCountry] = useState("Brazil");

  function handlerCountrie(newCountry) {
    setCountry(newCountry);
  }
  const contryLowercase = country.toLocaleLowerCase();
  const filteredCountry =
    contryLowercase.trim().length >= 3
      ? allCountries.filter(({ nameLowerCase }) => {
          return nameLowerCase.includes(contryLowercase);
        })
      : allCountries;
  console.log(filteredCountry);
  return (
    <>
      <Header>React Countries</Header>

      <Main>
        <TextInput
          labelDecription="Pesquise o país, pelo menos 3 caracteres"
          inputValue={country}
          onInputChange={handlerCountrie}
          autoFocus
        />
        <Countries>{filteredCountry}</Countries>
      </Main>
    </>
  );
}

export default ReactCountriesPage;
