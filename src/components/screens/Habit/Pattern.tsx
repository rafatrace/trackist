import Block from '~components/atoms/Block'
import { StyleSheet, useWindowDimensions } from 'react-native'
import { useTheme } from '~providers/ThemeProvider'
import Animated, { FadeInUp } from 'react-native-reanimated'

type TPatternProps = {
  height: number
}

const squareSize = 3
const squareMargin = 5
const squareContainerSize = squareSize + squareMargin * 2

const Pattern = ({ height }: TPatternProps) => {
  // Services
  const { width } = useWindowDimensions()
  const { colors } = useTheme()

  const squaresPerRow = Math.floor(width / squareContainerSize)
  const squaresInHeight = Math.floor(height / squareContainerSize)
  const totalSquares = squaresPerRow * squaresInHeight

  return (
    <Animated.View entering={FadeInUp.delay(200).springify()}>
      <Block row rowCenter wrap style={styles.container}>
        {[...Array(totalSquares)].map((_, i) => (
          <Block key={i} style={{ ...styles.square, backgroundColor: colors.n20 }} />
        ))}
      </Block>
    </Animated.View>
  )
}

/**
 * Styles
 */
const styles = StyleSheet.create({
  container: { position: 'absolute', top: 0, left: 0, right: 0 },
  square: { width: squareSize, height: squareSize, margin: squareMargin }
})

export default Pattern
