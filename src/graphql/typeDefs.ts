export const typeDefs = `
  type Book {
    title: String
    author: String
    type: String
  }
  type Query {
    books: [Book]
    getBookByTitle(title: String): Book
  }
  type Location {
    name: String
    description: String
  }
  type Mutation {
    addLocation(name: String, description: String): Location
  }
`;
