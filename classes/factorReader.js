class FactorReader {
  function readAuthParameters() {
    throw Error("You shouldn't call methods from 'abstract' class");
  }
}

module.exports = FactorReader
