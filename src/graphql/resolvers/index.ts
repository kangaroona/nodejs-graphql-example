import { Query } from './books';
import { locationMutation } from './location';
const resolvers = {
  Query: {
    ...Query,
  },
  Mutation: {
    ...locationMutation,
  },
};
export default resolvers;
