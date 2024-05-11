import { checks } from 'db/schema'
import { orm } from '~utils/getDatabase'
import { eq } from 'drizzle-orm'
import { SQLiteRunResult } from 'expo-sqlite/next'

const removeCheck = async (id: number): Promise<SQLiteRunResult> => {
  return await orm.delete(checks).where(eq(checks.id, id))
}

export default removeCheck
