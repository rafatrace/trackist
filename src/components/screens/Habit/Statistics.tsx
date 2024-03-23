import { StyleSheet } from 'react-native'
import Block from '~components/atoms/Block'
import SmallTitle from '~components/atoms/SmallTitle'
import TextLabel from '~components/atoms/TextLabel'
import OptionButton from '~components/molecules/OptionButton'
import { radius } from '~constants/radius'
import { useTheme } from '~providers/ThemeProvider'

type TStatisticsProps = {}

const Statistics = (_: TStatisticsProps) => {
  // Services
  const { colors } = useTheme()

  return (
    <>
      <SmallTitle>Statistics</SmallTitle>
      <Block row gap={4} style={{ ...styles.container, backgroundColor: colors.n20 }}>
        <Block row gap={4} flex={1} style={{ ...styles.box, backgroundColor: colors.n10 }}>
          <TextLabel size="xxl" weight="bold">
            🏅
          </TextLabel>
          <Block>
            <TextLabel size="lg" weight="bold" color="n80">
              80%
            </TextLabel>
            <TextLabel size="md" color="n80">
              Assiduity
            </TextLabel>
          </Block>
        </Block>
        <Block row gap={4} flex={1} style={{ ...styles.box, backgroundColor: colors.n10 }}>
          <TextLabel size="xxl" weight="bold">
            ⚡
          </TextLabel>
          <Block>
            <TextLabel size="lg" weight="bold" color="n80">
              432
            </TextLabel>
            <TextLabel size="md" color="n80">
              Best streak
            </TextLabel>
          </Block>
        </Block>
      </Block>
    </>
  )
}

/**
 * Styles
 */
const styles = StyleSheet.create({
  container: { marginHorizontal: -10, padding: 10, borderRadius: radius.xl, marginTop: 10, marginBottom: 20 },
  box: { paddingHorizontal: 14, paddingVertical: 12, borderRadius: radius.lg }
})

export default Statistics
