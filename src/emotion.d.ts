import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      white: string
      lightGray: string
      baseGray: string
      darkGray: string
      black: string

      lightBlue: string
      blue: string
      darkBlue: string

      desktopTheme: string
    }
  }
}
