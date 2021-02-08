const assert = require('assert');

describe('Books#Model', () => {
  describe('GET', () => {
    it('should get books and check attributes', async () => {
      const books = await Books.find().limit(1);
      assert(books);
      if (books.length > 0) {
        const book = books[0];
        assert(book);
        assert(book.id !== null);
        assert(book.title !== null);
        assert(book.quantity !== null);
        assert(book.isbn !== null);
        assert(book.operations !== undefined);
      }
    });
  });
});
