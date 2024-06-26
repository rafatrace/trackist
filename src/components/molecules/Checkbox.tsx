import { StyleSheet, TouchableHighlight } from 'react-native'
import Icon from '~components/atoms/Icon'
import { radius } from '~constants/radius'
import { useTheme } from '~providers/ThemeProvider'
import * as Haptics from 'expo-haptics'

type TCheckboxProps = {
  isActive: boolean
  action: () => void
}

const Checkbox = ({ isActive, action }: TCheckboxProps) => {
  // Services
  const { colors } = useTheme()

  /**
   * Add haptics to the main action
   */
  const onPress = () => {
    const hapticsType = isActive ? 'Warning' : 'Success'
    Haptics.notificationAsync(Haptics.NotificationFeedbackType[hapticsType])

    action()
  }

  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={colors.n20}
      style={{
        ...styles.checkbox,
        borderColor: isActive ? colors.accent : colors.n40,
        backgroundColor: isActive ? colors.accent : 'transparent'
      }}
    >
      <Icon type="check" color={colors.n10} size={14} />
    </TouchableHighlight>
  )
}

/**
 * Styles
 */
const styles = StyleSheet.create({
  checkbox: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 24,
    height: 24,
    borderWidth: 2,
    borderRadius: radius.lg,
    top: 12,
    left: 14
  }
})

export default Checkbox
