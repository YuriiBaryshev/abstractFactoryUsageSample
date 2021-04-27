let Authenticator = require('authenticator.js')

class FingerprintAuthenticator extends Authenticator {
  _idealValue;

  constructor() {
    _idealValue = [[0x11, 0x22, 0x33],
                  [0x44, 0x55, 0x66]
                  [0x77, 0x88, 0x99]];
  }

  function authenticate(authRawData) {
    let isIdentical = true;
    for (let i = 0; i < _idealValue.length; i++) {
      for (let j = 0; j < _idealValue[i].length; j++) {
        isIdentical = isIdentical && (_idealValue[i][j] == authRawData[i][j]);
      }
    }
    return isIdentical;
  }

  function changeSource(newIdealValue) {
    _idealValue = newIdealValue;
  }
}

module.exports = FingerprintAuthenticator
