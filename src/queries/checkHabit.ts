import { checks } from 'db/schema'
import { orm } from '~utils/getDatabase'

const checkHabit = async (id: number) => {
  return orm.insert(checks).values({ habitId: id }).returning()
}

export default checkHabit
