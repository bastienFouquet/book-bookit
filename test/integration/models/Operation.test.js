const assert = require('assert');
const {v4} = require('uuid');

describe('Operation#Model', () => {
  describe('POST', () => {
    it('should create operations and check', async () => {
      const operation = await Operation.create({
        id : v4(),
        book : v4(),
        type : v4(),
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
      let operation = null;
      if (operations.length > 0) {
        operation = operations[0];
      } else {
        operation = await Operation.create({
          id : v4(),
          book : v4(),
          type : v4(),
          quantity : 2
        }).fetch();
      }
      assert(operation);
      assert(operation.id !== null);
      assert(operation.book !== null);
      assert(operation.type !== null);
      assert(operation.quantity !== null);
    });
  });
  describe('PUT', () => {
    it('should update an operation and check attributes', async () => {
      const operations = await Operation.find().limit(1);
      let operation = null;
      if (operations.length > 0) {
        operation = operations[0];
      } else {
        operation = await Operation.create({
          id : v4(),
          book : v4(),
          type : v4(),
          quantity : 2
        }).fetch();
      }
      const updatedOperation = await Operation.updateOne({id: operation.id}).set({
        book: v4(),
        type: v4(),
        quantity: 3
      });
      assert(updatedOperation);
      assert(updatedOperation.book !== null);
      assert(updatedOperation.type !== null);
      assert(updatedOperation.quantity === 3);
    });
  });
  describe('DELETE', () => {
    it('should delete an operation and check attributes', async () => {
      const operations = await Operation.find().limit(1);
      let operation = null;
      if (operations.length > 0) {
        operation = operations[0];
      } else {
        operation = await Operation.create({
          id : v4(),
          book : v4(),
          type : v4(),
          quantity : 2
        }).fetch();
      }
      await Operation.destroyOne({id: operation.id});
      assert(operation);
    });
  });
});
