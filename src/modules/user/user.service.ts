import * as jwt from 'jsonwebtoken';
import { ILike } from 'typeorm';
import { env } from '../../config/env.config';
import { InvalidPayloadException } from '../../global/exceptions/invalid-payload.exception';
import { ResourceNotFoundException } from '../../global/exceptions/resource-not-found.exception';
import { InvalidPasswordException } from './exceptions/invalid-password.exception';
import { UserAlreadyExistsException } from './exceptions/user-already-exists.exception';
import { User } from './user.entity';
import { isValidPassword } from './user.helpers';
import { userRepository } from './user.repository';
import { IUser, JwtPayload } from './user.typing';
import { userValidationSchema } from './validation-schemas/create-user.validation-schema';

export class UserService {
  async create(payload: IUser): Promise<CreateReturn> {
    const validation = userValidationSchema().validate(payload);

    if (validation.error) {
      throw new InvalidPayloadException();
    }

    const userAlreadyExists = await userRepository().count({
      where: { username: ILike(payload.username) },
    });

    if (userAlreadyExists) {
      throw new UserAlreadyExistsException();
    }

    const user = userRepository().create(payload);

    await userRepository().save(user);
    return { user };
  }

  async auth(payload: AuthPayloadParam): Promise<AuthReturn> {
    const { password, username } = payload;

    let user = await userRepository().findOne({
      select: ['id', 'username', 'password'],
      where: { username },
    });

    if (!user) {
      throw new ResourceNotFoundException();
    }

    const isPasswordInvalid: boolean = !isValidPassword(
      password,
      user.password
    );

    if (isPasswordInvalid) {
      throw new InvalidPasswordException();
    }

    const jwtPayload: JwtPayload = {
      id: user.id,
    };

    const token = jwt.sign(jwtPayload, env.JWT_SECRET_KEY, {
      expiresIn: env.JWT_EXPIRATION,
    });

    const decodedToken = jwt.decode(token) as jwt.JwtPayload;
    return { accessToken: token, expiration: decodedToken.exp };
  }
}

type CreateReturn = {
  user: User;
};

type AuthPayloadParam = {
  username: string;
  password: string;
};

type AuthReturn = {
  accessToken: string;
  expiration: number;
};
