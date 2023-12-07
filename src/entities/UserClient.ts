import { Entity, PrimaryKey, Property, ManyToOne } from '@mikro-orm/core';
import { User } from './User';

@Entity()
export class UserClient {
  @PrimaryKey()
  id!: number;

  @Property()
  // You can name it userId or user_id, depending on your preference
  userId!: number;

  @ManyToOne(() => User)
  user!: User;
}
