import { useEffect, useState } from 'react'
import * as SQLite from 'expo-sqlite'
import { migrateChecksTable, migrateHabitsTable, migrateStatisticsTable } from '~queries/executeMigrations'

const db = SQLite.openDatabase('trackist.db')

export default function useDatabase() {
  const [ready, setReady] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function executeMigrations() {
      try {
        await migrateHabitsTable(db)
        await migrateChecksTable(db)
        await migrateStatisticsTable(db)

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
