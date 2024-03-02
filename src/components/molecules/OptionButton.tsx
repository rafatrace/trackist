import { StyleSheet, TouchableHighlight } from 'react-native'
import Block from '~components/atoms/Block'
import Icon, { TIcons } from '~components/atoms/Icon'
import TextLabel from '~components/atoms/TextLabel'
import { useTheme } from '~providers/ThemeProvider'

type TOptionButtonProps = {
  icon: TIcons
  action: () => void
  children: string
}

const OptionButton = ({ icon, action, children }: TOptionButtonProps) => {
  // Services
  const { colors } = useTheme()

  return (
    <TouchableHighlight onPress={action} underlayColor={colors.n20}>
      <Block row colCenter gap={18}>
        <Icon type={icon} color={colors.n80} size={22} />
        <Block flex={1} style={{ ...styles.text, borderBottomColor: colors.n20 }}>
          <TextLabel size="md" color="n80">
            {children}
          </TextLabel>
        </Block>
      </Block>
    </TouchableHighlight>
  )
}

/**
 * Styles
 */
const styles = StyleSheet.create({
  text: { paddingVertical: 16, borderBottomWidth: 1 }
})

export default OptionButton
