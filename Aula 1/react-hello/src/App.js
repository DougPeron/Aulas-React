import Header from "./components/Heander";
import Main from "./components/Main";
export default function App() {
  console.log("Teste no console do navegador");

  return (
    //Fragment <> ou <Fragment>
    <>
      <Header>Componente Header - Porjeto React Hello!</Header>

      <Main>
        <div className="container mx-auto p-4">
          <p>
            O meu nome é {"Douglas"} e tenho {31} anos
          </p>
        </div>
      </Main>
    </>
  );
}
