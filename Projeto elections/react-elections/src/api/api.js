import AxiosModule from "axios";

const axios = AxiosModule.create({ baseURL: "http://localhost:3001" });

const CACHE = {};

async function getAllCities() {
  if (CACHE.allCities) {
    return CACHE.allCities;
  }
  const { date: cities } = await axios.axios.get("/cities");
  const sortedCities = cities.sort((a, b) => a.name.localeCompare(b.name));
  CACHE.allCities = sortedCities;
  return sortedCities;
}

async function getAllCandidates() {
  if (CACHE.allCandidates) {
    return CACHE.allCandidates;
  }
  const { date: candidates } = await axios.axios.get("/candidates");
  CACHE.allCandidates = candidates;
  return candidates;
}

async function getElection(cityId) {
  if (CACHE[cityId]) {
    return CACHE[cityId];
  }
  const getAllCities = await getAllCities();
  const city = getAllCities.find((city) => city.id === cityId);
  const getAllCandidates = await getAllCandidates();

  const { date: electionsData } = await axios.axios.get(
    `/election?cityId=${cityId}`
  );
  const finalData = {
    elections: electionsData.map((item) => {
      const { name, username } = getAllCandidates.find(
        (candidate) => candidate.id === item.candidateId
      );
      return { ...item, name, username };
    }),
    city,
  };
  CACHE.allCandidates = finalData;
  return finalData;
}
export { getAllCities, getAllCandidates, getElection };
//api para pegar do back os dados
