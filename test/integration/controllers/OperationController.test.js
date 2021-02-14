const assert = require('assert');
const supertest = require('supertest');
const {v4} = require('uuid');

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc1MjZlMzAwLTAzYmUtNGYxZC04NWMzLTY3YzM1YTM5OGQxYiIsImxvZ2luIjoiYWRtaW4iLCJyb2xlIjp7ImlkIjoiZDkzNjlmZmItM2M3Mi00OWNkLWIxMGEtMDJmZmIwYTBmZmVjIiwibGFiZWwiOiJBZG1pbiIsImNyZWF0ZWRBdCI6IjIwMjEtMDItMDhUMDg6Mzc6NTcuMDAwWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDItMDhUMDg6Mzc6NTcuMDAwWiJ9LCJpYXQiOjE2MTMwNzUwNTh9.VKGfOSAy9CexQGzZx5YyXiZIljnswEeJPB18TsRu3qw';

describe('OperationController#Controller', () => {
  describe('#create()',() => {
    it('should create one operation', async () => {
      const book = await Book.create({
        id: v4(),
        isbn: Math.random().toString().slice(2, 15),
        title: 'TEST',
        quantity: 46
      }).fetch();
      const type = (await Type.find({value: 'Entrée'}))[0];
      supertest(sails.hooks.http.app)
        .post('/operations')
        .set('Authorization', token)
        .send({
          id : v4(),
          book : book.id,
          type : type.id,
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
