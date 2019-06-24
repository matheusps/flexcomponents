interface Theme {
  container: {
    backgroundColor: string
    color: string
    boxShadow: string
    borderRadius: string
    margin: string
    padding: string
  }
  item: {
    backgroundColor: string
    color: string
    boxShadow: string
    borderRadius: string
    margin: string
    padding: string
  }
}

type NativeDiv = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

interface Item extends NativeDiv {
  /** If subscribes to theme provider or not */
  themed: boolean
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
interface Container extends Item {
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
