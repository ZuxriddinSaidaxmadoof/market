import Joi from "joi";

export const createProductSchema = Joi.object<CreateProductDto, true>({
  login: Joi.string().required(),
  password: Joi.string().min(4).required(),
  balance: Joi.number(),
});
export type CreateProductDto = {
  login: string;
  password: string;
  balance: number;
};
