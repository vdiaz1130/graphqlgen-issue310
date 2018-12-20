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

export interface Post {
  id: string;
  title: string;
  content: string;
  published: boolean;
  authorId: string;
}

export interface Data {
  posts: Post[];
  users: User[];
  idProvider: () => string;
}
