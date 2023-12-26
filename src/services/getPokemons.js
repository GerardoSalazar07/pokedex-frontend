const ENDPOINT = 'http://localhost:8080'

export default function getPokemons ({ limit = 1302, page = 1, search = '' }) {
  return fetch(`${ENDPOINT}/pokemons?limit=${limit}&page=${page}&search=${search}`, {
    method: 'GET'
  }).then(res => {
    if (!res.ok) {
      return res.json().then(res => {
        throw new Error(res.error)
      })
    }
    return res.json()
  }).then(res => {
    const { pokemons } = res
    return pokemons
  })
}