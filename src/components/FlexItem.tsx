import * as React from 'react'

const FlexItem: React.FC<Item> = ({ children, ...props }) => (
  <div
    style={{
      width: props.width,
      order: props.order,
      flexShrink: props.shrink,
      flexGrow: props.grow,
      flexBasis: props.basis,
      alignSelf: props.self
    }}
  >
    {children}
  </div>
)

FlexItem.defaultProps = {
  width: '100%',
  order: 0,
  shrink: 1,
  grow: 0,
  self: 'auto',
  basis: 'auto'
}

export { FlexItem }
