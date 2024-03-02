import { THabit } from '~@types/habits'
import { habits } from 'db/schema'
import { ExpoSQLiteDatabase } from 'drizzle-orm/expo-sqlite/driver'

const getActiveHabits = async (db: ExpoSQLiteDatabase<Record<string, never>>): Promise<THabit[]> => {
  const result = (await db.select().from(habits)) as THabit[]
  return result
}

export default getActiveHabits
