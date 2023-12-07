import express from 'express';
import { MikroORM, EntityManager, ArrayCollection } from '@mikro-orm/core';
import { User } from './entities/User';
import { UserClient } from './entities/UserClient';
import config from './mikro-orm.config';

async function main() {
  const orm = await MikroORM.init(config);
  const em: EntityManager = orm.em.fork();

  const app = express();
  const port = process.env.PORT || 3000;

  app.use(express.json());

  // Example REST API routes
  app.get('/users', async (req, res) => {
    const users = await em.find(User, {});
    res.json(users);
  });

  app.post('/users', async (req, res) => {
    const { first_name, last_name, email } = req.body;
    console.log("This is data => ", req.body)

    if (!first_name || !email) {
      return res.status(400).json({ error: 'Username and email are required' });
    }

    const user = new User();
    user.first_name = first_name;
    user.last_name = last_name;
    user.email = email;

    em.persist(user);
    await em.flush();

    res.status(201).json(user);
  });

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

main();