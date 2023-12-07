import { Entity, PrimaryKey, Property, OneToMany, Collection } from '@mikro-orm/core';
import { UserClient } from './UserClient';

@Entity()
export class User {
  @PrimaryKey()
  id!: number;

  @Property()
  email!: string;

  @Property()
  first_name!: string;

  @Property()
  last_name!: string;

  @Property()
  deleted: boolean = false;

  @OneToMany(() => UserClient, client => client.user)
  clients = new Collection<UserClient>(this);
}
