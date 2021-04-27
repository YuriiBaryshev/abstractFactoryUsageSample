let FactorReader = require('./factorReader.js')

class PasswordReader extends FactorReader {
  readAuthParameters() {
    let password = '1234567890';
    return password;
  }
}

module.exports = PasswordReader
