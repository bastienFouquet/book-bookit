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
      model: 'books',
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

};

