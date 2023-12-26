import { Toaster } from 'sonner'
import SearchAndPaginationControls from './components/SearchAndPaginationControls'
import PokemonList from './components/PokemonList'
import Pagination from './components/Pagination'
import Spinner from "./components/Spinner"
import { usePokedex } from "./hooks/usePokedex"
import './App.css'

function App() {
  const { loading, pokemons, limit, page, search, handleLimitChange, handlePageChange, handleSearchChange } = usePokedex()

  return (
    <>
      <Toaster richColors />
      <img src="src/assets/logo.png" className="logo" alt="Pokedex logo" />
      <h1>Pokedex</h1>
      <div className="card flex flex-col items-center gap-2">
        <SearchAndPaginationControls limit={limit} search={search} handleLimitChange={handleLimitChange} handleSearchChange={handleSearchChange} />
        <PokemonList pokemons={pokemons} />
        <Pagination page={page} handlePageChange={handlePageChange} />
      </div>
      {loading && <Spinner />}
    </>
  )
}

export default App
