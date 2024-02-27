import { SafeAreaView } from 'react-native-safe-area-context'
import Block from '~components/atoms/Block'
import TextLabel from '~components/atoms/TextLabel'
import { useTheme } from '~providers/ThemeProvider'

export default function App() {
  // Services
  const { colors } = useTheme()

  return (
    <Block flex={1} style={{ backgroundColor: colors.n10 }}>
      <SafeAreaView>
        <TextLabel color="n80" size="xxl" weight="bold" center>
          Home Screen
        </TextLabel>
      </SafeAreaView>
    </Block>
  )
}
