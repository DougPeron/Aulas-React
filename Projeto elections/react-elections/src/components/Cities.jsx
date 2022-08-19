import { allInformation } from "../data/allInformation";

function Cities() {
  console.log(allInformation);
  return (
    <ul>
      {allInformation.cities.map((city) => {
        const { id, name } = city;

        return (
          <li key={id} className="border my-2 py-2">
            <h2 className="text-xl text-center font-semibold">{name}</h2>
          </li>
        );
      })}
    </ul>
  );
}

export default Cities;
