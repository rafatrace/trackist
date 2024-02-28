import { StyleSheet, TouchableHighlight } from 'react-native'
import { THabit } from '~@types/habits'
import Block from '~components/atoms/Block'
import TextLabel from '~components/atoms/TextLabel'
import { radius } from '~constants/radius'
import { useTheme } from '~providers/ThemeProvider'
import Checkbox from './Checkbox'

type TActiveHabitRowProps = {
  habit: THabit
  isLast: boolean
}

const ActiveHabitRow = ({ habit, isLast }: TActiveHabitRowProps) => {
  // Services
  const { colors } = useTheme()

  return (
    <Block style={{ ...styles.container, marginBottom: isLast ? 0 : 4 }}>
      {/* Main row button */}
      <TouchableHighlight style={{ ...styles.rowButton, backgroundColor: colors.n10 }}>
        <Block row colCenter>
          <Block flex={1} style={styles.text}>
            <TextLabel color="n80" height={24}>
              {habit.name}
            </TextLabel>
          </Block>
        </Block>
      </TouchableHighlight>

      {/* Checkbox */}
      <Checkbox isActive={true} action={() => console.log(123)} />
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
