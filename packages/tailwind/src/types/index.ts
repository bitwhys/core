import { OptionalConfig } from 'tailwindcss/types/config'

export interface RequiredOptions {
  /** Location of files with Tailwind classes. */
  content: string[]
}

export type TailwindConfig = Partial<OptionalConfig>
export interface Config extends RequiredOptions, TailwindConfig {}
