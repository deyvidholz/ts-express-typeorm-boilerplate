import { User } from './user.entity';

export type JwtPayload = { id: string };

export type CreateUserDTO = Pick<User, 'username' | 'password'>;

export type AuthUserDTO = Pick<User, 'username' | 'password'>;
