let PasswordReader = require('./classes/passwordReader.js');
let PasswordAuthenticator = require('./classes/passwordAuthenticator.js');
let FingerprintReader = require('./classes/fingerprintReader.js');
let FingerprintAuthenticator = require('./classes/fingerprintAuthenticator.js');

let authenticationType = {
  PASSWORD : "password",
  FINGERPRINT : "fingerprint",
}

class AbstractFactory {
  _authType;

  constructor() {
    this._authType = authenticationType.PASSWORD;
  }

  set authType(newType) {
    switch (newType) {
      case authenticationType.PASSWORD:
        this._authType = authenticationType.PASSWORD
        break;
      case authenticationType.FINGERPRINT:
        this._authType = authenticationType.FINGERPRINT
        break;
      default:
        throw new Error("Unsupported authentication type");
    }
  }

  get authType() {
    return this._authType;
  }

  createAuthObjects() {
    let output = {
      reader: {},
      authenticator: {},
    }

    switch (this._authType) {
      case authenticationType.PASSWORD:
        output.reader = new PasswordReader();
        output.authenticator = new  PasswordAuthenticator()
        break;
      case authenticationType.FINGERPRINT:
        output.reader = new FingerprintReader();
        output.authenticator = new  FingerprintAuthenticator()
        break;
      default:
        throw new Error("Unsupported authentication type");
    }

    return output;
  }
}

module.exports = AbstractFactory
