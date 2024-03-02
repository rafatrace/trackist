import { router, useLocalSearchParams } from 'expo-router'
import { useEffect, useState } from 'react'
import { TouchableHighlight, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { THabit } from '~@types/habits'
import Block from '~components/atoms/Block'
import TextLabel from '~components/atoms/TextLabel'
import getHabitQuery from '~queries/getHabitQuery'
import { useHabits } from '~providers/HabitsProvider'
import OptionButton from '~components/molecules/OptionButton'
import { useTheme } from '~providers/ThemeProvider'
import SmallTitle from '~components/atoms/SmallTitle'

export default function Habit() {
  // Router
  const { id } = useLocalSearchParams<{ id: string }>()

  // Services
  const { colors } = useTheme()
  const { removeHabit } = useHabits()

  // Local state
  const [habit, setHabit] = useState<THabit>(null)

  // Load
  useEffect(() => {
    const loadHabit = async () => {
      setHabit(await getHabitQuery(id))
    }

    loadHabit()
  }, [id])

  const goBack = () => {
    if (router.canGoBack()) {
      router.back()
    }
  }

  /**
   * Remove and go back
   */
  const remove = async () => {
    await removeHabit(id)
    goBack()
  }

  return (
    <Block flex={1} style={{ padding: 20, backgroundColor: colors.n10 }}>
      <SafeAreaView edges={['bottom']}>
        {/* Header */}
        <Block row rowEnd>
          <TouchableOpacity onPress={goBack}>
            <TextLabel size="lg" color="n80">
              Close
            </TextLabel>
          </TouchableOpacity>
        </Block>

        <Block style={{ marginTop: 10 }}>
          <TextLabel size="xl" weight="medium" color="n80">
            {habit?.name}
          </TextLabel>
        </Block>

        <SmallTitle>Statistics</SmallTitle>

        <SmallTitle>More</SmallTitle>
        <Block style={{ marginTop: 5 }}>
          <OptionButton icon="box" action={() => console.log('archive')}>
            Archive habit
          </OptionButton>
          <OptionButton icon="trash" action={remove}>
            Delete forever
          </OptionButton>
        </Block>
      </SafeAreaView>
    </Block>
  )
}
