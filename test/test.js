let abstractFactory = require('../index.js');
let assert = require('chai').assert;

describe('Abstract Fabric pattern demonstration', function() {
  it('create not epmty objects', function() {
    let authFactory = new AbstractFactory();
    let authPair = authFactory.createAuthObjects();
    assert.equal(authPair.reader != {}, true);
    assert.equal(authPair.authenticator != {}, true);
  });
});
