import { Postgres } from "../../lib/postgresDriver";
import { IProductQueryDto } from "./dto/query.dto";
import { UserEntity } from "./entity/user.entity";
import { IProductRepository } from "./interfaces/user.repository";

export class ProductRepository extends Postgres implements IProductRepository {
  async getByName(name: string): Promise<UserEntity | undefined> {
    return await this.fetch<UserEntity | undefined>(
      "select * from users where name = $1",
      name
    );
  }
  async getById(id: number): Promise<UserEntity | undefined> {
    return await this.fetch<UserEntity | undefined>(
      "select * from users where id = $1",
      id
    );
  }
  async getAll(): Promise<UserEntity[]> {
    return await this.fetchAll<UserEntity>("select * from users");
  }

  async insert(entity: UserEntity): Promise<UserEntity> {
    return await this.fetch<UserEntity>(
      "insert into users(name, price, count) values ($1, $2, $3) returning *",
    );
  }

  async update(entity: UserEntity, id: number): Promise<UserEntity> {
    return await this.fetch<UserEntity>(
      "update users set name = $1, price = $2, count = $3 where id = $4 returning *",
      id
    );
  }

  async delete(id: number): Promise<UserEntity> {
    return await this.fetch<UserEntity>(
      "delete from users where id = $1 returning *",
      id
    );
  }
}
