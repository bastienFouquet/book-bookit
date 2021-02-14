/**
 * BookController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const {v4} = require('uuid');
module.exports = {
  all: async (req, res) => {
    try {
      const books = await Book.find().populateAll();
      for (const book of books) {
        for (const operation of book.operations) {
          operation.type = await Type.findOne({id: operation.type});
        }
      }
      return res.json(books);
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  },
  one: async (req, res) => {
    try {
      const book = await Book.findOne({id: req.params.id}).populateAll();
      for (const operation of book.operations) {
        operation.type = await Type.findOne({id: operation.type});
      }
      if (book) {
        return res.json(book);
      } else {
        return res.badRequest('No match found !');
      }
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  },
  create: async (req, res) => {
    try {
      if (req.body.isbn.length === 13) {
        const book = await Book.create({
          id: v4(),
          isbn: req.body.isbn,
          title: req.body.title,
          quantity: req.body.quantity
        }).fetch();
        if (book) {
          return res.json(book);
        } else {
          return res.badRequest('Error while creating book !');
        }
      } else {
        return res.badRequest('ISBN number is not valid !');
      }
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  },
  update: async (req, res) => {
    try {
      if (req.body.isbn.length === 13) {
        const book = await Book.updateOne({id: req.params.id}).set({
          title: req.body.title,
          isbn: req.body.isbn,
          quantity: req.body.quantity
        });
        if (book) {
          return res.json(book);
        } else {
          return res.badRequest('Error while updating book !');
        }
      } else {
        return res.badRequest('ISBN number is not valid !');
      }
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  },
  delete: async (req, res) => {
    try {
      const book = await Book.destroyOne({id: req.params.id});
      if (book) {
        return res.json(book);
      } else {
        return res.badRequest('Error while deleting book !');
      }
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  }

};

