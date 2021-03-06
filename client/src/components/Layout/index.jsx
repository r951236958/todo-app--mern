import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../theme'
import Header from '../Header'
import Footer from '../Footer'

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <main className="min-h-screen">
          <div className="container">{children}</div>
        </main>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Layout
