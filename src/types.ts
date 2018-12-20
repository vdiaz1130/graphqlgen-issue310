import { Prisma, User } from './generated/prisma-client';

export interface Context {
  prisma: Prisma;
  request: any;
}

export interface UserResponse {
  code: string;
  message: string;
  success: boolean;
  token: string | null;
  user: User | null;
}
