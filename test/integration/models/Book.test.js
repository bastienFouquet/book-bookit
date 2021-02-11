const assert = require('assert');
const {v4} = require('uuid');

describe('Book#Model', () => {
  describe('POST', () => {
    it('should create a book and check attributes', async () => {
      const book = await Book.create({
        id: v4(),
        isbn : '2134567890123',
        title: 'Harry Potter et le prince de sang mélé',
        quantity: 1,
      }).fetch();
      assert(book);
      assert(book.id !== null);
      assert(book.isbn === '2134567890123');
      assert(book.title === 'Harry Potter et le prince de sang mélé');
      assert(book.quantity === 1);
    });
  });
  describe('GET', () => {
    it('should get books and check attributes', async () => {
      const books = await Book.find().limit(1);
      let book;
      if (books.length > 0) {
        book = books[0];
      } else {
        book = await Book.create({
          id: v4(),
          isbn : '2134567890123',
          title: 'Harry Potter et le prince de sang mélé',
          quantity: 1,
        }).fetch();
      }
      assert(book);
      assert(book.id !== null);
      assert(book.title !== null);
      assert(book.quantity !== null);
      assert(book.isbn !== null);
    });
  });
  describe('PUT', () => {
    it('should update a book and check attributes', async () => {
      const books = await Book.find().limit(1);
      let book;
      if (books.length > 0) {
        book = books[0];
      } else {
        book = await Book.create({
          id: v4(),
          isbn : '2134567890123',
          title: 'Harry Potter et le prince de sang mélé',
          quantity: 1,
        }).fetch();
      }
      const updatedBook = await Book.updateOne({id: book.id}).set({
        isbn: '1234567892323',
        title: 'Harry Potter et les reliques de la mort (updated)',
        quantity: 2
      });
      assert(updatedBook);
      assert(updatedBook.isbn === '1234567892323');
      assert(updatedBook.title === 'Harry Potter et les reliques de la mort (updated)');
      assert(updatedBook.quantity === 2);
    });
  });
  describe('DELETE', () => {
    it('should delete a book and check attributes', async () => {
      const books = await Book.find().limit(1);
      let book;
      if (books.length > 0) {
        book = books[0];
      } else {
        book = await Book.create({
          id: v4(),
          isbn : '2134567890123',
          title: 'Harry Potter et le prince de sang mélé',
          quantity: 1,
        }).fetch();
      }
      const id = (await Book.find())[0].id;
      await Book.destroyOne({id: id});
      assert(book);
    });
  });
});
