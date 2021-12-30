import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { encryptPassword } from './user.helpers';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column({ select: false })
  password: string;

  @BeforeInsert()
  private beforeInsert() {
    this.password = encryptPassword(this.password);
  }
}
