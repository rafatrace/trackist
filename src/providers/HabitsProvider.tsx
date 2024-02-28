import { createContext, useContext, useEffect, useState } from 'react'
import { THabit } from '~@types/habits'
import useDatabase from '~hooks/useDatabase'
import addNewHabit from '~queries/addNewHabit'
import getActiveHabits from '~queries/getActiveHabits'

/**
 * Create context
 */
export const HabitsContext = createContext<{
  activeHabits: THabit[]
  addNew: (title: string) => void
}>({
  activeHabits: [],
  addNew: null
})

/**
 * Create provider
 */
export default function HabitsProvider({ children }: React.PropsWithChildren<unknown>) {
  // Services
  const { ready, db } = useDatabase()

  // State
  const [activeHabits, setActiveHabits] = useState<THabit[]>([])

  // Load habits on first load after database is ready
  useEffect(() => {
    if (ready) {
      loadActiveHabits()
    }
  }, [ready, db])

  /**
   * Load active habits into state
   */
  const loadActiveHabits = () => {
    getActiveHabits(db, setActiveHabits)
  }

  /**
   * Add new habit
   */
  const addNew = async (title: string) => {
    try {
      await addNewHabit(db, title)
      loadActiveHabits()
    } catch (e) {
      console.log(e)
    }
  }

  return <HabitsContext.Provider value={{ activeHabits, addNew }}>{children}</HabitsContext.Provider>
}

export function useHabits() {
  return useContext(HabitsContext)
}
