import { SQLError, SQLiteDatabase } from 'expo-sqlite'

const migrateHabitsTable = async (db: SQLiteDatabase) => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(`
        CREATE TABLE IF NOT EXISTS habits (
          id         INTEGER PRIMARY KEY AUTOINCREMENT,
          name       TEXT NOT NULL,
          isArchived INTEGER NOT NULL,
          createdAt  DEFAULT CURRENT_TIMESTAMP
        )
      `)
      },
      (error: SQLError) => {
        reject(error)
      },
      () => {
        resolve(true)
      }
    )
  })
}

const migrateChecksTable = async (db: SQLiteDatabase) => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(`
        CREATE TABLE IF NOT EXISTS checks (
          id        INTEGER PRIMARY KEY AUTOINCREMENT,
          habitId   INTEGER NOT NULL,
          createdAt DEFAULT CURRENT_TIMESTAMP,
          FOREIGN KEY(habitid) REFERENCES habits(id)
        )
      `)
      },
      (error: SQLError) => {
        reject(error)
      },
      () => {
        resolve(true)
      }
    )
  })
}

const migrateStatisticsTable = async (db: SQLiteDatabase) => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(`
        CREATE TABLE IF NOT EXISTS statistics (
          id            INTEGER PRIMARY KEY AUTOINCREMENT,
          habitId       INTEGER NOT NULL,
          currentStreak INTEGER NOT NULL DEFAULT 0,
          bestStreak    INTEGER NOT NULL DEFAULT 0,
          assiduity     INTEGER NOT NULL DEFAULT 0,
          mostMisses    INTEGER NOT NULL DEFAULT 0,
          FOREIGN KEY(habitid) REFERENCES habits(id)
        )
      `)
      },
      (error: SQLError) => {
        reject(error)
      },
      () => {
        resolve(true)
      }
    )
  })
}

export { migrateHabitsTable, migrateChecksTable, migrateStatisticsTable }
