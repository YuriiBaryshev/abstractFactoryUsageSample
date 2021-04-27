let Authenticator = require('authenticator.js')

class PasswordAuthenticator extends Authenticator {
  _idealValue;

  constructor() {
    _idealValue = '1234567890';
  }

  function authenticate(authRawData) {
    return _idealValue == authRawData;
  }

  function changeSource(newIdealValue) {
    _idealValue = newIdealValue;
  }
}

module.exports = PasswordAuthenticator
