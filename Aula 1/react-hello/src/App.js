import { useState } from "react";
import Header from "./components/Heander";
import Main from "./components/Main";

export default function App() {
  // const state = useState("Douglas");
  // const name = state[0];
  // const setName = state[1];
  const [name, setName] = useState("Seu nome");
  function handleNameChange(event) {
    const newName = event.currentTarget.value;
    setName(newName);
  }
  console.log();

  return (
    //Fragment <> ou <Fragment>
    <>
      <Header>Componente Header - Porjeto React Hello!</Header>

      <Main>
        <div className="flex flex-col my-4">
          <label className="text-sm mb-1" htmlFor="inputName">
            Digite seu nome:{" "}
          </label>
          <input
            autoFocus
            id="inputName"
            className="border p-1"
            type="text"
            value={name}
            onChange={handleNameChange}
          />
        </div>

        <p>
          O meu nome é {name}, com {name.length} caracteres, e você te {"X"}{" "}
          anos
        </p>
      </Main>
    </>
  );
}
