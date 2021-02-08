const assert = require('assert');
const supertest = require('supertest');

describe('BookController#Controller', () => {
  describe('#all()', () => {
    it('should get all books', async () => {
      supertest(sails.hooks.http.app)
        .get('/books')
        .expect(200)
        .end((err, res) => {
          assert(!err);
          assert(res);
          assert(res.body);
        });
    });
  });
});
