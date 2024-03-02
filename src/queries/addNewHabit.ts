import { habits } from 'db/schema'
import { ExpoSQLiteDatabase } from 'drizzle-orm/expo-sqlite/driver'

const addNewHabit = async (db: ExpoSQLiteDatabase<Record<string, never>>, name: string) => {
  return db.insert(habits).values({ name }).returning()
}

export default addNewHabit
