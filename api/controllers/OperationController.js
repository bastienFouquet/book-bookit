/**
 * OperationController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const {v4} = require('uuid');
module.exports = {
  all: async (req, res) => {
    try {
      const operations = await Operation.find();
      return res.json(operations);
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  },
  one: async (req, res) => {
    try {
      const operations = await Operation.findOne({id: req.params.id}).populateAll();
      if (operations) {
        return res.json(operations);
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
      const operations = await Operation.create({
        id: v4(),
        book: req.body.book,
        type: req.body.type,
        quantity: req.body.quantity
      }).fetch();
      if (operations) {
        return res.json(operations);
      } else {
        return res.badRequest('Error while creating operations !');
      }
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  },
  update: async (req, res) => {
    try {
      const operations = await Operation.updateOne({id: req.body.id}).set({
        book: req.body.book,
        type: req.body.type,
        quantity: req.body.quantity
      });
      if(operations) {
        return res.json(operations);
      } else {
        return res.badRequest('Error while updating operations !');
      }
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  },
  delete: async (req, res) => {
    try {
      const operations = Operation.destroyOne({id: req.params.id});
      if(operations) {
        return res.json(operations);
      } else {
        return res.badRequest('Error while deleting operations !');
      }
    } catch (e){
      console.error(e);
      return res.serverError(e);
    }
  }

};

