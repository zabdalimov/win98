import '@emotion/react'
import { theme } from './styles/theme'

type ThemeType = typeof theme

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends ThemeType {}
}
