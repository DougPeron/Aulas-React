import Countries from "./Contries";

function Country({ children: country }) {
  return (
    <div className="border-2 p-2 m-2 flex flex-row">
      <img className="w-48" src={country.flag} alt={country.name} />

      <ul>
        <li>{country.name}</li>
        <li>{country.capital}</li>
        <li>{country.region}</li>
        <li>{country.population}</li>
        <li>{country.area}</li>
      </ul>
    </div>
  );
}

export default Country;
