import type { Config } from 'tailwindcss/types'
import { TailwindConfig } from '../types'
import { radixToTailwind } from '@bitwhys/utils'
import { lime, limeDark, olive, oliveDark } from '@radix-ui/colors'
import formsPlugin from '@tailwindcss/forms'
import typographyPlugin from '@tailwindcss/typography'

const colors = {
  neutral: radixToTailwind(olive),
  neutralDark: radixToTailwind(oliveDark),
  primary: radixToTailwind(lime),
  primaryDark: radixToTailwind(limeDark),
}
const plugins = [formsPlugin(), typographyPlugin()]

const basePreset: TailwindConfig = {
  theme: {
    extend: {
      colors,
    },
  },
  plugins,
}

export default basePreset
