import * as React from 'react'
import { FlexContainer } from './FlexContainer'
import { IColumn } from '../typings'
import { getPercentage } from '../functions'

const Col: React.FC<IColumn> = ({ size, style, children, ...props }) => {
  const percentage = `${getPercentage(size!)}%`
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
