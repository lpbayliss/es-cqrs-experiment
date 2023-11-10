import {
  pgTable,
  varchar,
  bigserial,
  jsonb,
  timestamp,
} from 'drizzle-orm/pg-core';
import { EventTypes } from '../domain/events/index.js';
import { AggregateTypes } from '../domain/aggregates/index.js';

export const events = pgTable('events', {
  offset: bigserial('offset', { mode: 'number' }).notNull().primaryKey(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  aggregateId: varchar('aggregate_id', { length: 255 }).notNull(),
  type: varchar('type').notNull().$type<EventTypes>(),
  data: jsonb('data').notNull(),
});

export const snapshots = pgTable('snapshots', {
  id: varchar('id', { length: 255 }).notNull().primaryKey(),
  updatedAt: timestamp('updatedAt').defaultNow(),
  type: varchar('type').notNull().$type<AggregateTypes>(),
  data: jsonb('data').notNull(),
});
