

console.log(allInformation);

function ElectionsPage() {
  const [loadingPage, setLoadingPage] = useState(true)
  const [allCities, setAllCities] = useState([])
  const [selectedCity, setSelectedCity] = useState(null)
  const [loadingElections, setLoadingElections] = useState(true)
  const [currentElections, setCurrentElections] = useState([])

  useEffect(() => {
    setLoadingPage(true)
    async function getBackendCities(){
      const backendCities = await ApiModule.getBackendCities()
      setAllCities(backendCities)
      setLoadingPage(false)
    }
  })
  function handleButtonClick({currentTarget}){
    setSelectedCity(currentTarget.value)
    console.log(currentTarget)
  }
  if(loadingPage){
    return(
      <div><ClipLoader/></div>
    )
  }
   return (
    <>
      <Header>React Elections</Header>
      <ul Classname="flex flex-row flex-wrap items-center justfy-start">
        
        {allCities.map(({id, name}) => {
          const selectedClassName = id === selectedCity ? 'bg-gray-800': ''
          return <li key={id}><button onClick={handleButtonClick} value={id} Classname={`bg-gray=200 m-2 p-2 hover:bg-gray-400 ${selectedClassName}`}> {name}</button></li>
        })}
      </ul>
      <Main></Main>
    </>
  );
}

export default ElectionsPage;
