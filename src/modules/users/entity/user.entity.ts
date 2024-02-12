import { CreateProductDto } from "../dto/create.dto";

export class UserEntity {
  // id: number = 0;
  login: string;
  password: string;
  balance: number;
  constructor(dto: CreateProductDto) {
    this.login = dto.login;
    this.password = dto.password;
    this.balance = dto.balance;
  }
}
