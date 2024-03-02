import { useEffect, useState } from 'react'
import { openDatabaseSync } from 'expo-sqlite/next'
import { migrateHabitTables } from '~queries/executeMigrations'

const db = openDatabaseSync('trackist.db')

export default function useDatabase() {
  const [ready, setReady] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function executeMigrations() {
      try {
        await migrateHabitTables(db)

        setReady(true)
      } catch (e) {
        setError(e)
        setReady(false)
      }
    }

    executeMigrations()
  }, [])

  return { ready, error, db }
}
