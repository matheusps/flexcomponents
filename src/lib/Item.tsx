import React, { FC } from 'react'
import { Item } from './types'
import { itemDefaultProps } from './defaultProps'

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

FlexItem.defaultProps = itemDefaultProps

export default FlexItem
