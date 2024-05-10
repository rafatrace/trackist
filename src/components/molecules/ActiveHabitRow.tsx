import { StyleSheet, TouchableHighlight } from 'react-native'
import Block from '~components/atoms/Block'
import TextLabel from '~components/atoms/TextLabel'
import { radius } from '~constants/radius'
import { useTheme } from '~providers/ThemeProvider'
import Checkbox from './Checkbox'
import { router } from 'expo-router'
import { THabitWithTodayCheck } from '~queries/getActiveHabitsQuery'

type TActiveHabitRowProps = {
  habit: THabitWithTodayCheck
}

const ActiveHabitRow = ({ habit }: TActiveHabitRowProps) => {
  // Services
  const { colors } = useTheme()

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
        </Block>
      </TouchableHighlight>

      {/* Checkbox */}
      <Checkbox isActive={habit.isChecked} action={() => console.log(123)} />
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
