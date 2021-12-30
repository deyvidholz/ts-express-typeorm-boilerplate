const { env } = process;

module.exports = {
  type: 'postgres',
  host: env.POSTGRES_HOST,
  port: env.POSTGRES_PORT,
  username: env.POSTGRES_USER,
  password: env.POSTGRES_PASSWORD,
  database: env.POSTGRES_DB,
  synchronize: true,
  logging: false,
  entities: [env.TYPEORM_DIR_ENTITIES || 'src/**/*.entity.ts'],
  migrations: [env.TYPEORM_DIR_MIGRATIONS || 'src/**/*.migration.ts'],
  subscribers: [env.TYPEORM_DIR_SUBSCRIBERS || 'src/**/*.subscriber.ts'],
  seeds: [env.TYPEORM_DIR_SEEDS || 'src/**/*.seed.ts'],
  factories: [env.TYPEORM_DIR_FACTORIES || 'src/**/*.factory.ts'],
  cli: {
    entitiesDir: 'src/**',
    migrationsDir: 'src/**',
    subscribersDir: 'src/**',
  },
};
