import 'dotenv/config';

export const env = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: +process.env.PORT || 3000,

  POSTGRES_HOST: process.env.POSTGRES_HOST || 'localhost',
  POSTGRES_PORT: +process.env.POSTGRES_PORT || 5432,
  POSTGRES_USER: process.env.POSTGRES_USER,
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
  POSTGRES_DB: process.env.POSTGRES_DB,

  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  JWT_EXPIRATION: +process.env.JWT_EXPIRATION || 3600,
};
