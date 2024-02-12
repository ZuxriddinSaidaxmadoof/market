import { ResonseData } from "../../../common/responseData";
import { CreateProductDto } from "../dto/create.dto";
import { IProductQueryDto } from "../dto/query.dto";
import { UpdateProductDto } from "../dto/update.dto";
import { UserEntity } from "../entity/user.entity";

export interface IProductService {
  getAll(): Promise<ResonseData<UserEntity[]>>;
  getById(productId: number): Promise<ResonseData<UserEntity | undefined>>;
  create(dto: CreateProductDto): Promise<ResonseData<UserEntity | undefined>>;
  update(dto: UpdateProductDto, productId: number): Promise<ResonseData<UserEntity>>;
  delete(productId: number): Promise<ResonseData<UserEntity>>;
  getByName(name: string): Promise<ResonseData<UserEntity | undefined>>;
}
