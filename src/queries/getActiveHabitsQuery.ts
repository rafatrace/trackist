import { THabit } from '~@types/habits'
import { habits } from 'db/schema'
import { orm } from '~utils/getDb'

const getActiveHabitsQuery = async (): Promise<THabit[]> => {
  const result = (await orm.select().from(habits)) as THabit[]
  return result
}

export default getActiveHabitsQuery
