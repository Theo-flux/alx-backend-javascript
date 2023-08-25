const chai = require('chai');
const request = require('request');

const { expect } = chai;

describe('express app', () => {
  const method = 'GET';

  it('expects to get 200 statuscode', done => {
    request(
      { uri: 'http://localhost:7865/cart/90', method },
      (error, response, body) => {
        done();
        expect(response.statusCode).to.equal(200);
      }
    );
  });

  it('expects to correct message', done => {
    request(
      { uri: 'http://localhost:7865/cart/81', method },
      (error, response, body) => {
        done();
        expect(body).to.contain('Payment methods for cart: 81');
      }
    );
  });

  it('expects to get >=404 statuscode', done => {
    request(
      { uri: 'http://localhost:7865/cart/hello', method },
      (error, response, body) => {
        done();
        expect(response.statusCode).to.equal(404);
      }
    );
  });
});
