import { MikroORM, IDatabaseDriver, Connection } from '@mikro-orm/core';
import { User } from './entities/User';
import { UserClient } from './entities/UserClient';

const config: Parameters<typeof MikroORM.init>[0] & {
  type: 'postgresql';
} = { 
  entities: [User, UserClient],
  dbName: 'postgres',
  user: 'postgres',
  password: 'postgres',
  type: 'postgresql',
  debug: true,
  baseDir: __dirname,
};

export default config;
