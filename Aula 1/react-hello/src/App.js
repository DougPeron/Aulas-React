import { useEffect, useState } from "react";
import CheckboxInput from "./components/CheckboxInput";

import DateInput from "./components/DateInput";
import Header from "./components/Heander";
import Main from "./components/Main";
import Onlineoffline from "./components/Onlineoffline";
import TextInput from "./components/TextInput";
import Timer from "./components/Timer";
import { getAgeFrom } from "./helpers/dateHelper";

export default function App() {
  //modo de usar useState não usual:
  // const state = useState("Douglas");
  // const name = state[0];
  // const setName = state[1];

  //Formato usual:
  const [name, setName] = useState("Seu nome");
  const [date, setDate] = useState("2022-01-01");
  const [timer, setTimer] = useState(false);
  const [statusBoard, setStatus] = useState(true);

  useEffect(() => {
    document.title = name;
  }, [name]);
  useEffect(() => {
    function statusOnline() {
      setStatus(true);
    }
    function statusOffline() {
      setStatus(false);
    }
    window.addEventListener("online", statusOnline);
    window.addEventListener("offline", statusOffline);

    return () => {
      window.removeEventListener("online", statusOnline);
      window.removeEventListener("offline", statusOffline);
    };
  });
  function handleNameChange(newName) {
    setName(newName);
  }

  function handleDateChange(newDate) {
    setDate(newDate);
  }
  function handleSetTimer() {
    setTimer((currentTimer) => !currentTimer);
  }

  return (
    //Fragment <> ou <Fragment>
    <>
      <Header>Componente Header - Projeto React Hello!</Header>

      <Main>
        <div className="ml-3">
          <Onlineoffline isOnline={statusBoard} />
        </div>

        {timer && (
          <div className="flex float-right m-1">
            <Timer />
          </div>
        )}

        <CheckboxInput
          labelDecription="Mostrar Timer"
          onCheckboxChange={handleSetTimer}
        />

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
