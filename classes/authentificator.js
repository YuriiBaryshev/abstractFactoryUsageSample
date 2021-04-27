class Authenticator {
  function authenticate(authRawData) {
    throw new Error("You shouldn't call methods from 'abstract' class");
  }

  function changeSource(newIdealValue) {
    throw new Error("You shouldn't call methods from 'abstract' class");
  }
}

module.exports = Authenticator
