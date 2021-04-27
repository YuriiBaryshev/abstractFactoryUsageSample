let Authenticator = require('./authenticator.js')

class FingerprintAuthenticator extends Authenticator {
  _idealValue;

  constructor() {
    super();
    this._idealValue = [[0x11, 0x22, 0x33],
                  [0x44, 0x55, 0x66],
                  [0x77, 0x88, 0x99]];
  }

  authenticate(authRawData) {
    let isIdentical = true;
    for (let i = 0; i < this._idealValue.length; i++) {
      for (let j = 0; j < this._idealValue[i].length; j++) {
        isIdentical = isIdentical && (this._idealValue[i][j] == authRawData[i][j]);
      }
    }
    return isIdentical;
  }

  changeSource(newIdealValue) {
    this._idealValue = newIdealValue;
  }
}

module.exports = FingerprintAuthenticator
