import * as React from 'react'
import { FlexContainer } from './FlexContainer'
import { Container } from '../typings'

type GridSize = 'fluid' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

interface ColType extends Container {
  size: GridSize
}

const getPercentage = (size: GridSize) => {
  switch (size) {
    case 'fluid':
      return 100
    case 1:
      return 8.33333333
    case 2:
      return 16.66666667
    case 3:
      return 25
    case 4:
      return 33.33333333
    case 5:
      return 41.66666667
    case 6:
      return 50
    case 7:
      return 58.33333333
    case 8:
      return 66.66666667
    case 9:
      return 75
    case 10:
      return 83.33333333
    case 11:
      return 91.66666667
    case 12:
      return 100
    default:
      return 100
  }
}

const Col: React.FC<ColType> = ({ size, style, children, ...props }) => {
  const percentage = `${getPercentage(size)}%`
  return (
    <FlexContainer
      wrap="wrap"
      grow={size === 'fluid' ? 1 : 0}
      basis={percentage || 'auto'}
      shrink={0}
      style={{
        paddingRight: '0.5rem',
        paddingLeft: '0.5rem',
        maxWidth: percentage,
        ...style
      }}
      {...props}
    >
      {children}
    </FlexContainer>
  )
}

Col.defaultProps = {
  size: 'fluid'
}

export { Col }
