const assert = require('assert');
const supertest = require('supertest');

describe('BookController#Controller', () => {
  describe('#create()',() => {
    it('should create one book', async () => {
      supertest(sails.hooks.http.app)
        .post('/books')
        .send({
          isbn: '1234567890123',
          title: 'Harry Potter et la chambre des secrets',
          quantity: 1
        })
        .expect(200)
        .end((err, res) => {
          assert(!err);
          assert(res);
          assert(res.body);
        });
    });
  });
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
  describe('#one()',() => {
    it('should get one book by id', async () => {
      const id = (await Book.find())[0].id;
      supertest(sails.hooks.http.app)
        .get('/books/' + id )
        .expect(200)
        .end((err, res) => {
          assert(!err);
          assert(res);
          assert(res.body);
        });
    });
  });

});
