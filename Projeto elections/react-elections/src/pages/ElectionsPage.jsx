console.log(allInformation);

function ElectionsPage() {
  const [loadingPage, setLoadingPage] = useState(true);
  const [allCities, setAllCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [loadingElections, setLoadingElections] = useState(true);
  const [currentElections, setCurrentElections] = useState([]);

  useEffect(() => {
    if (!selectedCity) {
      return;
    }
    async function getBackendCities() {
      setLoadingPage(true);
      const backendCities = await ApiModule.getAllCities();
      setAllCities(backendCities);
      setSelectedCity(backendCities[0].id);
      setLoadingPage(false);
    }
    getBackendCities();
  }, []);

  useEffect(() => {
    async function getBackendElections() {
      setLoadingElections(true);
      const backendCities = await ApiModule.getElection(selectedCity);
      setCurrentElections(backendCities);
      setLoadingElections(false);
    }
    getBackendElections();
  }, [selectedCity]);

  async function handleButtonClick({ currentTarget }) {
    const newSelectedCity = currentElections.value;
    setSelectedCity(currentTarget.value);
    console.log(currentTarget);
  }
  if (loadingPage) {
    return (
      <div Classname="text-center mt-4">
        <ClipLoader />
      </div>
    );
  }

  const buttonsJsx = (
    <ul Classname="flex flex-row flex-wrap items-center justfy-start">
      {allCities.map(({ id, name }) => {
        const selectedClassName = id === selectedCity ? "bg-gray-800" : "";
        return (
          <li key={id}>
            <button
              onClick={handleButtonClick}
              value={id}
              Classname={`bg-gray=200 m-2 p-2 hover:bg-gray-400 hover: bg-gray-600 ${selectedClassName}`}
            >
              {name}
            </button>
          </li>
        );
      })}
    </ul>
  );

  let electionsJsx = (
    <div Classname="text-center mt-4">
      <ClipLoader />
    </div>
  );
  if (!loadingElections) {
    const { city, elections } = currentElections;
    const { name, votingPopulation, absence, presence } = city;

    electionsJsx = (
      <div>
        <h2 className="text-center mt-4 text-2xl font-semibold">
          Dados de {name}
        </h2>

        <p>Total de eleitores: {votingPopulation}</p>
        <p>Abstenções: {absence}</p>
        <p>votos Válidos: {presence}</p>

        <ul className="flex flex-row flex-wrap items-center justfy-start ">
          {elections.map((item) => {
            const { name: candidateName, username, votes } = item;
            const isElected = index === 0;
            return (
              <li
                className="m-2 w-48 h-48 shadow-lg flex flex-col items-center justify-between px-2 hover: bg-gray-100"
                key={id}
              >
                <div className="flex flex-row items-center justify-between w-full p-4">
                  <img
                    className="rounded-full w-12"
                    src={`/img/${username}.png`}
                    alt={candidateName}
                  />
                  <div>
                    <span>{votes}</span>
                    <span>{((votes / presence) * 100).toFixed(2)}%</span>
                  </div>
                </div>
                <div>{candidateName}</div>
                <div>{isElected ? "Eleito" : "Não eleito"}</div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  return (
    <>
      {buttonsJsx}
      {electionsJsx}
    </>
  );
}

export default ElectionsPage;
