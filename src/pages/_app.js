import React from 'react'
import '../styles.css'
import { ThemeProvider } from 'next-themes'
import { AnimateSharedLayout } from 'framer-motion'

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class">
      <AnimateSharedLayout>
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </ThemeProvider>
  )
}

export default App
