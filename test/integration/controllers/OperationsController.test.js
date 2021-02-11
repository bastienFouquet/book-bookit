const assert = require('assert');
const supertest = require('supertest');

describe('OperationsController#Controller', () => {
  describe('#create()',() => {
    it('should create one operation', async () => {
      const bookId = (await Book.find())[0].id;
      const typeId = (await Type.find())[0].id;
      supertest(sails.hooks.http.app)
        .post('/operations')
        .send({
          id : v4(),
          book : bookId,
          type : typeId,
          quantity : 2
        })
        .expect(200)
        .end((err, res) => {
          assert(!err);
          assert(res);
          assert(res.body);
          assert(res.body.id === v4());
          assert(res.body.book === bookId);
          assert(res.body.type === typeId);
          assert(res.body.quantity === 2);
        });
    });
  });
  describe('#all()', () => {
    it('should get all operations', async () => {
      supertest(sails.hooks.http.app)
        .get('/operations')
        .expect(200)
        .end((err, res) => {
          assert(!err);
          assert(res);
          assert(res.body);
        });
    });
  });
  describe('#one()',() => {
    it('should get one operations by id', async () => {
      const id = (await Book.find())[0].id;
      supertest(sails.hooks.http.app)
        .get('/operations/' + id )
        .expect(200)
        .end((err, res) => {
          assert(!err);
          assert(res);
          assert(res.body);
        });
    });
  });
  describe('#update()', () => {
    it('should update an operations', async () => {
      const bookId = (await Book.find())[0].id;
      const typeId = (await Type.find())[0].id;
      supertest(sails.hooks.http.app)
        .put('/operations')
        .send({
          id : v4(),
          book : bookId,
          type : typeId,
          quantity : 3
        })
        .expect(200)
        .end((err, res) => {
          assert(!err);
          assert(res);
          assert(res.body);
          assert(res.body.isbn === v4());
          assert(res.body.title === bookId);
          assert(res.body.type === typeId);
          assert(res.body.quantity === 2);
        });
    });
  });
  describe('#delete()',() => {
    it('should delete an operations', async () => {
      const id = (await Book.find())[0].id;
      supertest(sails.hooks.http.app)
        .delete('/operations/'+ id)
        .expect(200)
        .end((err, res) => {
          assert(!err);
          assert(res);
        });
    });
  });
});
