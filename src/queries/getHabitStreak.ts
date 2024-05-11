import { checks } from 'db/schema'
import { orm } from '~utils/getDatabase'
import { sql } from 'drizzle-orm'

export type TStreaksData = {
  prevDate: string
  createdAt: string
  habitId: number
  id: number
  streak: 'start' | 'ended' | 'start-end' | 'going'
}

export type TStreak = Record<string, number>

const getHabitStreak = async (habitId: number): Promise<TStreak> => {
  const statement = sql`
    SELECT 
      id,
      habitId,
      createdAt,
      prevDate,
      CASE
        WHEN (prevDate IS NULL OR prevDate != oneDayLess) AND (nextDate IS NULL OR nextDate != oneDayMore) THEN 'start-end'
          WHEN prevDate != oneDayLess OR prevDate IS NULL THEN 'start'
          WHEN nextDate != oneDayMore OR nextDate IS NULL THEN 'ended'
          WHEN prevDate = oneDayLess THEN 'going'
          ELSE 0
        END AS streak
    FROM (
        SELECT
          ${checks.id},
          ${checks.habitId},
          date(LAG(${checks.createdAt}, 1) OVER (ORDER BY ${checks.createdAt})) AS prevDate,
          date(${checks.createdAt}) AS createdAt,
          date(LEAD(${checks.createdAt}, 1) OVER (ORDER BY ${checks.createdAt})) AS nextDate,
          date(${checks.createdAt}, '-1 day') AS oneDayLess,
          date(${checks.createdAt}, '+1 day') AS oneDayMore
        FROM ${checks}
        WHERE ${checks.habitId} = ${habitId}
        ORDER BY ${checks.createdAt}
    ) AS streaks`

  let result: TStreaksData[] = []

  try {
    result = orm.all(statement)
  } catch (e) {
    console.log(e)
  }

  const streaks = {}
  result.map((s) => {
    if (s.streak === 'start-end' || s.streak === 'start') {
      streaks[s.createdAt] = 1
    } else if (s.streak === 'going' || s.streak === 'ended') {
      streaks[s.createdAt] = streaks[s.prevDate] + 1
    }
  })

  return streaks
}

export default getHabitStreak
