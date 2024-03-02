import { SQLiteDatabase } from 'expo-sqlite/next'

const migrateHabitTables = async (db: SQLiteDatabase) => {
  return db.execAsync(`
    CREATE TABLE IF NOT EXISTS habits (
      id         INTEGER PRIMARY KEY AUTOINCREMENT,
      name       TEXT NOT NULL,
      isArchived INTEGER NOT NULL,
      createdAt  DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS checks (
      id        INTEGER PRIMARY KEY AUTOINCREMENT,
      habitId   INTEGER NOT NULL,
      createdAt DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (habitId) REFERENCES habits(id) ON UPDATE no action ON DELETE no action
    );

    CREATE TABLE IF NOT EXISTS statistics (
      id            INTEGER PRIMARY KEY AUTOINCREMENT,
      habitId       INTEGER NOT NULL,
      currentStreak INTEGER NOT NULL DEFAULT 0,
      bestStreak    INTEGER NOT NULL DEFAULT 0,
      assiduity     INTEGER NOT NULL DEFAULT 0,
      mostMisses    INTEGER NOT NULL DEFAULT 0,
      FOREIGN KEY (habitId) REFERENCES habits(id) ON UPDATE no action ON DELETE no action
    )
  `)
}

export { migrateHabitTables }
