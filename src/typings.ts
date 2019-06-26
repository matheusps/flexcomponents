import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type NativeDivType = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

type ElementMeasureType =
  | MeasureType
  | {
      /** Measure top */
      top?: MeasureType
      /** Measure right */
      right?: MeasureType
      /** Measure bottom */
      bottom?: MeasureType
      /** Measure left */
      left?: MeasureType
    }

export interface IItem extends NativeDivType {
  /** Element order
   * @default 0
   */
  order?: number
  /** Element grow
   * @default 0
   */
  grow?: number
  /** Element shrink
   * @default 1
   */
  shrink?: number
  /** CSS prop flex-basis
   * @default 'auto'
   */
  basis?: 'auto' | string
  /** CSS prop align-self
   * @default 'auto'
   */
  self?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
  /** Item padding
   * @default 'none'
   */
  padding?: ElementMeasureType
  /** Item margin
   * @default 'none'
   */
  margin?: ElementMeasureType
}

/** A container itself can be an item */
export interface IContainer extends IItem {
  /** If is inline-flex
   * @default false
   */
  inline?: boolean
  /** CSS prop flex-direction
   * @default 'row'
   */
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  /** CSS prop flex-wrap
   * @default 'nowrap'
   */
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  /** CSS prop justify-content
   * @default 'flex-start'
   */
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  /** CSS prop align-items
   * @default 'stretch'
   */
  items?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
  /** CSS prop align-content
   * @default 'stretch'
   */
  content?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'stretch'
}

export type MeasureType =
  | 'none'
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'

export type GridSizeType =
  | 'fluid'
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12

export interface IColumn extends IContainer {
  /** Desired size on a 12 column layout
   * Fluid means takes available space
   * @default 'fluid'
   */
  size?: GridSizeType
}
