/**
 * BooksController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const v4 = require('uuid');
module.exports = {
  all: async (req, res) => {
    try{
      const books = await Books.find();
      return res.json(books);
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  },
  one: async (req, res) => {
    try {
      const book = await Books.findOne({id: req.params.id}).populateAll();
      if(book){
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
    try{
      const book = await Books.create({
        id: v4(),
        isbn: req.params.isbn,
        title: req.params.title,
        quantity: req.params.quantity
      }).fetch();
      if(book){
        return res.json(book);
      } else {
        return res.badRequest('Error while creating book !');
      }
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  }

};
