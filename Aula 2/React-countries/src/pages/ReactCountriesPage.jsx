import { useState } from "react";
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
    contryLowercase.length >= 3
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
        <div>
          {filteredCountry.map((contry) => {
            const { id, name, capital, region, population, area, flag } =
            contry;
              
            return (
              <div key={id}>
                <h2>
                  País: {name}
                </h2>
                <h3>
                  Capital:{capital}
                </h3>
                <h3>
                  Região:{region}
                </h3>
                <h3>
                  População:{population}
                </h3>
                <h3>
                  Area:{area}
                </h3>
                <img src={flag}/>
              </div>
            );
          })}
        </div>
      </Main>
    </>
  );
}

export default ReactCountriesPage;
