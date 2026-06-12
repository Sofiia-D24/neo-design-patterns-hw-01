import { AbstractBook } from "./AbstractBook";
import { Author } from "./Author";
import { Book } from "./Book";
import { Copy } from "./Copy";
import { Reader } from "./Reader";

export class Library {
  private _books: AbstractBook[] = [];
  private _authors: Author[] = [];
  private _copies: Copy[] = [];
  private _readers: Reader[] = [];

  addBook(book: AbstractBook): void {
    this._books.push(book);
  }

  addAuthor(author: Author): void {
    this._authors.push(author);
  }

  addCopy(copy: Copy): void {
    this._copies.push(copy);
  }

  addReader(reader: Reader): void {
    this._readers.push(reader);
  }

  getAvailableCopies(): Copy[] {
    return this._copies.filter((c) => c.isCopyAvailable());
  }

  findBooksByAuthor(authorName: string): AbstractBook[] {
    return this._books.filter((book) => {
      if (book instanceof Book) {
        return book.author.name === authorName;
      }
      return false;
    });
  }
}
