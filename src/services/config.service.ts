import { z } from 'zod';
import { config } from 'dotenv';
import { logger } from './logger.service.js';

config();

const envSchema = z.object({
  PORT: z.coerce.number().optional().default(6200),
  NODE_ENV: z.enum(['development', 'production']).default('development'),
  DATABASE_URL: z.string(),
});

export type ConfigSchema = z.infer<typeof envSchema>;

const envConfig = await envSchema.parseAsync(process.env).catch((err) => {
  logger.error({ err }, 'Failed to parse env variables');
  process.exit(1);
});

export default {
  env: { port: envConfig.PORT },
  isDevelopment: envConfig.NODE_ENV === 'development',
  databaseUrl: envConfig.DATABASE_URL,
};
