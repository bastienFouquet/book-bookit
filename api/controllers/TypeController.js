/**
 * TypeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  all: async function (req, res) {
    try {
      const types = await Type.find();
      return res.json(types);
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  }
};

