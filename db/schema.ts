import { sql } from 'drizzle-orm'
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const habits = sqliteTable('habits', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name'),
  isArchived: integer('isArchived', { mode: 'boolean' }).notNull().default(false),
  createdAt: text('createdAt')
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`)
})

export const checks = sqliteTable('checks', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  habitId: text('habitId').references(() => habits.id),
  createdAt: text('password')
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`)
})

export const statistics = sqliteTable('statistics', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  habitId: text('habitId').references(() => habits.id),
  currentStreak: integer('currentStreak').notNull().default(0),
  bestStreak: integer('bestStreak').notNull().default(0),
  assiduity: integer('assiduity').notNull().default(0),
  mostMisses: integer('mostMisses').notNull().default(0)
})
