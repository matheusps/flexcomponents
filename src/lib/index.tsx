import styled from '@emotion/styled'

import { Container, Item } from './types'

const FlexItem = styled('div')<Item>(props => ({
  width: props.width,
  order: props.order,
  flexShrink: props.shrink,
  flexGrow: props.grow,
  flexBasis: props.basis,
  alignSelf: props.self
}))

const FlexContainer = styled(FlexItem)<Container>(props => ({
  display: props.inline ? 'inline-flex' : 'flex',
  flexDirection: props.direction,
  flexWrap: props.wrap,
  justifyContent: props.justify,
  alignItems: props.items,
  alignContent: props.content
}))

const itemDefaultProps = {
  width: '100%',
  order: 0,
  shrink: 1,
  grow: 0,
  self: 'auto',
  basis: 'auto'
}

FlexItem.defaultProps = itemDefaultProps
FlexContainer.defaultProps = {
  ...itemDefaultProps,
  inline: false,
  direction: 'row',
  wrap: 'nowrap',
  justify: 'flex-start',
  items: 'stretch',
  content: 'stretch'
}

export { FlexItem, FlexContainer }
