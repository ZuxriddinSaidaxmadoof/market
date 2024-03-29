export type Config = {
  port: number;
  jwtKey: string;
  jwtExpiredIn: number;
  dbName: string;
  dbPort: number;
  dbHost: string;
  dbUser: string;
  dbPassword: string;
};

export interface Error {
  name: string;
  message: string;
  stack?: string;
  status?: number;
}

export interface IException {
  statusCode: number;
  message: string;
}
