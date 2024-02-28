import { router } from 'expo-router'
import { StyleSheet, TouchableHighlight } from 'react-native'
import Block from '~components/atoms/Block'
import Icon from '~components/atoms/Icon'
import { useTheme } from '~providers/ThemeProvider'

const BottomTab = () => {
  // Services
  const { colors } = useTheme()

  // Navigation
  const goToArchive = () => {
    router.push('archive')
  }

  const goToSettings = () => {
    router.push('settings')
  }

  return (
    <Block row colCenter spaceBetween style={styles.container}>
      <TouchableHighlight onPress={goToArchive} underlayColor={colors.n20} style={styles.button}>
        <Icon type="box" color={colors.n80} size={24} />
      </TouchableHighlight>
      <TouchableHighlight
        onPress={goToSettings}
        underlayColor={colors.n60}
        style={{ ...styles.button, backgroundColor: colors.n80 }}
      >
        <Icon type="plus" color={colors.n10} size={20} />
      </TouchableHighlight>
      <TouchableHighlight onPress={goToSettings} underlayColor={colors.n20} style={styles.button}>
        <Icon type="settings" color={colors.n80} size={24} />
      </TouchableHighlight>
    </Block>
  )
}

/**
 * Styles
 */
const styles = StyleSheet.create({
  container: { marginHorizontal: 50, paddingTop: 10 },
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
