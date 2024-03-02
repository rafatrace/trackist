import { openDatabaseSync } from 'expo-sqlite/next'
import { drizzle } from 'drizzle-orm/expo-sqlite/driver'

const db = openDatabaseSync('trackist.db')
const orm = drizzle(db)

export { db, orm }
