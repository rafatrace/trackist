import { StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useTheme } from '~providers/ThemeProvider'
import tinycolor from 'tinycolor2'

type TGradientProps = {
  height: number
}

const Gradient = ({ height }: TGradientProps) => {
  // Services
  const { colors } = useTheme()

  const endColor = tinycolor(colors.n10).setAlpha(0).toString()

  return <LinearGradient style={{ ...styles.container, height }} colors={[endColor, colors.n10]} />
}

/**
 * Styles
 */
const styles = StyleSheet.create({
  container: { position: 'absolute', top: 0, left: 0, right: 0 }
})

export default Gradient
