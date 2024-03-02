import { habits } from 'db/schema'
import { orm } from '~utils/getDb'
import { eq } from 'drizzle-orm'
import { SQLiteRunResult } from 'expo-sqlite/next'

const removeHabitQuery = async (id: string): Promise<SQLiteRunResult> => {
  return await orm.delete(habits).where(eq(habits.id, parseInt(id)))
}

export default removeHabitQuery
