import cors from 'cors';
import express from 'express';
import { Server } from 'http';
import './init';
import path from 'path';
import passport from 'passport';
import passportJWT from 'passport-jwt';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { corsConfig } from './config/cors.config';
import { userRepository } from './modules/user/user.repository';
import router from './global/routes';
import { ControllerResolveResponse } from './global/controller';
import { JwtPayload } from './modules/user/user.typing';
import { env } from './config/env.config';

export class App {
  public express: express.Application;
  private server: Server;

  constructor() {
    this.setupExpress();
    this.setupPassport();
    this.setupRoutes();
    this.setupDatabase();
  }

  private setupExpress() {
    this.express = express();
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use(cors(corsConfig));

    this.express.use(function (req, res, next) {
      res.handle = async (
        controllerResponse: Promise<ControllerResolveResponse>,
        successStatusCode?: number
      ) => {
        const { httpStatus, data } = await controllerResponse;

        return res.status(httpStatus || successStatusCode || 200).json(data);
      };

      next();
    });
  }

  private setupRoutes() {
    this.express.use(router);
    this.express.use('/', express.static(path.join(__dirname, '..', 'public')));
  }

  private setupPassport() {
    const extractJWT = passportJWT.ExtractJwt;
    const JWTStrategy = passportJWT.Strategy;

    const JWTOptions = {
      secretOrKey: env.JWT_SECRET_KEY,
      jwtFromRequest: extractJWT.fromAuthHeaderAsBearerToken(),
    };

    let strategy = new JWTStrategy(JWTOptions, async function (
      payload: JwtPayload,
      next
    ) {
      const id = payload.id;
      const user = await userRepository().findOne(id);

      if (user) {
        next(null, user);
      } else {
        next(null, false);
      }
    });

    passport.use(strategy);
    this.express.use(passport.initialize());
  }

  private setupDatabase() {
    createConnection().then();
  }

  listen(): Server {
    const port: number = env.PORT;

    this.server = this.express.listen(port, () =>
      console.log(`Application running on ${port}`)
    );

    return this.server;
  }
}
