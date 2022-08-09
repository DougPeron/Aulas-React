import { useState } from "react";

import DateInput from "./components/DateInput";
import Header from "./components/Heander";
import Main from "./components/Main";
import TextInput from "./components/TextInput";
import { getAgeFrom } from "./helpers/dateHelper";

export default function App() {
  //modo de usar useState não usual:
  // const state = useState("Douglas");
  // const name = state[0];
  // const setName = state[1];

  //Formato usual:
  const [name, setName] = useState("Seu nome");
  const [date, setDate] = useState(" 2022-01-01");

  function handleNameChange(newName) {
    setName(newName);
  }

  function handleDateChange(newDate) {
    setDate(newDate);
  }

  return (
    //Fragment <> ou <Fragment>
    <>
      <Header>Componente Header - Projeto React Hello!</Header>

      <Main>
        <TextInput
          labelDecription="Digite seu nome: "
          inputValue={name}
          onInputChange={handleNameChange}
        />
        <DateInput
          labelDecription="Data de Nascimento:"
          inputValue={date}
          onInputChange={handleDateChange}
        />

        <p>
          O meu nome é {name}, com {name.length} caracteres, e tem{" "}
          {getAgeFrom(date)} anos.
        </p>
      </Main>
    </>
  );
}
