import { habits } from 'db/schema'
import { orm } from '~utils/getDatabase'

const createHabitQuery = async (name: string) => {
  return orm.insert(habits).values({ name }).returning()
}

export default createHabitQuery
