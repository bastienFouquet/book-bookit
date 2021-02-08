const assert = require('assert');
const {v4} = require('uuid');

describe('Operations#Model', () => {
  describe('POST', () => {
    it('should create operations and check', async () => {
      const bookId = (await Book.find())[0].id;
      const typeId = (await Type.find())[0].id;
      var operation = await Operation.create({
        id : v4(),
        book : bookId,
        type : typeId,
        quantity : 2
      }).fetch();
      assert(operation);
      assert(operation.id !== null);
      assert(operation.book === bookId);
      assert(operation.type === typeId);
      assert(operation.quantity === 2);
    });
  });
  describe('GET', () => {
    it('should get operations and check attributes', async () => {
      const operations = await Operation.find().limit(1);
      assert(operations);
      if (operations.length > 0) {
        const operation = operations[0];
        assert(operation);
        assert(operation.id !== null);
        assert(operation.book !== null);
        assert(operation.type !== null);
        assert(operation.quantity !== null);
      }
    });
  });
});
