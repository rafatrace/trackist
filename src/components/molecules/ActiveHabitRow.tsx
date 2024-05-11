import { StyleSheet, TouchableHighlight } from 'react-native'
import Block from '~components/atoms/Block'
import TextLabel from '~components/atoms/TextLabel'
import { radius } from '~constants/radius'
import { useTheme } from '~providers/ThemeProvider'
import Checkbox from './Checkbox'
import { router } from 'expo-router'
import { THabitWithTodayCheckAndStreak } from '~queries/getActiveHabitsQuery'
import { useHabits } from '~providers/HabitsProvider'
import dayjs from 'dayjs'
import Flame from '~components/screens/Habit/Flame'

type TActiveHabitRowProps = {
  habit: THabitWithTodayCheckAndStreak
}

const ActiveHabitRow = ({ habit }: TActiveHabitRowProps) => {
  // Services
  const { colors } = useTheme()
  const { toggleCheck } = useHabits()

  const today = dayjs(Date.now()).format('YYYY-MM-DD')

  const goToSingleScreen = () => {
    router.push({
      pathname: '/habit/[id]',
      params: { id: habit.id }
    })
  }

  return (
    <Block style={styles.container}>
      {/* Main row button */}
      <TouchableHighlight
        onPress={goToSingleScreen}
        underlayColor={colors.n20}
        style={{ ...styles.rowButton, backgroundColor: colors.n10 }}
      >
        <Block row colCenter>
          <Block flex={1} style={styles.text}>
            <TextLabel color="n80" height={24}>
              {habit.name}
            </TextLabel>
          </Block>
          {habit.streaks[today] != null && (
            <Block row rowCenter colCenter gap={4}>
              <TextLabel size="lg" weight="medium" color="n80">
                {habit.streaks[today]}
              </TextLabel>
              <Flame size="tiny" />
            </Block>
          )}
        </Block>
      </TouchableHighlight>

      {/* Checkbox */}
      <Checkbox isActive={habit.isChecked} action={() => toggleCheck(habit)} />
    </Block>
  )
}

/**
 * Styles
 */
const styles = StyleSheet.create({
  container: { position: 'relative' },
  rowButton: { paddingHorizontal: 14, paddingVertical: 12, borderRadius: radius.lg },
  text: { marginLeft: 30 }
})

export default ActiveHabitRow
