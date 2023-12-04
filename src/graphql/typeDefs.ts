export const typeDefs = `
  type Book {
    title: String
    author: String
  }
  type Location{
    id:Int
  }
  type Query {
    books: [Book]
    getBookByTitle(title: String): [Book]
  }
`;
