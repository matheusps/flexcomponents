import * as React from 'react'
import { FlexContainer } from './FlexContainer'

const Row: React.FC = ({ children }) => {
  return (
    <FlexContainer
      direction="row"
      wrap="wrap"
      style={{
        boxSizing: 'border-box',
        flex: '0 1 auto',
        marginRight: '-0.5rem',
        marginLeft: '-0.5rem'
      }}
    >
      {children}
    </FlexContainer>
  )
}

export { Row }
