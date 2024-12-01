const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
    const spyUtils = sinon.spy(Utils);
    const spyConsole = sinon.spy(console);

    sendPaymentRequestToApi(100, 20);
    expect(spyUtils.calculateNumber.calledOnceWithExactly('SUM', 100, 20)).to.be
      .true;
    expect(spyConsole.log.calledOnceWithExactly('The total is: 120')).to.be
      .true;
    spyUtils.calculateNumber.restore();
    spyConsole.log.restore();
  });
});
