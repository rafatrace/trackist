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
import BottomModal from '~components/organisms/BottomModal'
import DangerButton from '~components/molecules/DangerButton'
import DeleteBottomModal from '~components/screens/Habit/DeleteBottomModal'
import Options from '~components/screens/Habit/Options'

export default function Habit() {
  // Router
  const { id } = useLocalSearchParams<{ id: string }>()

  // Services
  const { colors } = useTheme()
  const { removeHabit } = useHabits()

  // Local state
  const [habit, setHabit] = useState<THabit>(null)
  const [open, setOpen] = useState<boolean>(false)

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

  const alertAboutRemoval = () => {
    setOpen(true)
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

        {/* Habit name */}
        <Block style={{ marginTop: 10 }}>
          <TextLabel size="xl" weight="medium" color="n80">
            {habit?.name}
          </TextLabel>
        </Block>

        {/* Statistics */}
        <SmallTitle>Statistics</SmallTitle>

        <Options archive={() => console.log('archive')} remove={alertAboutRemoval} />
      </SafeAreaView>

      <DeleteBottomModal {...{ open, close, habit, remove }} />
    </Block>
  )
}
