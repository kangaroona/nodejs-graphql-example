import { getBookList } from "./../../model/books";
export const Query = {
  books: () => getBookList(),
  getBookByTitle: (
    parent: any,
    args: { title: string }
    // contextValue: any,
    // info: any
  ) => {
    console.log(parent);
    return getBookList().filter((item) => item.title === args.title);
  },
};
