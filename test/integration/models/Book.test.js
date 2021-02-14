const assert = require('assert');
const {v4} = require('uuid');

describe('Book#Model', () => {
  describe('POST', () => {
    it('should create a book and check attributes', async () => {
      const book = await Book.create({
        id: v4(),
        isbn: Math.random().toString().slice(2, 15),
        title: 'Harry Potter et le prince de sang mélé',
        quantity: 1,
      }).fetch();
      assert(book);
      assert(book.id !== null);
      assert(book.isbn !== null);
      assert(book.title === 'Harry Potter et le prince de sang mélé');
      assert(book.quantity === 1);
    });
  });
  describe('GET', () => {
    it('should get books and check attributes', async () => {
      const books = await Book.find().limit(1);
      if (books.length) {
        const book = books[0];
        assert(book);
        assert(book.id !== null);
        assert(book.title !== null);
        assert(book.quantity !== null);
        assert(book.isbn !== null);
      }
    });
  });
  describe('PUT', () => {
    it('should update a book and check attributes', async () => {
      const books = await Book.find().limit(1);
      if (books.length > 0) {
        const book = books[0];
        const updatedBook = await Book.updateOne({id: book.id}).set({
          isbn: Math.random().toString().slice(2, 15),
          title: 'Harry Potter et les reliques de la mort (updated)',
          quantity: 2
        });
        assert(updatedBook);
        assert(updatedBook.isbn !== null);
        assert(updatedBook.title === 'Harry Potter et les reliques de la mort (updated)');
        assert(updatedBook.quantity === 2);
      }
    });
  });
  describe('DELETE', () => {
    it('should delete a book and check attributes', async () => {
      const books = await Book.find();
      if (books.length > 0) {
        const id = books[0].id;
        const bookDeleted = await Book.destroyOne({id: id});
        assert(bookDeleted);
      }
    });
  });
});
