import { ResonseData } from "../../common/responseData";
import { CreateProductDto } from "./dto/create.dto";
import { ProductEntity } from "./entity/product.entity";
import { IProductRepository } from "./interfaces/product.repository";
import { IProductService } from "./interfaces/product.service";
import { ProductRepository } from "./product.repository";
import { ProductNotFound, ProductNameAlreadyExist } from "./exception/product.exception";
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
  ): Promise<ResonseData<ProductEntity | undefined>> {
    const product = await this.#productRepository.getByName(name);

    let resData: ResonseData<ProductEntity>;
    if (product) {
      resData = new ResonseData("success", 200, product);
    } else {
      resData = new ResonseData("not found", 404);
    }

    return resData;
  }

  async getById(productId: number): Promise<ResonseData<ProductEntity>> {
    const product = await this.#productRepository.getById(productId)

    let resData: ResonseData<ProductEntity>;
    if (!product) {
      throw new ProductNotFound();
    }
    
    resData = new ResonseData("success", 200, product);
    return resData;
  }

  async create(dto: CreateProductDto): Promise<ResonseData<ProductEntity>> {
    const newProduct: ProductEntity = new ProductEntity(dto);

    const createdProduct = await this.#productRepository.insert(newProduct);

    return new ResonseData<ProductEntity>("created", 201, createdProduct);
  }

  async update(dto: UpdateProductDto, productId: number ): Promise<ResonseData<ProductEntity>> {

      const oldProduct: ResonseData<ProductEntity> = await this.getById(productId);
      const newProductData = oldProduct.data as ProductEntity
      
      const newProduct = Object.assign(newProductData, dto) 
      

      const updatedData = await this.#productRepository.update(newProduct, productId)

      return new ResonseData("product updated succesfully", 200,updatedData);

  }

  async delete( productId: number ): Promise<ResonseData<ProductEntity>> {

    const oldProduct = await this.#productRepository.getById(productId);
    if(!oldProduct){
      throw new ProductNotFound();
    }

    const deletedProduct = await this.#productRepository.delete(productId);
    return new ResonseData("product deleted succesfully", 200, deletedProduct);
  }

  async getAll(query: IProductQueryDto): Promise<ResonseData<ProductEntity[]>> {
    
    
    const products = await this.#productRepository.getAll(query);

    return new ResonseData<ProductEntity[]>("success", 200, products);
  }
}
