import { Generator } from 'graffle/generator'

export default Generator.configure({
  defaultSchemaUrl: new URL('http://localhost:3000/graphql'),
})
