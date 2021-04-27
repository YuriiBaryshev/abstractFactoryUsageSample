let Authenticator = require('./authenticator.js')

class PasswordAuthenticator extends Authenticator {
  _idealValue;

  constructor() {
    _idealValue = '1234567890';
  }

  authenticate(authRawData) {
    return _idealValue == authRawData;
  }

  changeSource(newIdealValue) {
    _idealValue = newIdealValue;
  }
}

module.exports = PasswordAuthenticator
