const assert = require('assert');
const supertest = require('supertest');
const {v4} = require('uuid');

describe('OperationController#Controller', () => {
  describe('#create()',() => {
    it('should create one operation', async () => {
      supertest(sails.hooks.http.app)
        .post('/operations')
        .send({
          id : v4(),
          book : v4(),
          type : v4(),
          quantity : 2
        })
        .expect(200)
        .end((err, res) => {
          assert(!err);
          assert(res);
          assert(res.body);
          assert(res.body.id !== null);
          assert(res.body.book !== null);
          assert(res.body.type !== null);
          assert(res.body.quantity === 2);
        });
    });
  });
});
