import Joi from "joi";
import { CreateProductDto } from "./create.dto";

export const updateProductSchema = Joi.object<UpdateProductDto, true>({
  login: Joi.string().required(),
  password: Joi.string().min(4).required(),
  balance: Joi.number(),
});

export type UpdateProductDto = Partial<CreateProductDto>;
