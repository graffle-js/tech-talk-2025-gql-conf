import { Graffle } from './assets/graffle/_namespace.js'

{
  const graffle = Graffle.create()

  const result = await graffle.query.pokemons({
    name: true,
    birthday: true,
  })

  // Same result!
  console.log(result)
}
