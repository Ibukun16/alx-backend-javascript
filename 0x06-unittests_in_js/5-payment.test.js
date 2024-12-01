const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let monitorConsole;

  beforeEach(() => {
    if (!monitorConsole) {
      monitorConsole = sinon.spy(console, 'log');
    }
  });

  afterEach(() => {
    monitorConsole.resetHistory();
  });

  it('sendPaymentRequestToApi(100, 20) calls, console.log "The total is: 120"', () => {
    sendPaymentRequestToApi(100, 20);
    expect(monitorConsole.calledOnceWithExactly('The total is: 120')).to.be
      .true;
    expect(monitorConsole.calledOnce).to.be.true;
  });

  it('sendPaymentRequestToApi(10, 10) calls, console.log "The total is: 20"', () => {
    sendPaymentRequestToApi(10, 10);
    expect(monitorConsole.calledOnceWithExactly('The total is: 20')).to.be.true;
    expect(monitorConsole.calledOnce).to.be.true;
  });
});
