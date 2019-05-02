import React, { FC } from 'react'
import { Item } from './types'

const FlexItem: FC<Item> = props => {
  const {
    tag: Tag,
    width,
    order,
    shrink,
    grow,
    self,
    basis,
    style,
    children,
    ...rest
  } = props
  return (
    <Tag
      style={{
        width: width,
        order: order,
        flexShrink: shrink,
        flexGrow: grow,
        flexBasis: basis,
        alignSelf: self,
        ...style
      }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

FlexItem.defaultProps = {
  tag: 'div',
  width: '100%',
  order: 0,
  shrink: 1,
  grow: 0,
  self: 'auto',
  basis: 'auto'
}

export default FlexItem
