/**
 * Operation.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'operations', primaryKey: 'id',
  attributes: {
    id: {
      type: 'string',
      unique: true,
      required: true
    },
    book: {
      model: 'book',
      columnName: 'bookId'
    },
    type: {
      model: 'type',
      columnName: 'typeId'
    },
    quantity: {
      type: 'number'
    },
    createdAt: {
      type: 'ref',
      columnType: 'datetime',
      autoCreatedAt: true
    },
    updatedAt: {
      type: 'ref',
      columnType: 'datetime',
      autoUpdatedAt: true
    }
  },
  beforeCreate: async function (recordToCreate, proceed) {
    await sails.helpers.triggerQuantity.with({
      book: recordToCreate.book,
      type: recordToCreate.type,
      quantity: recordToCreate.quantity
    });
    proceed();
  },
};

