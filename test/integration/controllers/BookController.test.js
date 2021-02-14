const assert = require('assert');
const supertest = require('supertest');

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc1MjZlMzAwLTAzYmUtNGYxZC04NWMzLTY3YzM1YTM5OGQxYiIsImxvZ2luIjoiYWRtaW4iLCJyb2xlIjp7ImlkIjoiZDkzNjlmZmItM2M3Mi00OWNkLWIxMGEtMDJmZmIwYTBmZmVjIiwibGFiZWwiOiJBZG1pbiIsImNyZWF0ZWRBdCI6IjIwMjEtMDItMDhUMDg6Mzc6NTcuMDAwWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDItMDhUMDg6Mzc6NTcuMDAwWiJ9LCJpYXQiOjE2MTMwNzUwNTh9.VKGfOSAy9CexQGzZx5YyXiZIljnswEeJPB18TsRu3qw';

describe('BookController#Controller', () => {
  describe('#create()',() => {
    it('should create one book', async () => {
      supertest(sails.hooks.http.app)
        .post('/books')
        .set('Authorization', token)
        .send({
          isbn: Math.random().toString().slice(2, 15),
          title: 'Harry Potter et la chambre des secrets',
          quantity: 1
        })
        .expect(200)
        .end((err, res) => {
          assert(!err);
          assert(res);
          assert(res.body);
          assert(res.body.isbn !== null);
          assert(res.body.title === 'Harry Potter et la chambre des secrets');
          assert(res.body.quantity === 1);
        });
    });
  });
  describe('#all()', () => {
    it('should get all books', async () => {
      supertest(sails.hooks.http.app)
        .get('/books')
        .set('Authorization', token)
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
        .set('Authorization', token)
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
        .put('/books/' + id)
        .set('Authorization', token)
        .send({
          isbn: Math.random().toString().slice(2, 15),
          title: 'Harry Potter et la coupe de feu (updated)',
          quantity: 2
        })
        .expect(200)
        .end((err, res) => {
          assert(!err);
          assert(res);
          assert(res.body);
          assert(res.body.isbn !== null);
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
        .set('Authorization', token)
        .expect(200)
        .end((err, res) => {
          assert(!err);
          assert(res);
        });
    });
  });
});
