const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi calls console.log with the appropriate arguments', () => {
    const spyConsole = sinon.spy(console, 'log');
    const stubUtils = sinon.stub(Utils, 'calculateNumber');

    stubUtils.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(stubUtils.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(spyConsole.calledOnceWithExactly('The total is: 10')).to.be.true;
    spyConsole.restore();
    stubUtils.restore();
  });
});
