import { allCountries } from "../data/countries";

export function showCountries(nameCountrie) {
  let backend = allCountries.name.map((countrie) => {
    let retorno = allCountries.name.filter((countrie) => {
      console.log(retorno, countrie);
      return countrie.name === nameCountrie;
    });
    return { ...countrie, retorno };
  });
  return backend;
}
