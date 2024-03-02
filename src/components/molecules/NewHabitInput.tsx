import { useAtom } from 'jotai'
import { useRef, useState } from 'react'
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Block from '~components/atoms/Block'
import Icon from '~components/atoms/Icon'
import { radius } from '~constants/radius'
import { useHabits } from '~providers/HabitsProvider'
import { useTheme } from '~providers/ThemeProvider'
import { showNewHabitInputAtom } from '~states/saveInput'

const NewHabitInput = () => {
  // Refs
  const inputRef = useRef(null)

  // Services
  const { colors } = useTheme()
  const { addNew } = useHabits()

  // Global state
  const [showNewHabitInput, setShowNewHabitInput] = useAtom(showNewHabitInputAtom)

  // Local state
  const [name, setName] = useState<string>('')

  const save = async () => {
    await addNew(name)
    setShowNewHabitInput(false)
    setName('')
  }

  if (!showNewHabitInput) return null

  const focus = () => {
    inputRef.current?.focus()
  }

  return (
    <Block style={{ ...styles.container }}>
      <TextInput
        ref={inputRef}
        placeholder="New habit"
        placeholderTextColor={colors.n40}
        cursorColor={colors.n80}
        selectionColor={colors.n80}
        style={{ ...styles.input, backgroundColor: colors.n10 }}
        onLayout={focus}
        value={name}
        onChangeText={(val) => setName(val)}
        onSubmitEditing={save}
        enterKeyHint="send"
        onBlur={() => setShowNewHabitInput(false)}
      />
      <TouchableOpacity style={styles.save} onPress={save}>
        <Icon type="disk" color={colors.n80} />
      </TouchableOpacity>
    </Block>
  )
}

/**
 * Styles
 */
const styles = StyleSheet.create({
  container: { position: 'relative', marginTop: 4 },
  input: { paddingLeft: 14, paddingVertical: 14, paddingRight: 40, borderRadius: radius.lg },
  save: { position: 'absolute', top: 2, right: 0, padding: 10 }
})

export default NewHabitInput
