import * as React from 'react'
import { IItem } from '../typings'

const FlexItem: React.FC<IItem> = ({ children, ...props }) => {
  return (
    <div
      style={{
        display: 'flex',
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
}

FlexItem.defaultProps = {
  order: 0,
  shrink: 1,
  grow: 0,
  self: 'auto',
  basis: 'auto'
}

export { FlexItem }
