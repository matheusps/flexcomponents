import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface Theme {
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

export type NativeDiv = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export interface Item extends NativeDiv {
  /** If subscribes to the theme provider or not */
  themed?: boolean
  /** Element order */
  order?: number
  /** Element grow */
  grow?: number
  /** Element shrink */
  shrink?: number
  /** CSS prop flex-basis */
  basis?: 'auto' | number
  /** CSS prop align-self */
  self?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
}

/** A container itself can be an item */
export interface Container extends Item {
  /** If is inline-flex */
  inline?: boolean
  /** CSS prop flex-direction */
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  /** CSS prop flex-wrap */
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  /** CSS prop justify-content */
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  /** CSS prop align-items */
  items?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
  /** CSS prop align-content */
  content?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'stretch'
}
