// import { useMemo } from 'react'
import { createMuiTheme } from '@material-ui/core/styles'
// import useMediaQuery from '@material-ui/core/useMediaQuery'
// import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

// const ThemeBuilder = () => {
//   const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

//   const theme = useMemo(
//     () =>
//       createMuiTheme({
//         palette: {
//           type: prefersDarkMode ? 'dark' : 'light',
//           primary: {
//             main: '#ffeb3b',
//           },
//           secondary: {
//             main: '#f50057',
//           },
//           blueGray: {
//             light: '#62727b',
//             main: '#37474f',
//             dark: '#102027',
//           },
//           background: {
//             default: '#222',
//           },
//           minty: {
//             light: '#cce8e0',
//             main: '#a9f5df',
//             dark: '#78c2ad',
//           },
//         },
//       }),
//     [prefersDarkMode]
//   )
//   return theme
// }

// export default ThemeBuilder

export const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#ffeb3b',
    },
    secondary: {
      main: '#f50057',
    },
    blueGray: {
      light: '#62727b',
      main: '#37474f',
      dark: '#102027',
    },
    background: {
      default: '#121212',
    },
  },
  // Enable typography v2: https://material-ui.com/style/typography/#migration-to-typography-v2
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    useNextVariants: true,
  },
  flexColumnCenter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  flexRowCenter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
})

// export default responsiveFontSizes(theme)
export default theme
