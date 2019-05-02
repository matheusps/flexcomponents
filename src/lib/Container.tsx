import React, { FC } from 'react'

interface Container extends HTMLDivElement {
  /** tag of the container */
  tag?:
    | 'div'
    | 'section'
    | 'article'
    | 'aside'
    | 'details'
    | 'dialog'
    | 'figure'
    | 'footer'
    | 'header'
    | 'main'
    | 'nav'
  /** width in percentage or px */
  width?: string
  /** if is inline-flex */
  inline?: boolean
  /** flex-direction */
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  /** flex-wrap */
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  /** justify-content */
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  /** align-items */
  items?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
  /** align-content */
  content?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'stretch'
}

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
  content: 'stretch'
}

export default FlexContainer
