import * as React from 'react'
import { useTheme } from '../hooks/useTheme'

const FlexContainer: React.FC<Container> = ({ children, ...props }) => {
  const { container } = useTheme()

  return (
    <div
      style={{
        width: props.width,
        order: props.order,
        flexShrink: props.shrink,
        flexGrow: props.grow,
        flexBasis: props.basis,
        alignSelf: props.self,
        display: props.inline ? 'inline-flex' : 'flex',
        flexDirection: props.direction,
        flexWrap: props.wrap,
        justifyContent: props.justify,
        alignItems: props.items,
        alignContent: props.content,
        ...container
      }}
    >
      {children}
    </div>
  )
}

FlexContainer.defaultProps = {
  width: 'auto',
  order: 0,
  shrink: 1,
  grow: 0,
  self: 'auto',
  basis: 'auto',
  inline: false,
  direction: 'row',
  wrap: 'nowrap',
  justify: 'flex-start',
  items: 'stretch',
  content: 'stretch'
}

export { FlexContainer }
