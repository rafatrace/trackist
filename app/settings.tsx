import { StyleSheet, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Block from '~components/atoms/Block'
import TextLabel from '~components/atoms/TextLabel'
import { useTheme } from '~providers/ThemeProvider'
import { router } from 'expo-router'
import SmallTitle from '~components/atoms/SmallTitle'
import { radius } from '~constants/radius'
import ThemeButton from '~components/screens/Settings/ThemeButton'

export default function Settings() {
  // Services
  const { colors } = useTheme()

  const goBack = () => {
    if (router.canGoBack()) {
      router.back()
    }
  }

  return (
    <Block flex={1} style={{ backgroundColor: colors.n10 }}>
      <SafeAreaView edges={['bottom']}>
        {/* Header */}
        <Block style={styles.wrapper}>
          <Block row spaceBetween>
            <Block flex={1} />
            <TextLabel color="n70" size="lg" weight="medium">
              Settings
            </TextLabel>
            <Block flex={1} rowEnd>
              <TouchableOpacity onPress={goBack}>
                <TextLabel size="lg" color="n80">
                  Close
                </TextLabel>
              </TouchableOpacity>
            </Block>
          </Block>
        </Block>

        {/* Accessibility */}
        <Block style={styles.accessibility}>
          <SmallTitle>Accessibility</SmallTitle>
          <Block row gap={6} style={{ ...styles.container, backgroundColor: colors.n20 }}>
            <ThemeButton theme="default" />
            <ThemeButton theme="light" />
            <ThemeButton theme="dark" />
          </Block>
        </Block>
      </SafeAreaView>
    </Block>
  )
}

/**
 * Styles
 */
const styles = StyleSheet.create({
  wrapper: { padding: 20 },
  accessibility: { paddingHorizontal: 20 },
  container: { marginHorizontal: -10, padding: 10, borderRadius: radius.xl, marginTop: 10, marginBottom: 20 }
})
