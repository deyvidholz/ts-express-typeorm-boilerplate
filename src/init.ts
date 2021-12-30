import Joi from 'joi';
import { env } from './config/env.config';

const envValidation = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'stage', 'qa', 'production')
    .required(),

  PORT: Joi.number().integer().required(),

  POSTGRES_HOST: Joi.string().required(),
  POSTGRES_PORT: Joi.number().integer().required(),
  POSTGRES_USER: Joi.string().required(),
  POSTGRES_PASSWORD: Joi.string().required(),
  POSTGRES_DB: Joi.string().required(),

  JWT_SECRET_KEY: Joi.string().required(),
  JWT_EXPIRATION: Joi.number().integer().required(),
}).validate(env);

if (envValidation.error) {
  console.log(envValidation.error);
  throw new Error('One or more environments is invalid');
}
