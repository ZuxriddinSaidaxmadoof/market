import { ResonseData } from "../../../common/responseData";
import { CreateProductDto } from "../dto/create.dto";
import { IProductQueryDto } from "../dto/query.dto";
import { UpdateProductDto } from "../dto/update.dto";
import { ProductEntity } from "../entity/product.entity";

export interface IProductService {
  getAll(search: IProductQueryDto): Promise<ResonseData<ProductEntity[]>>;
  getById(productId: number): Promise<ResonseData<ProductEntity | undefined>>;
  create(dto: CreateProductDto): Promise<ResonseData<ProductEntity | undefined>>;
  update(dto: UpdateProductDto, productId: number): Promise<ResonseData<ProductEntity>>;
  delete(productId: number): Promise<ResonseData<ProductEntity>>;
  getByName(name: string): Promise<ResonseData<ProductEntity | undefined>>;
}
