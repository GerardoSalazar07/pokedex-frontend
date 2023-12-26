// eslint-disable-next-line react/prop-types
export default function PokemonList ({ pokemons = [] }) {
    return (
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {pokemons.map((pokemon) => (
            <li key={pokemon} className="bg-white p-4 rounded border shadow-md">{pokemon}</li>
          ))}
        </ul>
    )
}