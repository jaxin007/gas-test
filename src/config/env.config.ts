import 'dotenv/config';

import { EnvConfigInterface } from '../interfaces';

export const envConfig: EnvConfigInterface = {
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD || 'secret',
  PGHOST: process.env.PGHOST || 'postgres',
  PGUSER: process.env.PGUSER || 'postgres',
  PGDATABASE: process.env.PGDATABASE || 'postgres',
  PGPASSWORD: process.env.PGPASSWORD || 'secret',
  PGPORT: +(process.env.PGPORT || '3300'),
  PORT: +(process.env.PORT || '3000'),
};
