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
  } else if (type === 'close') {
    const defaultWidth = size ? size : 24
    return (
      <Svg width={defaultWidth} height={defaultWidth} viewBox="0 0 24 24" fill="none">
        <Path
          fill={finalColor}
          d="M18 6a1 1 0 0 0-1.414 0L12 10.586 7.414 6A1 1 0 0 0 6 7.414L10.586 12 6 16.586A1 1 0 0 0 7.414 18L12 13.414 16.586 18A1 1 0 0 0 18 16.586L13.414 12 18 7.414A1 1 0 0 0 18 6Z"
        />
      </Svg>
    )
  } else if (type === 'system') {
    const defaultWidth = size ? size : 24
    return (
      <Svg width={defaultWidth} height={defaultWidth} viewBox="0 0 24 24" fill="none">
        <Path
          fill={finalColor}
          d="M15 0H9a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h6a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5ZM9 2h6a3 3 0 0 1 3 3v11H6V5a3 3 0 0 1 3-3Zm6 20H9a3 3 0 0 1-3-3v-1h12v1a3 3 0 0 1-3 3Z"
        />
        <Path fill={finalColor} d="M12 20.999a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
      </Svg>
    )
  } else if (type === 'sun') {
    const defaultWidth = size ? size : 24
    return (
      <Svg width={defaultWidth} height={defaultWidth} viewBox="0 0 24 24" fill="none">
        <Path
          fill={finalColor}
          d="M23 11h-4.08a6.92 6.92 0 0 0-.429-1.607l3.527-2.044a1 1 0 1 0-1-1.731l-3.53 2.047a7.064 7.064 0 0 0-1.149-1.15l2.046-3.531a1 1 0 0 0-1.731-1l-2.047 3.525A6.9 6.9 0 0 0 13 5.08V1a1 1 0 0 0-2 0v4.08a6.9 6.9 0 0 0-1.607.429L7.349 1.982a1 1 0 0 0-1.731 1l2.046 3.533a7.063 7.063 0 0 0-1.149 1.15l-3.53-2.047a1 1 0 1 0-1 1.731l3.524 2.044A6.924 6.924 0 0 0 5.08 11H1a1 1 0 0 0 0 2h4.08c.078.551.222 1.09.429 1.607l-3.527 2.044a1 1 0 1 0 1 1.731l3.53-2.047a7.06 7.06 0 0 0 1.149 1.15l-2.043 3.531a1 1 0 0 0 1.731 1l2.044-3.527A6.95 6.95 0 0 0 11 18.92V23a1 1 0 0 0 2 0v-4.08a6.949 6.949 0 0 0 1.607-.429l2.044 3.527a1 1 0 0 0 1.731-1l-2.046-3.531a7.062 7.062 0 0 0 1.149-1.15l3.53 2.047a1 1 0 1 0 1-1.731l-3.527-2.044A6.925 6.925 0 0 0 18.92 13H23a1 1 0 0 0 0-2Zm-11 6c-6.608-.21-6.606-9.791 0-10 6.608.21 6.606 9.791 0 10Z"
        />
      </Svg>
    )
  } else if (type === 'moon') {
    const defaultWidth = size ? size : 24
    return (
      <Svg width={defaultWidth} height={defaultWidth} viewBox="0 0 24 24" fill="none">
        <Path
          fill={finalColor}
          d="M15 24a12.022 12.022 0 0 1-8.914-3.966 11.9 11.9 0 0 1-3.02-9.309A12.122 12.122 0 0 1 13.086.152a13.061 13.061 0 0 1 5.03.205 2.5 2.5 0 0 1 1.108 4.226c-4.56 4.166-4.164 10.644.807 14.41a2.5 2.5 0 0 1-.7 4.32c-1.398.457-2.86.689-4.33.687Zm.076-22a10.792 10.792 0 0 0-1.677.127 10.093 10.093 0 0 0-8.344 8.8A9.927 9.927 0 0 0 7.572 18.7a10.476 10.476 0 0 0 11.092 2.73.5.5 0 0 0 .14-.857c-5.93-4.478-6.4-12.486-.949-17.449a.46.46 0 0 0 .128-.466.49.49 0 0 0-.356-.36A10.657 10.657 0 0 0 15.077 2Z"
        />
      </Svg>
    )
  }
}

export type TIcons =
  | 'box'
  | 'plus'
  | 'settings'
  | 'keyboard-down'
  | 'trash'
  | 'haptics'
  | 'sounds'
  | 'check'
  | 'disk'
  | 'close'
  | 'system'
  | 'sun'
  | 'moon'

export default Icon
