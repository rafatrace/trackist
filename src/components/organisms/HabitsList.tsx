import { ScrollView, StyleSheet } from 'react-native'
import { THabit } from '~@types/habits'
import Block from '~components/atoms/Block'
import ActiveHabitRow from '~components/molecules/ActiveHabitRow'
import { radius } from '~constants/radius'
import { useTheme } from '~providers/ThemeProvider'

type THabitsListProps = {
  habits: THabit[]
}

const HabitsList = ({ habits }: THabitsListProps) => {
  // Services
  const { colors } = useTheme()

  return (
    <Block flex={1} style={styles.container}>
      <Block style={{ ...styles.backPanel, backgroundColor: colors.n20 }}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          {habits.map((habit, index) => (
            <ActiveHabitRow key={habit.id} {...{ habit }} isLast={index === habits.length - 1} />
          ))}
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
