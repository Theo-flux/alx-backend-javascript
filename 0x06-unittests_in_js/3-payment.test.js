const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should spy on utils.calculatnumber', () => {
    const mySpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(1, 2);

    sinon.assert.calledOnce(mySpy);
    sinon.assert.calledOnceWithExactly(mySpy, 'SUM', 1, 2);

    mySpy.restore();
  });
});
