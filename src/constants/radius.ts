export type TRadiusSize = 'xl' | 'lg' | 'md'
export type TRadius = Record<TRadiusSize, number>

export const radius: TRadius = {
  xl: 20,
  lg: 10,
  md: 8
}
