import { openDatabaseSync } from 'expo-sqlite'
import { drizzle } from 'drizzle-orm/expo-sqlite/driver'

const db = openDatabaseSync('trackist.db')
const orm = drizzle(db)

export { db, orm }
