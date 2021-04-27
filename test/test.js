let AbstractFactory = require('../index.js');
let assert = require('chai').assert;

describe('Abstract Fabric pattern demonstration', function() {
  it('create not epmty objects', function() {
    let authFactory = new AbstractFactory();
    let authPair = authFactory.createAuthObjects();
    assert.equal(authPair.reader != {}, true);
    assert.equal(authPair.authenticator != {}, true);
  });

  it('create password-related auth pair by default', function() {
    let authFactory = new AbstractFactory();
    let authPair = authFactory.createAuthObjects();
    let authFactor = authPair.reader.readAuthParameters();
    assert.isAtLeast(authFactor.length, 4);
    assert.equal(authFactor[0].length, 1);
  });

  it('create fingerprint-related auth pair', function() {
    let authFactory = new AbstractFactory();
    authFactory.authType = 'fingerprint';
    let authPair = authFactory.createAuthObjects();
    let authFactor = authPair.reader.readAuthParameters();
    assert.equal(authFactor.length, 3);
    assert.equal(authFactor[0].length, 3);
  });

  it('passes password-related default instances authentication', function() {
    let authFactory = new AbstractFactory();
    let authPair = authFactory.createAuthObjects();
    let authFactor = authPair.reader.readAuthParameters();
    assert.equal(authPair.authenticator.authenticate(authFactor), true);
  });

  it('passes fingerprint-related default instances authentication', function() {
    let authFactory = new AbstractFactory();
    authFactory.authType = 'fingerprint';
    let authPair = authFactory.createAuthObjects();
    let authFactor = authPair.reader.readAuthParameters();
    assert.equal(authPair.authenticator.authenticate(authFactor), true);
  });

  it('fails password-related altered instances authentication', function() {
    let authFactory = new AbstractFactory();
    let authPair = authFactory.createAuthObjects();
    let authFactor = authPair.reader.readAuthParameters();
    authPair.authenticator.changeSource("0987654321");
    assert.notEqual(authPair.authenticator.authenticate(authFactor), true);
  });

  it('fails fingerprint-related altered instances authentication', function() {
    let authFactory = new AbstractFactory();
    authFactory.authType = 'fingerprint';
    let authPair = authFactory.createAuthObjects();
    let authFactor = authPair.reader.readAuthParameters();
    authPair.authenticator.changeSource([[0x99, 0x88, 0x77],
                                        [0x66, 0x55, 0x44],
                                        [0x33, 0x22, 0x11]]);
    assert.notEqual(authPair.authenticator.authenticate(authFactor), true);
  });
});
