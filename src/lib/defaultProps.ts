export const itemDefaultProps = {
  tag: 'div',
  width: '100%',
  order: 0,
  shrink: 1,
  grow: 0,
  self: 'auto',
  basis: 'auto'
}

export const containerDefaultProps = {
  ...itemDefaultProps,
  inline: false,
  direction: 'row',
  wrap: 'nowrap',
  justify: 'flex-start',
  items: 'stretch',
  content: 'stretch'
}
