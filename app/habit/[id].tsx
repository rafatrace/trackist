import { router, useLocalSearchParams } from 'expo-router'
import { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Block from '~components/atoms/Block'
import getHabitQuery from '~queries/getHabitQuery'
import { useHabits } from '~providers/HabitsProvider'
import { useTheme } from '~providers/ThemeProvider'
import DeleteBottomModal from '~components/screens/Habit/DeleteBottomModal'
import Options from '~components/screens/Habit/Options'
import StreakHeader from '~components/screens/Habit/StreakHeader'
import Animated, { FadeInDown } from 'react-native-reanimated'
import Statistics from '~components/screens/Habit/Statistics'
import { THabitWithTodayCheckAndStreak } from '~queries/getActiveHabitsQuery'

export default function Habit() {
  // Router
  const { id } = useLocalSearchParams<{ id: string }>()

  // Services
  const { colors } = useTheme()
  const { removeHabit } = useHabits()

  // Local state
  const [habit, setHabit] = useState<THabitWithTodayCheckAndStreak>(null)
  const [open, setOpen] = useState<boolean>(false)

  // Load
  useEffect(() => {
    const loadHabit = async () => {
      setHabit(await getHabitQuery(id))
    }

    loadHabit()
  }, [id])

  const alertAboutRemoval = () => {
    setOpen(true)
  }

  const goBack = () => {
    if (router.canGoBack()) {
      router.back()
    }
  }

  /**
   * Remove and go back
   */
  const remove = async () => {
    close()
    await removeHabit(id)
    goBack()
  }

  const close = () => {
    setOpen(false)
  }

  return (
    <Block flex={1} style={{ backgroundColor: colors.n10 }}>
      <SafeAreaView edges={['bottom']}>
        {/* Close, Streak illustration and Title */}
        <StreakHeader {...{ habit, goBack }} />

        <Animated.View entering={FadeInDown.delay(700).springify()}>
          <Block style={{ padding: 20 }}>
            <Statistics habit={habit} />
            <Options archive={() => console.log('archive')} remove={alertAboutRemoval} />
          </Block>
        </Animated.View>
      </SafeAreaView>

      <DeleteBottomModal {...{ open, close, habit, remove }} />
    </Block>
  )
}
