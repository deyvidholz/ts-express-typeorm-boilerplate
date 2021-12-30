import { env } from './src/config/env.config';

export default {
  type: 'postgres',
  host: env.POSTGRES_HOST,
  port: env.POSTGRES_PORT,
  username: env.POSTGRES_USER,
  password: env.POSTGRES_PASSWORD,
  database: env.POSTGRES_DB,
  synchronize: true,
  logging: false,
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/**/*.migration.ts'],
  subscribers: ['src/**/*.subscriber.ts'],
  seeds: ['src/**/*.seed.ts'],
  factories: ['src/**/*.factory.ts'],
  cli: {
    entitiesDir: 'src/**',
    migrationsDir: 'src/**',
    subscribersDir: 'src/**',
  },
};
