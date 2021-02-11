const assert = require('assert');
const {v4} = require('uuid');

describe('Operations#Model', () => {
  describe('POST', () => {
    it('should create operations and check', async () => {
      var operation = await Operation.create({
        id : v4(),
        book : '4',
        type : 'ajout',
        quantity : 2
      }).fetch();
      assert(operation);
      assert(operation.id !== null);
      assert(operation.book === '4');
      assert(operation.type === 'ajout');
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
        operation = await operation.create({
          id : v4(),
          book : '4',
          type : 'ajout',
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
        operation = await operation.create({
          id : v4(),
          book : '4',
          type : 'ajout',
          quantity : 2
        }).fetch();
      }
      const id = (await Operation.find())[0].id;
      await Operation.updateOne({id: id}).set({
        book: '4',
        type: 'supprimer',
        quantity: 3
      });
      assert(operation);
      assert(operation.book === '4');
      assert(operation.type === 'supprimer');
      assert(operation.quantity === 3);
    });
  });
  describe('DELETE', () => {
    it('should delete an operation and check attributes', async () => {
      const operations = await Operation.find().limit(1);
      let operation = null;
      if (operations.length > 0) {
        operation = operations[0];
      } else {
        operation = await operation.create({
          id : v4(),
          book : '4',
          type : 'ajout',
          quantity : 2
        }).fetch();
      }
      const id = (await Operation.find())[0].id;
      await Operation.destroyOne({id: id});
      assert(operation);
    });
  });
});
