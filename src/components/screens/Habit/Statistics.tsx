import { StyleSheet } from 'react-native'
import Block from '~components/atoms/Block'
import SmallTitle from '~components/atoms/SmallTitle'
import TextLabel from '~components/atoms/TextLabel'
import { radius } from '~constants/radius'
import { useTheme } from '~providers/ThemeProvider'
import { THabitWithTodayCheckAndStreak } from '~queries/getActiveHabitsQuery'

type TStatisticsProps = {
  habit: THabitWithTodayCheckAndStreak
}

const Statistics = ({ habit }: TStatisticsProps) => {
  // Services
  const { colors } = useTheme()

  const bestStreak =
    habit?.streaks != null && Object.values(habit?.streaks).length ? Math.max(...Object.values(habit.streaks)) : 0

  return (
    <>
      <SmallTitle>Statistics</SmallTitle>
      <Block row gap={4} style={{ ...styles.container, backgroundColor: colors.n20 }}>
        <Block row gap={4} flex={1} style={{ ...styles.box, backgroundColor: colors.n10 }}>
          <TextLabel size="xxl" weight="bold">
            🏅
          </TextLabel>
          <Block>
            <TextLabel size="lg" weight="bold" color="n80">
              {Math.round(habit?.assiduity)}%
            </TextLabel>
            <TextLabel size="md" color="n80">
              Assiduity
            </TextLabel>
          </Block>
        </Block>

        <Block row gap={4} flex={1} style={{ ...styles.box, backgroundColor: colors.n10 }}>
          <TextLabel size="xxl" weight="bold">
            ⚡
          </TextLabel>
          <Block>
            <TextLabel size="lg" weight="bold" color="n80">
              {bestStreak}
            </TextLabel>
            <TextLabel size="md" color="n80">
              Best streak
            </TextLabel>
          </Block>
        </Block>
      </Block>
    </>
  )
}

/**
 * Styles
 */
const styles = StyleSheet.create({
  container: { marginHorizontal: -10, padding: 10, borderRadius: radius.xl, marginTop: 10, marginBottom: 20 },
  box: { paddingHorizontal: 14, paddingVertical: 12, borderRadius: radius.lg }
})

export default Statistics
