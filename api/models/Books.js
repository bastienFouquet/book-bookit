/**
 * Books.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  primaryKey: 'id',
  attributes: {
    id: {
      type: 'string',
      unique: true,
      required: true
    },
    isbn: {
      type: 'number',
    },
    title: {
      type: 'string'
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
    },
    operations: {
      collection: 'operations',
      via: 'book'
    }
  },
};

