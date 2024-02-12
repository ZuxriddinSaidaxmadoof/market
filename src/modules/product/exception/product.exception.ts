import { IException } from "../../../common/types/types";

export class ProductNameAlreadyExist extends Error implements IException {
  statusCode: number;

  constructor() {
    super("product name already exist");

    this.statusCode = 400;
  }
}

export class ProductNotFound extends Error implements IException {
  statusCode: number;

  constructor() {
    super("product not found by id");

    this.statusCode = 404;
  }
}

export class YouNeedChangeSomething extends Error implements IException {
  statusCode: number;

  constructor() {
    super("You need change something (name, price, count)");

    this.statusCode = 400;
  }
}