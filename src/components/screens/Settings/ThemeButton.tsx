import { StyleSheet, TouchableHighlight } from 'react-native'
import Block from '~components/atoms/Block'
import Icon, { TIcons } from '~components/atoms/Icon'
import TextLabel from '~components/atoms/TextLabel'
import { radius } from '~constants/radius'
import { Themes } from '~constants/themeColors'
import { useTheme } from '~providers/ThemeProvider'
import * as Haptics from 'expo-haptics'

type TThemeButtonProps = {
  theme: 'default' | Themes
}

const ThemeButton = ({ theme }: TThemeButtonProps) => {
  // Services
  const { colors, changeTopTheme, theme: selectedTheme, systemDefault } = useTheme()

  // Labels per theme
  const labels = {
    default: 'System',
    light: 'Light mode',
    dark: 'Dark mode'
  }

  // Icons per theme
  const icons: Record<'default' | Themes, TIcons> = {
    default: 'system',
    light: 'sun',
    dark: 'moon'
  }

  /**
   * Change theme on press
   */
  const changeTheme = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
    changeTopTheme(theme)
  }

  const isSelected = (selectedTheme === theme && !systemDefault) || (systemDefault && theme === 'default')

  return (
    <TouchableHighlight
      style={{ ...styles.button, backgroundColor: colors.n10 }}
      underlayColor={colors.n20}
      onPress={changeTheme}
    >
      <Block
        gap={6}
        rowCenter
        colCenter
        style={{ ...styles.wrapper, borderColor: colors.n80, borderWidth: isSelected ? 2 : 0 }}
      >
        <Icon type={icons[theme]} color={colors.accent} />
        <TextLabel size="md" color="n80">
          {labels[theme]}
        </TextLabel>
      </Block>
    </TouchableHighlight>
  )
}

/**
 * Styles
 */
const styles = StyleSheet.create({
  button: { flex: 1, borderRadius: radius.lg },
  wrapper: { height: 78, paddingHorizontal: 14, paddingVertical: 12, borderRadius: radius.lg }
})

export default ThemeButton
