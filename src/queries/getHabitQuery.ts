import { checks, habits } from 'db/schema'
import { orm } from '~utils/getDatabase'
import { sql } from 'drizzle-orm'
import getHabitStreak from './getHabitStreak'
import dayjs from 'dayjs'
import { THabitWithTodayCheckAndStreak } from './getActiveHabitsQuery'

const getHabitQuery = async (id: string): Promise<THabitWithTodayCheckAndStreak> => {
  const today = dayjs(Date.now()).format('YYYY-MM-DD')

  const statement = sql<THabitWithTodayCheckAndStreak>`
    SELECT 
      habits.*,
      CASE
          WHEN checks.id IS NULL THEN false
          ELSE true
      END AS isChecked,
      checks.id AS checkId,
      (COUNT(allChecks.id) * 100 / CAST(JULIANDAY(DATE(${today})) - JULIANDAY(DATE(habits.createdAt)) AS INT)) AS assiduity
    FROM ${habits}
    LEFT OUTER JOIN ${checks} 
      ON ${checks.habitId} = ${habits.id} 
        AND ${checks.createdAt} >= datetime(${today})
    LEFT OUTER JOIN checks allChecks
      ON allChecks.habitId = habits.id
    WHERE ${habits.id} = ${id}
    GROUP BY habits.id
    LIMIT 1`

  let result: THabitWithTodayCheckAndStreak = null

  try {
    result = orm.get(statement)
  } catch (e) {
    console.log(e)
  }

  const streaks = await getHabitStreak(result.id)
  result.streaks = streaks

  return result
}

export default getHabitQuery
