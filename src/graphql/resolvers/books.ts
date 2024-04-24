import { getBookList } from './../../model/books';
export const Query = {
  books: () => getBookList(),
  getBookByTitle: (parent: any, args: { title: string }) => {
    return getBookList().filter((item) => {
      return item.title === args.title;
    });
  },
};
