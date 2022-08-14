import { getBackend } from "./api/api";
import Header from "./component/Header";
import Main from "./component/Main";

export default function App() {
  const investments = getBackend();
  function styeChange(value) {
    return value > 0 ? "text-green-400" : "text-red-400";
  }
  return (
    <>
      <Header>React Investments</Header>

      <Main>
        <ul>
          {investments.map((investment) => {
            const { id, description, balance, totalPercent, reports } =
              investment;
            const balanceClass = styeChange(balance);

            return (
              <li key={id} className="border my-2 py-2">
                <h2 className="text-xl text-center font-semibold">
                  {description}
                </h2>
                <h3 className=" text-lg text-center font-semibold">
                  Rendimento Total:{" "}
                  <span className={balanceClass}>
                    R${balance.toFixed(2)} ({totalPercent.toFixed(2)}%)
                  </span>
                </h3>
                <ul>
                  {reports.map((report) => {
                    const { id, month, year, percent, value } = report;
                    const percentClass = styeChange(percent);
                    return (
                      <li key={id} className=" flex flex-row justify-between">
                        <span>
                          {month.toString().padStart(2, "0")}/{year}
                        </span>
                        <span className="flex-1 ml-4">
                          R$ {value.toFixed(2)}
                        </span>
                        <span className={percentClass}>
                          {percent.toFixed(2)}%
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </Main>
    </>
  );
}
