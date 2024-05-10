import { THabit } from '~@types/habits'
import { habits } from 'db/schema'
import { orm } from '~utils/getDatabase'
import { eq } from 'drizzle-orm'

const getHabitQuery = async (id: string): Promise<THabit> => {
  const result = await orm
    .select()
    .from(habits)
    .where(eq(habits.id, parseInt(id)))
    .limit(1)

  if (result?.[0] != null) {
    const habit = result[0] as THabit

    return habit
  }

  return null
}

export default getHabitQuery
