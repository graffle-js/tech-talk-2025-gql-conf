import { Graffle } from './assets/graffle/_namespace.js'

const graffle = Graffle.create()

const data = await graffle
  .document({
    mutation: {
      addMyPokemon: {
        addPokemon: {
          $: {
            name: 'Yolo',
            $type: 'fire',
            hp: 1000,
          },
          id: true,
        },
      },
    },
    query: {
      getTrainers: {
        trainers: {
          name: true,
        },
      },
    },
  })
  /**
   * Typesafe operation selection.
   * Change selection to change return type.
   */
  .run('getTrainers')

console.log(data)
