import { createContext, useContext, useEffect, useState } from 'react'
import checkHabit from '~queries/checkHabit'
import createHabitQuery from '~queries/createHabitQuery'
import getActiveHabitsQuery, { THabitWithTodayCheck } from '~queries/getActiveHabitsQuery'
import removeCheck from '~queries/removeCheck'
import removeHabitQuery from '~queries/removeHabitQuery'

/**
 * Create context
 */
export const HabitsContext = createContext<{
  activeHabits: THabitWithTodayCheck[]
  createHabit: (title: string) => Promise<any>
  removeHabit: (id: string) => Promise<any>
  toggleCheck: (habit: THabitWithTodayCheck) => Promise<any>
}>({
  activeHabits: [],
  createHabit: null,
  removeHabit: null,
  toggleCheck: null
})

/**
 * Create provider
 */
export default function HabitsProvider({ children }: React.PropsWithChildren<unknown>) {
  // State
  const [activeHabits, setActiveHabits] = useState<THabitWithTodayCheck[]>([])

  // Load habits on first load after database is ready
  useEffect(() => {
    loadActiveHabits()
  }, [])

  /**
   * Load active habits into state
   */
  const loadActiveHabits = async () => {
    const result = await getActiveHabitsQuery()
    setActiveHabits(result)
  }

  /**
   * Add new habit
   */
  const createHabit = async (name: string) => {
    try {
      await createHabitQuery(name)
      loadActiveHabits()
    } catch (e) {
      console.log(e)
    }
  }

  /**
   * Delete habit
   */
  const removeHabit = async (id: string) => {
    try {
      await removeHabitQuery(id)
      loadActiveHabits()
    } catch (e) {
      console.log(e)
    }
  }

  /**
   * Toggle check
   */
  const toggleCheck = async (habit: THabitWithTodayCheck) => {
    try {
      if (habit.isChecked) {
        await removeCheck(habit.checkId)
      } else {
        await checkHabit(habit.id)
      }
      loadActiveHabits()
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <HabitsContext.Provider value={{ activeHabits, createHabit, removeHabit, toggleCheck }}>
      {children}
    </HabitsContext.Provider>
  )
}

export function useHabits() {
  return useContext(HabitsContext)
}
