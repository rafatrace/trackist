import { SQLiteDatabase } from 'expo-sqlite'

const addNewHabit = async (db: SQLiteDatabase, title: string) => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          `
          INSERT INTO habits (name, isArchived) 
          VALUES (?, 0)`,
          [title]
        )
      },
      (error) => {
        reject(error)
      },
      () => {
        resolve(true)
      }
    )
  })
}

export default addNewHabit
