import { getBookList } from "./../../model/books";
export const Query = {
  books: () => getBookList(),
};
