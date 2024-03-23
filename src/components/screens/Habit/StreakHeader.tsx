import Block from '~components/atoms/Block'
import { LayoutChangeEvent, StyleSheet, TouchableOpacity } from 'react-native'
import TextLabel from '~components/atoms/TextLabel'
import { THabit } from '~@types/habits'
import Pattern from './Pattern'
import FlatIllustration from './FlameIllustration'
import { useTheme } from '~providers/ThemeProvider'
import Gradient from './Gradient'
import { useState } from 'react'
import Animated, { BounceIn, FadeInDown } from 'react-native-reanimated'

type TStreakHeaderProps = {
  habit: THabit | null
  goBack: () => void
}

const StreakHeader = ({ habit, goBack }: TStreakHeaderProps) => {
  // Services
  const { colors } = useTheme()

  // Local state
  const [height, setHeight] = useState(0)

  /**
   * Check height of element
   */
  const checkHeight = (e: LayoutChangeEvent) => {
    setHeight(e.nativeEvent.layout.height)
  }

  return (
    <Block style={styles.container}>
      <Pattern {...{ height }} />
      <Gradient {...{ height }} />

      <Block style={styles.wrapper} onLayout={checkHeight}>
        {/* Header */}
        <Block row rowEnd>
          <TouchableOpacity onPress={goBack}>
            <TextLabel size="lg" color="n80">
              Close
            </TextLabel>
          </TouchableOpacity>
        </Block>

        {/* Flame and streak */}
        <Block rowCenter>
          <Animated.View entering={BounceIn.delay(400)}>
            <Block
              rowCenter
              colCenter
              style={{
                ...styles.flameCircle,
                backgroundColor: colors.n10,
                borderColor: colors.n30
              }}
            >
              <FlatIllustration />
            </Block>
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(500).springify().stiffness(300)}>
            <Block style={{ marginTop: -20 }}>
              <TextLabel
                style={{ fontSize: 70, fontWeight: '800', lineHeight: 70, backgroundColor: colors.n10 }}
                color="n80"
              >
                9
              </TextLabel>
            </Block>
          </Animated.View>
        </Block>

        {/* Habit name */}
        <Animated.View entering={FadeInDown.delay(500).springify().stiffness(300)}>
          <Block gap={6} rowCenter style={{ marginTop: 10 }}>
            <TextLabel size="xl" weight="bold" color="n80">
              Day streak
            </TextLabel>
            <TextLabel size="md" color="n60">
              {`"${habit?.name}"`}
            </TextLabel>
          </Block>
        </Animated.View>
      </Block>
    </Block>
  )
}

/**
 * Styles
 */
const styles = StyleSheet.create({
  container: { position: 'relative' },
  wrapper: { padding: 20 },
  flameCircle: { width: 165, height: 165, borderRadius: 165, borderWidth: 1 }
})

export default StreakHeader
