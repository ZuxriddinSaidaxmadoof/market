import { IProductQueryDto } from "../dto/query.dto";
import { UserEntity } from "../entity/user.entity";

export interface IProductRepository {
  getAll(): Promise<UserEntity[]>;
  getById(productId: number): Promise<UserEntity | undefined>
  insert(entity: UserEntity): Promise<UserEntity>;
  update(entity: UserEntity, productId: number): Promise<UserEntity> | undefined;
  delete(productId: number): Promise<UserEntity> | undefined;
  getByName(name: string): Promise<UserEntity | undefined>;
  getById(id: number): Promise<UserEntity | undefined>;
}
