import { Graffle } from 'graffle'
import { TransportMemory } from 'graffle/extensions/transport-memory'
import { schema } from './assets/pokemon-schema/schema.js'

/**
 * 1. This time we pass a GraphQL schema instance to GraphQL.
 */

const graffle = Graffle
  .create()
  .use(TransportMemory)
  .transport('memory', {
    schema,
  })

const data = await graffle.gql`
  query {
    pokemons {
      name
      id
    }
  }
`.send()

console.log(data)
