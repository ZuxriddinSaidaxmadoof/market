import { ResonseData } from "../../common/responseData";
import { CreateProductDto } from "./dto/create.dto";
import { UserEntity } from "./entity/user.entity";
import { IProductRepository } from "./interfaces/user.repository";
import { IProductService } from "./interfaces/user.service";
import { ProductRepository } from "./user.repository";
import { ProductNotFound, ProductNameAlreadyExist } from "./exception/user.exception";
import { UpdateProductDto } from "./dto/update.dto";
import { Request } from "express";
import { IProductQueryDto } from "./dto/query.dto";

export class ProductService implements IProductService {
  #productRepository: IProductRepository;

  constructor() {
    this.#productRepository = new ProductRepository();
  }
  async getByName(
    name: string
  ): Promise<ResonseData<UserEntity | undefined>> {
    const product = await this.#productRepository.getByName(name);

    let resData: ResonseData<UserEntity>;
    if (product) {
      resData = new ResonseData("success", 200, product);
    } else {
      resData = new ResonseData("not found", 404);
    }

    return resData;
  }

  async getById(productId: number): Promise<ResonseData<UserEntity>> {
    const product = await this.#productRepository.getById(productId)

    let resData: ResonseData<UserEntity>;
    if (!product) {
      throw new ProductNotFound();
    }
    
    resData = new ResonseData("success", 200, product);
    return resData;
  }

  async create(dto: CreateProductDto): Promise<ResonseData<UserEntity>> {
    const newProduct: UserEntity = new UserEntity(dto);

    const createdProduct = await this.#productRepository.insert(newProduct);

    return new ResonseData<UserEntity>("created", 201, createdProduct);
  }

  async update(dto: UpdateProductDto, productId: number ): Promise<ResonseData<UserEntity>> {

      const oldProduct: ResonseData<UserEntity> = await this.getById(productId);
      const newProductData = oldProduct.data as UserEntity
      
      const newProduct = Object.assign(newProductData, dto) 
      

      const updatedData = await this.#productRepository.update(newProduct, productId)

      return new ResonseData("product updated succesfully", 200,updatedData);

  }

  async delete( productId: number ): Promise<ResonseData<UserEntity>> {

    const oldProduct = await this.#productRepository.getById(productId);
    if(!oldProduct){
      throw new ProductNotFound();
    }

    const deletedProduct = await this.#productRepository.delete(productId);
    return new ResonseData("product deleted succesfully", 200, deletedProduct);
  }

  async getAll(): Promise<ResonseData<UserEntity[]>> {
    
    
    const products = await this.#productRepository.getAll();

    return new ResonseData<UserEntity[]>("success", 200, products);
  }
}
