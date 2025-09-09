import { Graffle } from './assets/graffle/_namespace.js'

const graffle = Graffle.create()

const data = await graffle.query.$batch({
  trainers: {
    name: true,
  },
  pokemons: {
    name: true,
    id: true,
  },
})

console.log(data)
