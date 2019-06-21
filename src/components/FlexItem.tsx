import * as React from 'react'
import { useTheme } from '../hooks/useTheme'

const FlexItem: React.FC<Item> = ({ children, ...props }) => {
  const {
    item: { shadow, padding, margin, radius, on, background }
  } = useTheme()

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
        boxShadow: shadow,
        padding: padding,
        borderRadius: radius,
        margin: margin,
        color: on,
        backgroundColor: background
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
