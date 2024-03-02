import { StyleSheet, TouchableHighlight } from 'react-native'
import TextLabel from '~components/atoms/TextLabel'
import { radius } from '~constants/radius'
import { useTheme } from '~providers/ThemeProvider'
import tinycolor from 'tinycolor2'

type TDangerButtonProps = {
  action: () => void
  children: string
}

const DangerButton = ({ children, action }: TDangerButtonProps) => {
  // Services
  const { colors } = useTheme()

  return (
    <TouchableHighlight
      underlayColor={tinycolor(colors.danger).darken(20).toString()}
      onPress={action}
      style={{ ...styles.button, backgroundColor: colors.danger }}
    >
      <TextLabel size="md" weight="bold" style={{ color: 'white' }}>
        {children}
      </TextLabel>
    </TouchableHighlight>
  )
}

/**
 * Styles
 */
const styles = StyleSheet.create({
  button: { height: 44, borderRadius: radius.lg, display: 'flex', alignItems: 'center', justifyContent: 'center' }
})

export default DangerButton
