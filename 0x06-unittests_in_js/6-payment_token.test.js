const chai = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

const { expect } = chai;

describe('getPaymentToken', () => {
  it('is expected to resolve when success is true', () => new Promise((done) => {
    const res = getPaymentTokenFromAPI(true);
    done();
    expect(res).to.equal({ data: 'Successful response from the API' });
  }));

  it('is expected to do nothing when success is false', () => new Promise((done) => {
    const res = getPaymentTokenFromAPI(false);
    done();
    expect(res).to.equal();
  }));
});
