import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

import * as schema from './schema.js';
import configService from '../services/config.service.js';

const queryClient = postgres(configService.databaseUrl);
export const db = drizzle(queryClient, { schema });
