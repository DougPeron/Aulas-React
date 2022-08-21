import { allInformation } from "../data/allInformation";

function Elections({ children }) {
  allInformation.election.map((elections) => {
    return console.log(elections.cityId);
  });
  allInformation.cities.map((city) => {
    if ({ children } === city.name) {
      console.log(city.id);
      return city.id;
    }
    return city;
  });

  function filtro(elections) {
    return elections.cityId === allInformation.cities[2].id;
  }

  return <span></span>;
}

export default Elections;
/*
allInformation.candidates.map((candidate) => {
  const { id, name, username } = candidate;
  return candidate;
});*/
