import { ResonseData } from "../../common/responseData";
import { Error } from "../../common/types/types";
import { checkDto } from "../../lib/cheackDto";
import { CreateProductDto, createProductSchema,  } from "./dto/create.dto";
import { UpdateProductDto, updateProductSchema  } from "./dto/update.dto";
import { ProductNameAlreadyExist, ProductNotFound, NewUserErrorExpession } from "./exception/user.exception";
import { IProductService } from "./interfaces/user.service";
import { Request, Response } from "express";
import { IProductQueryDto } from "./dto/query.dto";

export class ProductController {
  #productService: IProductService;

  constructor(productService: IProductService) {
    this.#productService = productService;
  }

  async getAll(req: Request, res: Response) {
    try {  
      const resData = await this.#productService.getAll();

      res.status(resData.statusCode).json(resData);
    } catch (error: Error | any) {
      const resData = new ResonseData(
        error.message,
        error.status || 500,
        null,
        error
      );

      res.status(resData.statusCode).json(resData);

    }
  }

  // async getById(req: Request, res: Response) {
  //   try {   
  //     const productId: number = Number(req.params.id);   
  //     const resData = await this.#productService.getById(productId);

  //     res.status(resData.statusCode).json(resData);
  //   } catch (error: Error | any) {
  //     const resData = new ResonseData(
  //       error.message,
  //       error.statusCode || 500,
  //       null,
  //       error
  //     );

  //     res.status(resData.statusCode).json(resData);

  //   }
  // }

  // async create(req: Request, res: Response) {
  //   try {
  //     const dto: CreateProductDto = req.body;

  //     checkDto<CreateProductDto>(createProductSchema, dto);

  //     const getByName = await this.#productService.getByName(dto.name);

  //     if (getByName.data) {
  //       throw new ProductNameAlreadyExist();
  //     }

  //     const resData = await this.#productService.create(dto);

  //     res.status(resData.statusCode).json(resData);
  //   } catch (error: Error | any) {
  //     const resData = new ResonseData(
  //       error.message,
  //       error.statusCode || 500,
  //       null,
  //       error
  //     );

  //     res.status(resData.statusCode).json(resData);
  //   }
  // }

  // async update(req: Request, res: Response) {
  //   try {
  //     const productId : number = Number(req.params.id);
  //     const dto: UpdateProductDto = req.body;
       
  //     const getById = await this.#productService.getById(productId);
  //     if(!getById.data){
  //       throw new ProductNotFound();
  //     }

  //     if(dto.name){
  //       const getByName = await this.#productService.getByName(dto.name)
  
  //       if(dto.name !== getById.data.name && getByName.data){
  //         throw new ProductNameAlreadyExist();
  //       }
  //     }

  //     if(!dto.count && !dto.name && !dto.price){
  //       throw new NewUserErrorExpession("error");
  //     }

  //     // checkDto<UpdateProductDto>(updateProductSchema, dto);

  //     const resData = await this.#productService.update(dto, productId);

  //     res.status(resData.statusCode).json(resData);
  //   } catch (error: Error | any) {
  //     const resData = new ResonseData(
  //       error.message,
  //       error.statusCode || 500,
  //       null,
  //       error
  //     );

  //     res.status(resData.statusCode).json(resData);
  //   }
  // }

  // async delete(req: Request, res: Response) {
  //   try {
  //     const productId : number = Number(req.params.id);
       

  //     const resData = await this.#productService.delete(productId);

  //     res.status(resData.statusCode).json(resData);
  //   } catch (error: Error | any) {
  //     console.log(error);
      
  //     const resData = new ResonseData(
  //       error.message,
  //       error.statusCode || 500,
  //       null,
  //       error
  //     );

  //     res.status(resData.statusCode).json(resData);
  //   }
  // }

}
