import { useState } from "react";
import Header from "./components/Heander";
import Main from "./components/Main";
import TextInput from "./components/TextInput";

export default function App() {
  //modo de usar useState não usual:
  // const state = useState("Douglas");
  // const name = state[0];
  // const setName = state[1];

  //Formato usual:
  const [name, setName] = useState("Seu nome");
  function handleNameChange(newName) {
    setName(newName);
  }
  console.log();

  return (
    //Fragment <> ou <Fragment>
    <>
      <Header>Componente Header - Porjeto React Hello!</Header>

      <Main>
        <TextInput
          labelDecription="Digite seu nome: "
          inputValue={name}
          onInputChange={handleNameChange}
        />

        <p>
          O meu nome é {name}, com {name.length} caracteres, e você tem {"X "}
          anos
        </p>
      </Main>
    </>
  );
}
