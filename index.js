
let authenticationType = {
  PASSWORD : "password",
  FINGERPRINT : "fingerprint",
}

class AbstractFactory {
  let _authType;

  constructor() {
    _authType = authenticationType.PASSWORD;
  }

  setter authType(newType) {
    switch (newType) {
      case authenticationType.PASSWORD:
        _authType = authenticationType.PASSWORD
        break;
      case authenticationType.FINGERPRINT:
        _authType = authenticationType.FINGERPRINT
        break;
      default:
        throw new Error("Unsupported authentication type");
    }

  getter authType() {
    return _authType;
  }
}

module.exports = AbstractFactory
