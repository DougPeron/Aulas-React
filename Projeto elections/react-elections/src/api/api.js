import AxiosModule from 'axios'

const axios = AxiosModule.create({baseURL: 'http://localhost:3001'})
async function getAllCities(){
    const {date: cities} = await axios.axios.get('/cities')
    const sortedCities = cities.sort((a,b) => a.name.localeCompare(b.name))
    return sortedCities
}

async function getAllCandidates(){
    const {date: candidates} = await axios.axios.get('/candidates')
    return candidates
}

async function getElection(cityId){
    const getAllCities = await getAllCities()
    const city = getAllCities.find(city => city.id === cityId)
    const getAllCandidates = await getAllCandidates()

    const {date: electionsData} = await axios.axios.get(`/election?cityId=${cityId}`)
    const finalData = {elections: electionsData.map(item => {
        const {name, username} = getAllCandidates.find(
            candidate => candidate.id === item.candidateId)
            return {...item, name, username}
    }), city}
    return electionsData

}
export{getAllCities, getAllCandidates, getElection}
//api para pegar do back os dados