import Svg, { Path } from 'react-native-svg'

type TIconProps = {
  type: TIcons
  color?: string
  size?: number
}

const Icon = ({ type, color, size }: TIconProps) => {
  const finalColor = color ? color : 'red'

  if (type === 'box') {
    const defaultWidth = size ? size : 24
    return (
      <Svg width={defaultWidth} height={defaultWidth} viewBox="0 0 24 24" fill="none">
        <Path fill={finalColor} d="M9 14h6a1 1 0 1 0 0-2H9a1 1 0 0 0 0 2Z" />
        <Path
          fill={finalColor}
          d="M19 0H5a5.006 5.006 0 0 0-5 5v1a3 3 0 0 0 1 2.234V19a5.006 5.006 0 0 0 5 5h12a5.006 5.006 0 0 0 5-5V8.234A3 3 0 0 0 24 6V5a5.006 5.006 0 0 0-5-5ZM2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5Zm19 14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V9h18v10Z"
        />
      </Svg>
    )
  } else if (type === 'plus') {
    const defaultWidth = size ? size : 20
    return (
      <Svg width={defaultWidth} height={defaultWidth} viewBox="0 0 20 20" fill="none">
        <Path
          fill={finalColor}
          d="M19.167 9.167h-8.334V.833A.834.834 0 0 0 10 0a.833.833 0 0 0-.833.833v8.334H.833A.833.833 0 0 0 0 10a.833.833 0 0 0 .833.833h8.334v8.334a.833.833 0 0 0 1.666 0v-8.334h8.334a.834.834 0 0 0 0-1.666Z"
        />
      </Svg>
    )
  } else if (type === 'settings') {
    const defaultWidth = size ? size : 24
    return (
      <Svg width={defaultWidth} height={defaultWidth} viewBox="0 0 24 24" fill="none">
        <Path
          fill={finalColor}
          d="M1 4.75h2.736a3.728 3.728 0 0 0 7.195 0H23a1 1 0 1 0 0-2H10.931a3.728 3.728 0 0 0-7.195 0H1a1 1 0 0 0 0 2ZM7.333 2a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5ZM23 11h-2.736a3.727 3.727 0 0 0-7.194 0H1a1 1 0 1 0 0 2h12.07a3.727 3.727 0 0 0 7.194 0H23a1 1 0 1 0 0-2Zm-6.333 2.75a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5ZM23 19.25H10.931a3.728 3.728 0 0 0-7.195 0H1a1 1 0 0 0 0 2h2.736a3.728 3.728 0 0 0 7.195 0H23a1 1 0 1 0 0-2ZM7.333 22a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5Z"
        />
      </Svg>
    )
  } else if (type === 'check') {
    const defaultWidth = size ? size : 14
    return (
      <Svg width={defaultWidth} height={defaultWidth} viewBox="0 0 14 14" fill="none">
        <Path
          stroke={finalColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M1.5 7.5 5 11l7.5-7.5"
        />
      </Svg>
    )
  }
}

export type TIcons = 'box' | 'plus' | 'settings' | 'keyboard-down' | 'trash' | 'haptics' | 'sounds' | 'check'

export default Icon
