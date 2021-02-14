const assert = require('assert');
const {v4} = require('uuid');

describe('Operation#Model', () => {
  describe('POST', () => {
    it('should create operations and check', async () => {
      const book = (await Book.find())[0];
      const type = (await Type.find({value: 'Entrée'}))[0];
      const operation = await Operation.create({
        id : v4(),
        book : book.id,
        type : type.id,
        quantity : 2
      }).fetch();
      assert(operation);
      assert(operation.id !== null);
      assert(operation.book !== null);
      assert(operation.type !== null);
      assert(operation.quantity === 2);
    });
  });
  describe('GET', () => {
    it('should get operations and check attributes', async () => {
      const operations = await Operation.find().limit(1);
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
