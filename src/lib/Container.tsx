import React, { FC } from 'react'
import { Container } from './types'

const FlexContainer: FC<Container> = props => {
  const {
    tag: Tag,
    inline,
    width,
    direction,
    wrap,
    justify,
    items,
    content,
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
        display: inline ? 'inline-flex' : 'flex',
        width: width,
        flexDirection: direction,
        flexWrap: wrap,
        justifyContent: justify,
        alignItems: items,
        alignContent: content,
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

FlexContainer.defaultProps = {
  tag: 'div',
  width: '100%',
  inline: false,
  direction: 'row',
  wrap: 'nowrap',
  justify: 'flex-start',
  items: 'stretch',
  content: 'stretch',
  order: 0,
  shrink: 1,
  grow: 0,
  self: 'auto',
  basis: 'auto'
}

export default FlexContainer
