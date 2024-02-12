import { IProductQueryDto } from "../dto/query.dto";
import { ProductEntity } from "../entity/product.entity";

export interface IProductRepository {
  getAll(query: IProductQueryDto): Promise<ProductEntity[]>;
  getById(productId: number): Promise<ProductEntity | undefined>
  insert(entity: ProductEntity): Promise<ProductEntity>;
  update(entity: ProductEntity, productId: number): Promise<ProductEntity> | undefined;
  delete(productId: number): Promise<ProductEntity> | undefined;
  getByName(name: string): Promise<ProductEntity | undefined>;
  getById(id: number): Promise<ProductEntity | undefined>;
}
