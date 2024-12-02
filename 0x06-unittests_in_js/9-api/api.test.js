const request = require('request');
const { expect } = require('chai');

describe('API integration testing', () => {
  const API_URL = 'http://localhost:7865';

  it('GET / returns correct response', (done) => {
    request.get(`${API_URL}/`, (_err, resp, body) => {
      expect(resp.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('GET /cart/:id returns correct response for valid :id', (done) => {
    request.get(`${API_URL}/cart/18`, (_err, resp, body) => {
      expect(resp.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 18');
      done();
    });
  });

  it('GET /cart/:id returns 404 response for negative number values in :id', (done) => {
    request.get(`${API_URL}/cart/-18`, (_err, resp, _body) => {
      expect(resp.statusCode).to.be.equal(404);
      done();
    });
  });

  it('GET /cart/:id returns 404 response for non-numeric values in :id', (done) => {
    request.get(`${API_URL}/cart/d5b0-76ba-g7d6`, (_err, resp, _body) => {
      expect(resp.statusCode).to.be.equal(404);
      done();
    });
  });
});