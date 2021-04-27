let Authenticator = require('./authenticator.js')

class PasswordAuthenticator extends Authenticator {
  _idealValue;

  constructor() {
    super();
    this._idealValue = '1234567890';
  }

  authenticate(authRawData) {
    return this._idealValue == authRawData;
  }

  changeSource(newIdealValue) {
    this._idealValue = newIdealValue;
  }
}

module.exports = PasswordAuthenticator
