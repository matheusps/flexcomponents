export interface Item extends HTMLDivElement {
  /** tag of the item */
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
  /** element order */
  order?: number
  /** element grow */
  grow?: number
  /** element shrink */
  shrink?: number
  /** flex-basis */
  basis?: 'auto' | number
  /** align-self */
  self?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
}

/** A container itself can be an item */
export interface Container extends Item {
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
