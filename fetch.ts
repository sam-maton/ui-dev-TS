async function getPokemon() {
  const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'
  const response = await fetch(url)
  const pokemon: unknown = await response.json()

  console.log(pokemon)

  return pokemon
}

getPokemon()
