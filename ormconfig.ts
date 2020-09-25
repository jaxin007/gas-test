import { envConfig } from './src/config';

export = {
  type: 'postgres',
  host: envConfig.PGHOST,
  port: envConfig.PGPORT,
  username: envConfig.PGUSER,
  password: envConfig.POSTGRES_PASSWORD,
  database: envConfig.PGDATABASE,
  synchronize: false,
  logging: true,
  entities: [
    './src/entity/**/*.ts',
  ],
  migrations: [
    './src/migration/**/*.ts',
  ],
  subscribers: [
    './src/subscriber/**/*.ts',
  ],
  cli: {
    entitiesDir: './src/entity',
    migrationsDir: './src/migration',
    subscribersDir: './src/subscriber',
  },
};
