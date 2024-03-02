import { createContext, useContext, useEffect, useState } from 'react'
import { THabit } from '~@types/habits'
import addNewHabit from '~queries/addNewHabit'
import getActiveHabits from '~queries/getActiveHabits'
import { drizzle } from 'drizzle-orm/expo-sqlite/driver'
import { openDatabaseSync } from 'expo-sqlite/next'

/**
 * Create context
 */
export const HabitsContext = createContext<{
  activeHabits: THabit[]
  addNew: (title: string) => Promise<any>
}>({
  activeHabits: [],
  addNew: null
})

// Database
const expo = openDatabaseSync('trackist.db')
const db = drizzle(expo)

/**
 * Create provider
 */
export default function HabitsProvider({ children }: React.PropsWithChildren<unknown>) {
  // State
  const [activeHabits, setActiveHabits] = useState<THabit[]>([])

  // Load habits on first load after database is ready
  useEffect(() => {
    loadActiveHabits()
  }, [])

  /**
   * Load active habits into state
   */
  const loadActiveHabits = async () => {
    const result = await getActiveHabits(db)
    setActiveHabits(result)
  }

  /**
   * Add new habit
   */
  const addNew = async (name: string) => {
    try {
      await addNewHabit(db, name)
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
