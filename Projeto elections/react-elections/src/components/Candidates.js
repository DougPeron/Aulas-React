import { allInformation } from "../data/allInformation";

function Candidates(id) {
  const cityElections = [];
  allInformation.election.map((elections) => {
    if (elections.cityId === id) {
      cityElections.push(elections);

      return cityElections;
    }
    return cityElections.sort();
  });

  return cityElections;
}
export default Candidates;
