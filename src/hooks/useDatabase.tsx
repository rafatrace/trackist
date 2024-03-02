import { useEffect, useState } from 'react'
import { migrateHabitTables } from '~queries/executeMigrations'

export default function useDatabase() {
  const [ready, setReady] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function executeMigrations() {
      try {
        await migrateHabitTables()

        setReady(true)
      } catch (e) {
        setError(e)
        setReady(false)
      }
    }

    executeMigrations()
  }, [])

  return { ready, error }
}
