import React, { FC } from 'react'
import { Container } from './types'
import { containerDefaultProps } from './defaultProps'

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

FlexContainer.defaultProps = containerDefaultProps

export default FlexContainer
