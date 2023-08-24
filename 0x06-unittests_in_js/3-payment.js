const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const totalSum = Utils.calculateNumber('SUM', totalAmount, totalShipping);

  return (`The total is: ${totalSum}`);
}

module.exports = sendPaymentRequestToApi;
