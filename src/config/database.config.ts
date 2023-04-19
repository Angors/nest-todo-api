import { Todo } from 'src/entity/Todo.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const devConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'madafelix',
  database: 'postgres',
  entities: [Todo],
  synchronize: true,
};
