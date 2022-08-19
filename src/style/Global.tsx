import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@fastswap-uikit/dist/theme'
import back from '../img/back.png'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Poppins', sans-serif;
  }
  body {
    background: black !important;

    img {
      height: auto;
      max-width: 100%;
    }

    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.primary}; 
      border-radius: 8px;
    }
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px ${({ theme }) => theme.colors.primary}; 
      border-radius: 10px;
    }

`

export default GlobalStyle
