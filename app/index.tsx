import { KeyboardAvoidingView, Platform } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Block from '~components/atoms/Block'
import HabitsListTitle from '~components/molecules/HabitsListTitle'
import BottomTab from '~components/organisms/BottomTab'
import HabitsList from '~components/organisms/HabitsList'
import { useHabits } from '~providers/HabitsProvider'
import { useTheme } from '~providers/ThemeProvider'

export default function App() {
  // Services
  const { colors } = useTheme()
  const { activeHabits } = useHabits()

  // Check platform
  const isIos = Platform.OS === 'ios'
  const behavior = isIos ? 'padding' : 'height'

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={behavior} enabled keyboardVerticalOffset={0}>
      <Block flex={1} style={{ backgroundColor: colors.n10 }}>
        <SafeAreaView style={{ flex: 1 }}>
          <HabitsListTitle total={activeHabits.length} />
          <HabitsList habits={activeHabits} />
          <BottomTab />
        </SafeAreaView>
      </Block>
    </KeyboardAvoidingView>
  )
}
