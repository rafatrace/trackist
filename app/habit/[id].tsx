import { router, useLocalSearchParams } from 'expo-router'
import { useEffect, useState } from 'react'
import { TouchableHighlight, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { THabit } from '~@types/habits'
import Block from '~components/atoms/Block'
import TextLabel from '~components/atoms/TextLabel'
import getHabitQuery from '~queries/getHabitQuery'
import { useHabits } from '~providers/HabitsProvider'

export default function Habit() {
  // Router
  const { id } = useLocalSearchParams<{ id: string }>()

  // Services
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
    <Block flex={1} style={{ padding: 20 }}>
      <SafeAreaView edges={['bottom']}>
        {/* Header */}
        <Block row rowEnd>
          <TouchableOpacity onPress={goBack}>
            <TextLabel size="lg" color="n80">
              Close
            </TextLabel>
          </TouchableOpacity>
        </Block>

        {habit != null && (
          <Block style={{ marginTop: 10 }}>
            <TextLabel size="xl" weight="medium" color="n80">
              {habit.name}
            </TextLabel>

            <TouchableHighlight onPress={remove}>
              <TextLabel>Delete</TextLabel>
            </TouchableHighlight>
          </Block>
        )}
      </SafeAreaView>
    </Block>
  )
}
