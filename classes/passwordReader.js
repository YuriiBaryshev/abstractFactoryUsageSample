let FactorReader = require('factorReader.js')

class PasswordReader extends FactorReader {
  function readAuthParameters() {
    //
    let password = '1234567890';
    return password;
  }
}
