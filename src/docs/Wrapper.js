import React from 'react'
import { ThemeProvider } from '../components/ThemeProvider'

const Wrapper = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>
}

export default Wrapper
