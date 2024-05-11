import { THabit } from '~@types/habits'
import { checks, habits } from 'db/schema'
import { orm } from '~utils/getDatabase'
import { sql } from 'drizzle-orm'
import dayjs from 'dayjs'

export type THabitWithTodayCheck = THabit & { isChecked: boolean; checkId: number }

const getActiveHabitsQuery = async (): Promise<THabitWithTodayCheck[]> => {
  const today = dayjs(Date.now()).format('YYYY-MM-DD')

  const statement = sql<THabitWithTodayCheck[]>`
    SELECT 
      habits.*,
      CASE
          WHEN checks.id IS NULL THEN false
          ELSE true
      END AS isChecked,
      checks.id AS checkId
    FROM ${habits}
    LEFT OUTER JOIN ${checks} 
      ON ${checks.habitId} = ${habits.id} 
        AND ${checks.createdAt} >= datetime(${today})`

  let result: THabitWithTodayCheck[] = []

  try {
    result = orm.all(statement)
  } catch (e) {
    console.log(e)
  }

  return result
}

export default getActiveHabitsQuery
