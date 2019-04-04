const request = require('supertest');
require('dotenv').config();

const app = `http://localhost:${process.env.PORT || 3000}`;

describe('GET /users', () => {
  it('responds with json', done => {
    request(app)
      .get('/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('POST /users', () => {
  it('responds with json', done => {
    request(app)
      .post('/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('GET /users/:id', () => {
  it('responds with json', done => {
    request(app)
      .get('/users/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('PUT /users/:id', () => {
  it('responds with json', done => {
    request(app)
      .put('/users/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('DELETE /users/:id', () => {
  it('responds with json', done => {
    request(app)
      .delete('/users/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
