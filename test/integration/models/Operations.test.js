const assert = require('assert');
const {v4} = require('uuid');

describe('Operations#Model', () => {
  describe('GET', () => {
    it('should get operations and check attributes', async () => {
      const operations = await Operations.find().limit(1);
      assert(operations);
      if (operations.length > 0) {
        const operation = operations[0];
        assert(operation);
        assert(operation.id !== null);
        assert(operation.book !== null);
        assert(operation.type !== null);
        assert(operation.quantity !== null);
        assert(operation.createdAt !== null);
        assert(operation.updatedAt !== null);
      }
    });
  });
  describe('POST', () => {
    it('should create operations and check', async () => {
      var createOp = await Operations.create({
        id : v4(),
        book : 'Le seigneur des anneaux',
        type : 'ajout',
        quantity : 2
      }).fetch();
      assert(createOp);
      assert(createOp.id !== null);
      assert(createOp.book === 'Le seigneur des anneaux');
      assert(createOp.type === 'ajout');
      assert(createOp.quantity === 2);
    });
  });
});
