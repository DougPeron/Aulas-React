import { allInformation } from "../data/allInformation";

function Elections({ children }) {
  allInformation.election.map((elections) => {
    const { id, cityId, candidateId, votes } = elections;
    return elections;
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
  let filteredCity = allInformation.election.filter(filtro);

  return <span></span>;
}

export default Elections;
/*
allInformation.candidates.map((candidate) => {
  const { id, name, username } = candidate;
  return candidate;
});*/
