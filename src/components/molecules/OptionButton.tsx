import { StyleSheet, TouchableHighlight } from 'react-native'
import Block from '~components/atoms/Block'
import Icon, { TIcons } from '~components/atoms/Icon'
import TextLabel from '~components/atoms/TextLabel'
import { radius } from '~constants/radius'
import { useTheme } from '~providers/ThemeProvider'
import * as Haptics from 'expo-haptics'

type TOptionButtonProps = {
  icon: TIcons
  action: () => void
  children: string
}

const OptionButton = ({ icon, action, children }: TOptionButtonProps) => {
  // Services
  const { colors } = useTheme()

  /**
   * Add haptics to the main action
   */
  const onPress = () => {
    Haptics.selectionAsync()
    action()
  }

  return (
    <Block>
      <TouchableHighlight onPress={onPress} style={styles.button} underlayColor={colors.n20}>
        <Block row colCenter gap={18}>
          <Icon type={icon} color={colors.n80} size={22} />
          <Block flex={1} style={styles.text}>
            <TextLabel size="md" color="n80">
              {children}
            </TextLabel>
          </Block>
        </Block>
      </TouchableHighlight>
      <Block style={{ ...styles.border, backgroundColor: colors.n20 }} />
    </Block>
  )
}

/**
 * Styles
 */
const styles = StyleSheet.create({
  button: { paddingHorizontal: 10, borderRadius: radius.lg, marginHorizontal: -10 },
  text: { paddingVertical: 16 },
  border: { height: 1, marginLeft: 40 }
})

export default OptionButton
