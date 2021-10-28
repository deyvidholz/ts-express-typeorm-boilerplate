import { In } from 'typeorm';
import { userRepository } from './user.repository';
import { IUser } from './user.typing';

export function userSeeds(): IUser[] {
  return [{ username: 'admin', password: 'admin' }];
}

export async function userRunSeeds() {
  const usersQty = await userRepository().count();
  if (usersQty) {
    return;
  }

  const users = userRepository().create(userSeeds());
  await userRepository().save(users);
}

export async function userDropSeeds() {
  const usernames: string[] = userSeeds().map((user) => user.username);
  await userRepository().delete({ username: In(usernames) });
}
