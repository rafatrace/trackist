import { SQLiteDatabase } from 'expo-sqlite'
import { Dispatch, SetStateAction } from 'react'
import { THabit } from '~@types/habits'

const getActiveHabits = (db: SQLiteDatabase, setter: Dispatch<SetStateAction<THabit[]>>) => {
  db.transaction((tx) => {
    tx.executeSql(
      `
        SELECT * 
        FROM habits
        WHERE isArchived = ?
        `,
      [0],
      (_, { rows: { _array: habits } }) => {
        setter(habits as THabit[])
      }
    )
  })
}

export default getActiveHabits
