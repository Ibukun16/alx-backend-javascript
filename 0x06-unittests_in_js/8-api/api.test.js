const request = require('request');
const { expect } = require('chai');

describe('API integration testing', () => {
  const API_URL = 'http://localhost:7865';

  it('GET / returns correct response', (done) => {
    request.get(`${API_URL}/`, (__err, resp, body) => {
      expect(resp.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});
