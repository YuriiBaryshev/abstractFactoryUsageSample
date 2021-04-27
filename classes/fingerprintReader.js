let FactorReader = require('factorReader.js')

class FingerprintReader extends FactorReader {
  function readAuthParameters() {
    let fingerprint = [[0x11, 0x22, 0x33],
                      [0x44, 0x55, 0x66]
                      [0x77, 0x88, 0x99]];
    return fingerprint;
  }
}

module.exports = FingerprintReader
