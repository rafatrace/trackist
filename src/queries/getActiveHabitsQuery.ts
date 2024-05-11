import { THabit } from '~@types/habits'
import { orm } from '~utils/getDatabase'
import { sql } from 'drizzle-orm'
import dayjs from 'dayjs'
import getHabitStreak, { TStreak } from './getHabitStreak'

export type THabitWithTodayCheckAndStreak = THabit & {
  isChecked: boolean
  checkId: number
  streaks: TStreak
  assiduity: number
}

const getActiveHabitsQuery = async (): Promise<THabitWithTodayCheckAndStreak[]> => {
  const today = dayjs(Date.now()).format('YYYY-MM-DD')

  const statement = sql<THabitWithTodayCheckAndStreak[]>`
    SELECT 
      habits.*,
      CASE
        WHEN checks.id IS NULL THEN false
          ELSE true
      END AS isChecked,
      checks.id AS checkId,
      (COUNT(allChecks.id) * 100 / CAST(JULIANDAY(DATE(${today})) - JULIANDAY(DATE(habits.createdAt)) AS INT)) AS assiduity
    FROM habits
    LEFT OUTER JOIN checks 
      ON checks.habitId = habits.id
          AND checks.createdAt >= DATETIME(${today})
    LEFT OUTER JOIN checks allChecks
      ON allChecks.habitId = habits.id
    GROUP BY habits.id`

  let result: THabitWithTodayCheckAndStreak[] = []

  try {
    result = orm.all(statement)
  } catch (e) {
    console.log(e)
  }

  result.map(async (habit) => {
    const streaks = await getHabitStreak(habit.id)
    habit.streaks = streaks
  })

  return result
}

export default getActiveHabitsQuery
