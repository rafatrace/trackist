import { THabit } from '~@types/habits'
import { habits } from 'db/schema'
import { orm } from '~utils/getDb'
import { eq } from 'drizzle-orm'

const getHabitQuery = async (id: string): Promise<THabit> => {
  const result = await orm
    .select()
    .from(habits)
    .where(eq(habits.id, parseInt(id)))
    .limit(1)

  if (result?.[0] != null) {
    return result[0] as THabit
  }

  return null
}

export default getHabitQuery
