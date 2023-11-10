import { type Config } from 'drizzle-kit';

export default {
  schema: './src/database/schema.ts',
  driver: 'pg',
  out: './drizzle',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL || '',
  },
  tablesFilter: ['fast_loyalty_*'],
} satisfies Config;
