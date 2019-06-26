import { GridSizeType, MeasureType } from './typings'

export const getPercentage = (size: GridSizeType) => {
  switch (size) {
    case 'fluid':
      return 100
    case 1:
      return 8.33333333
    case 2:
      return 16.66666667
    case 3:
      return 25
    case 4:
      return 33.33333333
    case 5:
      return 41.66666667
    case 6:
      return 50
    case 7:
      return 58.33333333
    case 8:
      return 66.66666667
    case 9:
      return 75
    case 10:
      return 83.33333333
    case 11:
      return 91.66666667
    case 12:
      return 100
    default:
      return 100
  }
}

export const getSpacing = (measure: MeasureType) => {
  switch (measure) {
    case 'none':
      return 0
    case 'xxs':
      return 0.125
    case 'xs':
      return 0.25
    case 'sm':
      return 0.5
    case 'md':
      return 0.75
    case 'lg':
      return 1
    case 'xl':
      return 2
    case 'xxl':
      return 4
    default:
      return 0
  }
}
