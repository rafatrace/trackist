import { router } from 'expo-router'
import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { Animated, StyleSheet, TouchableHighlight } from 'react-native'
import Icon from '~components/atoms/Icon'
import { useTheme } from '~providers/ThemeProvider'
import { showNewHabitInputAtom } from '~states/saveInput'
import * as Haptics from 'expo-haptics'

const marginBottom = new Animated.Value(0)

const BottomTab = () => {
  // Services
  const { colors } = useTheme()

  // Global state
  const [showNewHabitInput, setShowNewHabitInput] = useAtom(showNewHabitInputAtom)

  // When showNewHabitInput changes value
  useEffect(() => {
    if (showNewHabitInput) {
      Animated.timing(marginBottom, {
        toValue: -20,
        duration: 400,
        useNativeDriver: false
      }).start()
    } else {
      Animated.timing(marginBottom, {
        toValue: 0,
        duration: 400,
        useNativeDriver: false
      }).start()
    }
  }, [showNewHabitInput])

  // Navigation
  const goToArchive = () => {
    router.push('archive')
  }

  const goToSettings = () => {
    router.push('settings')
  }

  /**
   * Toggle new habit input
   */
  const toggleNewHabitInput = () => {
    Haptics.selectionAsync()
    setShowNewHabitInput(!showNewHabitInput)
  }

  return (
    <Animated.View style={{ ...styles.container, marginBottom }}>
      <TouchableHighlight onPress={goToArchive} underlayColor={colors.n20} style={styles.button}>
        <Icon type="box" color={colors.n80} size={24} />
      </TouchableHighlight>
      <TouchableHighlight
        onPress={toggleNewHabitInput}
        underlayColor={colors.n60}
        style={{ ...styles.button, backgroundColor: colors.n80 }}
      >
        <Icon type={showNewHabitInput ? 'keyboard-down' : 'plus'} color={colors.n10} size={20} />
      </TouchableHighlight>
      <TouchableHighlight onPress={goToSettings} underlayColor={colors.n20} style={styles.button}>
        <Icon type="settings" color={colors.n80} size={24} />
      </TouchableHighlight>
    </Animated.View>
  )
}

/**
 * Styles
 */
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 50,
    paddingTop: 10
  },
  button: {
    width: 44,
    height: 44,
    borderRadius: 22,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default BottomTab
