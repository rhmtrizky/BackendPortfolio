import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entity/User';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'containers-us-west-44.railway.app',
  port: 7394,
  username: 'postgres',
  password: '3UMcJRvpCXOqSoOx5e1C',
  database: 'railway',
  synchronize: true,
  logging: false,
  entities: ['src/entities/*.ts'],
  migrations: ['src/migrations/*.ts'],
  subscribers: [],
});
