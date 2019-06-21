import * as React from 'react'
import { useTheme } from '../hooks/useTheme'

const FlexItem: React.FC<Item> = ({ children, ...props }) => {
  const { item } = useTheme()

  return (
    <div
      style={{
        display: 'flex',
        width: props.width,
        order: props.order,
        flexShrink: props.shrink,
        flexGrow: props.grow,
        flexBasis: props.basis,
        alignSelf: props.self,
        ...item
      }}
    >
      {children}
    </div>
  )
}

FlexItem.defaultProps = {
  width: 'auto',
  order: 0,
  shrink: 1,
  grow: 0,
  self: 'auto',
  basis: 'auto'
}

export { FlexItem }
