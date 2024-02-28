import { StyleSheet } from 'react-native'
import Block from '~components/atoms/Block'
import TextLabel from '~components/atoms/TextLabel'
import { useTheme } from '~providers/ThemeProvider'

type THabitsListTitleProps = {
  total: number
}

const HabitsListTitle = ({ total }: THabitsListTitleProps) => {
  // Services
  const { colors } = useTheme()

  return (
    <Block row colEnd spaceBetween style={styles.container}>
      <TextLabel size="xxl" weight="bold" color="n80">
        Today
      </TextLabel>
      <Block rowCenter colCenter style={{ ...styles.badge, backgroundColor: colors.n20 }}>
        <TextLabel size="sm" weight="bold" color="n80">
          {total}
        </TextLabel>
      </Block>
    </Block>
  )
}

/**
 * Styles
 */
const styles = StyleSheet.create({
  container: { paddingHorizontal: 20, paddingBottom: 16 },
  badge: { width: 24, height: 24, borderRadius: 12 }
})

export default HabitsListTitle
