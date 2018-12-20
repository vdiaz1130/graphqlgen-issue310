import { Data } from './types';

const users = [
  {
    id: '1',
    name: 'Alice',
    postIDs: ['3', '4'],
    isActive: false,
    email: 'foo@foo.com',
    emailVerified: false,
    password: '1234',
    createdAt: '',
    updatedAt: ''
  },
  {
    id: '2',
    name: 'Bob',
    postIDs: [],
    isActive: false,
    email: 'foo@foo.com',
    emailVerified: false,
    password: '1234',
    createdAt: '',
    updatedAt: ''
  }
];

const posts = [
  {
    id: '3',
    title: 'GraphQL Conf 2019',
    content: 'An awesome GraphQL conference in Berlin.',
    published: true,
    authorId: '1'
  },
  {
    id: '4',
    title: 'GraphQL Weekly',
    content: 'Weekly news about the Grap[hQL ecosystem and community.',
    published: false,
    authorId: '1'
  }
];

let idCount = 4;
function idProvider(): string {
  return `${idCount++}`;
}

export const data: Data = { posts, users, idProvider };
