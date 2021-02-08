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
          assert(res.body.isbn === '1234567890123');
          assert(res.body.title === 'Harry Potter et la chambre des secrets');
          assert(res.body.quantity === 1);
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
  describe('#update()', () => {
    it('should update a book', async () => {
      const id = (await Book.find())[0].id;
      supertest(sails.hooks.http.app)
        .put('/books')
        .send({
          id: id,
          isbn: '0987654321987',
          title: 'Harry Potter et la coupe de feu (updated)',
          quantity: 2
        })
        .expect(200)
        .end((err, res) => {
          assert(!err);
          assert(res);
          assert(res.body);
          assert(res.body.isbn === '0987654321987');
          assert(res.body.title === 'Harry Potter et la coupe de feu (updated)');
          assert(res.body.quantity === 2);
        });
    });
  });
  describe('#delete()',() => {
    it('should delete a book', async () => {
      const id = (await Book.find())[0].id;
      supertest(sails.hooks.http.app)
        .delete('/books/'+ id)
        .expect(200)
        .end((err, res) => {
          assert(!err);
          assert(res);
        });
    });
  });
});
