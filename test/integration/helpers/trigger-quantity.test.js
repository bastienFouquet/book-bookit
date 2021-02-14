const assert = require('assert');
const {v4} = require('uuid');

describe('triggerQuantity#Helper', () => {
  describe('should modify book quantity on creation of operation', () => {
    it('should increase quantity', async () => {
      const book = await Book.create({
        id: v4(),
        isbn: Math.random().toString().slice(2, 15),
        title: 'TEST',
        quantity: 46
      }).fetch();
      const type = (await Type.find({value: 'Entrée'}))[0];
      const operation = await Operation.create({
        id: v4(),
        book: book.id,
        type: type.id,
        quantity: 10,
      }).fetch();
      assert(operation);
      assert(operation.id);
      const bookTrigger = await Book.findOne({id: book.id});
      assert(bookTrigger.quantity === book.quantity + 10);
    });
    it('should decrease quantity', async () => {
      const book = await Book.create({
        id: v4(),
        isbn: Math.random().toString().slice(2, 15),
        title: 'TEST',
        quantity: 46
      }).fetch();
      const type = (await Type.find({value: 'Sortie'}))[0];
      const operation = await Operation.create({
        id: v4(),
        book: book.id,
        type: type.id,
        quantity: 2,
      }).fetch();
      assert(operation);
      assert(operation.id);
      const bookTrigger = await Book.findOne({id: book.id});
      assert(bookTrigger.quantity === book.quantity - 2);
    });
  });
});
