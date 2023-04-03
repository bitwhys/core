import { Config } from './types'
export * from './presets'

export const defineConfig = (contents: Array<string>) => {
  return { contents, presets: [] }
}
