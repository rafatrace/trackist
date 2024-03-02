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
  } else if (type === 'keyboard-down') {
    const defaultWidth = size ? size : 20
    return (
      <Svg width={defaultWidth} height={defaultWidth} viewBox="0 0 20 20" fill="none">
        <Path
          fill={finalColor}
          d="M15.833 1.667H9.167c.013 0-.221 0 0 0h-5A4.172 4.172 0 0 0 0 5.833v3.334a4.172 4.172 0 0 0 4.167 4.166h11.666A4.172 4.172 0 0 0 20 9.167V5.833a4.172 4.172 0 0 0-4.167-4.166Zm2.5 7.5a2.5 2.5 0 0 1-2.5 2.5H4.167a2.5 2.5 0 0 1-2.5-2.5V5.833a2.5 2.5 0 0 1 2.5-2.5h11.666a2.5 2.5 0 0 1 2.5 2.5v3.334Z"
        />
        <Path
          fill={finalColor}
          d="M12.5 8.333h-5A.833.833 0 0 0 7.5 10h5a.833.833 0 0 0 0-1.667ZM8.333 6.667h.834a.833.833 0 1 0 0-1.667h-.834a.833.833 0 0 0 0 1.667ZM15.833 5H12.5a.833.833 0 1 0 0 1.667h3.333a.833.833 0 0 0 0-1.667ZM5 5h-.833a.833.833 0 1 0 0 1.667H5A.833.833 0 1 0 5 5ZM4.167 10a.833.833 0 1 0 0-1.667.833.833 0 0 0 0 1.667ZM15.833 10a.833.833 0 1 0 0-1.667.833.833 0 0 0 0 1.667Z"
        />
        <Path
          fill={finalColor}
          fillRule="evenodd"
          d="M6.077 15.244a.833.833 0 0 1 1.179 0L10 17.988l2.744-2.744a.833.833 0 1 1 1.179 1.179l-3.334 3.333a.833.833 0 0 1-1.178 0l-3.334-3.333a.833.833 0 0 1 0-1.179Z"
          clipRule="evenodd"
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
  } else if (type === 'disk') {
    const defaultWidth = size ? size : 20
    return (
      <Svg width={defaultWidth} height={defaultWidth} viewBox="0 0 20 20" fill="none">
        <Path
          fill={finalColor}
          d="M10 8.333A3.333 3.333 0 1 0 10 15a3.333 3.333 0 0 0 0-6.667Zm0 5A1.667 1.667 0 1 1 10 10a1.667 1.667 0 0 1 0 3.334Z"
        />
        <Path
          fill={finalColor}
          d="M18.78 3.435 16.565 1.22A4.138 4.138 0 0 0 13.619 0H4.167A4.172 4.172 0 0 0 0 4.167v11.666A4.172 4.172 0 0 0 4.167 20h11.666A4.172 4.172 0 0 0 20 15.833V6.381a4.14 4.14 0 0 0-1.22-2.946Zm-4.613-1.702V2.5a2.5 2.5 0 0 1-2.5 2.5H8.333a2.5 2.5 0 0 1-2.5-2.5v-.833h7.786c.185.001.368.024.548.066Zm4.166 14.1a2.5 2.5 0 0 1-2.5 2.5H4.167a2.5 2.5 0 0 1-2.5-2.5V4.167a2.5 2.5 0 0 1 2.5-2.5V2.5a4.172 4.172 0 0 0 4.166 4.167h3.334a4.16 4.16 0 0 0 4.135-3.854l1.8 1.8c.467.47.73 1.105.731 1.768v9.452Z"
        />
      </Svg>
    )
  } else if (type === 'trash') {
    const defaultWidth = size ? size : 24
    return (
      <Svg width={defaultWidth} height={defaultWidth} viewBox="0 0 24 24" fill="none">
        <Path
          fill={finalColor}
          d="M21 4h-3.1A5.009 5.009 0 0 0 13 0h-2a5.009 5.009 0 0 0-4.9 4H3a1 1 0 0 0 0 2h1v13a5.006 5.006 0 0 0 5 5h6a5.006 5.006 0 0 0 5-5V6h1a1 1 0 0 0 0-2ZM11 2h2a3.006 3.006 0 0 1 2.829 2H8.17A3.006 3.006 0 0 1 11 2Zm7 17a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V6h12v13Z"
        />
        <Path
          fill={finalColor}
          d="M10 17.999a1 1 0 0 0 1-1v-6a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1ZM14 17.999a1 1 0 0 0 1-1v-6a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1Z"
        />
      </Svg>
    )
  }
}

export type TIcons = 'box' | 'plus' | 'settings' | 'keyboard-down' | 'trash' | 'haptics' | 'sounds' | 'check' | 'disk'

export default Icon
