import { ReactNode } from 'react'
import { Text, StyleProp, TextStyle } from 'react-native'
import { useTheme } from '~providers/ThemeProvider'

type TSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
type TColor = 'n10' | 'n20' | 'n30' | 'n40' | 'n60' | 'n70' | 'n80' | 'accent'
type TWeight = 'regular' | 'medium' | 'bold'

type TTextLabelProps = {
  size?: TSize
  color?: TColor
  weight?: TWeight
  lineThrough?: boolean
  center?: boolean
  right?: boolean
  height?: number
  spacing?: number
  opacity?: number
  numberOfLines?: number
  style?: StyleProp<TextStyle>
  italic?: boolean
  selectable?: boolean
  children?: ReactNode
}

const sizes = {
  xs: 10,
  sm: 12,
  md: 14,
  lg: 16,
  xl: 20,
  xxl: 24
}

const weights = {
  regular: '400',
  medium: '500',
  bold: '700'
}

const TextLabel = ({
  center,
  right,
  color,
  size,
  height,
  spacing,
  numberOfLines,
  weight,
  opacity,
  style,
  children,
  italic,
  selectable,
  lineThrough,
  ...rest
}: TTextLabelProps) => {
  // Services
  const { colors } = useTheme()

  // Handle font color
  const fontColor = color != null ? colors[color] : 'red'

  // Handle size
  const fontSize = size != null ? sizes[size] : 14

  // Handle weight
  const fontWeight = (weight != null ? weights[weight] : '400') as TextStyle['fontWeight']

  const textStyles: StyleProp<TextStyle> = [
    { fontSize, color: fontColor, fontWeight },
    italic && { fontStyle: 'italic' },
    height && { lineHeight: height },
    spacing && { letterSpacing: spacing },
    opacity && { opacity },
    center && { textAlign: 'center' },
    right && { textAlign: 'right' },
    lineThrough && { textDecorationLine: 'line-through' },
    style
  ]

  return (
    <Text
      style={textStyles}
      maxFontSizeMultiplier={1.2}
      selectionColor={colors.n30}
      numberOfLines={numberOfLines}
      selectable={selectable}
      {...rest}
    >
      {children}
    </Text>
  )
}

export default TextLabel
