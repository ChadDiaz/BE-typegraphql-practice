import { Request } from 'express';

declare global {
  export type MyContext = {
    req: Request & { session: Express.Session };
  }
}
