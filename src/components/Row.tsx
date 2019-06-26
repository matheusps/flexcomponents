import * as React from 'react'
import { FlexContainer } from './FlexContainer'
import { Container } from '../typings'

const Row: React.FC<Container> = ({ children, style, ...props }) => {
  return (
    <FlexContainer
      direction="row"
      wrap="wrap"
      grow={0}
      shrink={1}
      basis="0"
      style={{
        marginRight: '-0.5rem',
        marginLeft: '-0.5rem',
        ...style
      }}
      {...props}
    >
      {children}
    </FlexContainer>
  )
}

export { Row }
