import { useAtom } from 'jotai'
import { ScrollView, StyleSheet } from 'react-native'
import Block from '~components/atoms/Block'
import Empty from '~components/atoms/Empty'
import ActiveHabitRow from '~components/molecules/ActiveHabitRow'
import NewHabitInput from '~components/molecules/NewHabitInput'
import { radius } from '~constants/radius'
import { useTheme } from '~providers/ThemeProvider'
import { THabitWithTodayCheck } from '~queries/getActiveHabitsQuery'
import { showNewHabitInputAtom } from '~states/saveInput'

type THabitsListProps = {
  habits: THabitWithTodayCheck[]
}

const HabitsList = ({ habits }: THabitsListProps) => {
  // Services
  const { colors } = useTheme()

  // Global state
  const [showNewHabitInput] = useAtom(showNewHabitInputAtom)

  const backgroundColor = habits.length || showNewHabitInput ? colors.n20 : colors.n10

  return (
    <Block flex={1} style={styles.container}>
      <Block style={{ ...styles.backPanel, backgroundColor }}>
        <ScrollView contentContainerStyle={styles.scrollView} keyboardShouldPersistTaps="handled">
          <Block gap={4} rowCenter={!habits.length && !showNewHabitInput}>
            {habits.length || showNewHabitInput ? (
              habits.map((habit) => <ActiveHabitRow key={habit.id} {...{ habit }} />)
            ) : (
              <Empty />
            )}
            <NewHabitInput />
          </Block>
        </ScrollView>
      </Block>
    </Block>
  )
}

/**
 * Styles
 */
const styles = StyleSheet.create({
  container: { marginHorizontal: 10 },
  backPanel: { borderRadius: radius.xl },
  scrollView: { padding: 10 }
})

export default HabitsList
