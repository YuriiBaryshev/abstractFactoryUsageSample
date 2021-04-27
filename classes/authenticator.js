class Authenticator {
  authenticate(authRawData) {
    throw new Error("You shouldn't call methods from 'abstract' class");
  }

  changeSource(newIdealValue) {
    throw new Error("You shouldn't call methods from 'abstract' class");
  }
}

module.exports = Authenticator
