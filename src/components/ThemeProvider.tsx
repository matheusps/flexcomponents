import * as React from 'react'
import ThemeContext from '../context/ThemeContext'
import { ModernWhite } from '../themes'

interface Props {
  theme?: Theme
}

const ThemeProvider: React.FC<Props> = ({ theme, children }) => {
  return (
    <ThemeContext.Provider value={theme!}>{children}</ThemeContext.Provider>
  )
}

ThemeProvider.defaultProps = {
  theme: ModernWhite
}

export { ThemeProvider }
