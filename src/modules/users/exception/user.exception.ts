import { IException } from "../../../common/types/types";

export class ProductNameAlreadyExist extends Error implements IException {
  statusCode: number;

  constructor() {
    super("login already exist");

    this.statusCode = 400;
  }
}

export class ProductNotFound extends Error implements IException {
  statusCode: number;

  constructor() {
    super("user not found by id");

    this.statusCode = 404;
  }
}

export class NewUserErrorExpession extends Error implements IException {
  statusCode: number;
  constructor(message: string) {
    super(message);

    this.statusCode = 400;
  }
}