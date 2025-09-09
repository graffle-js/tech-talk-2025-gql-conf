import { Extension } from 'graffle/extension'
import type { GraffleKit } from 'graffle/kit'
import { Graffle } from './assets/graffle/_namespace.js'

const Echo = Extension
  .create('echo')
  .configurator((_) =>
    _
      .input<{ enabled?: boolean }>()
      .default({ enabled: false })
  )
  .properties(({ configuration }) => {
    const config = configuration.echo.current
    return {
      echo() {
        return config.enabled ? 'echo!' : '<silence>'
      },
    } as any as Properties
  })
  .return()

export interface Properties extends Extension.PropertiesTypeFunction {
  // @ts-expect-error
  return: Properties_<this['parameters']['context']>
}

type Properties_<$Context extends GraffleKit.Context> = {
  /**
   * Make an echo.
   */
  // @ts-expect-error
  echo: () => $Context['configuration']['echo']['current']['enabled'] extends true ? 'echo!' : '<silence>'
}

//
//
//
// -----------------------------
//
//
//

const graffle = Graffle
  .create()
  .use(Echo({ enabled: true })) // note, bug: default doesn't lead to strong static typing!

{
  const sound = graffle
    .with({ echo: { enabled: false } })
    .echo()
  console.log(sound)
}

{
  const sound = graffle
    .with({ echo: { enabled: true } })
    .echo()
  console.log(sound)
}
