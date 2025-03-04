import { z } from 'zod'

const apiReturn = z.object({
  count: z.number(),
  next: z.string(),
  results: z.array(
    z.object({
      name: z.string(),
      url: z.string(),
    })
  ),
})

async function getPokemon() {
  const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'
  const response = await fetch(url)
  const pokemon: unknown = await response.json()

  return apiReturn.parse(pokemon)
}

getPokemon()
  .then((result) => {
    console.log(result)
  })
  .catch((e) => {
    console.log(e)
  })
