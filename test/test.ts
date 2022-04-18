import {AbstractFactory, AuthType} from "../index";
import {assert} from 'chai';
import {FingerprintReader} from "../src/FingerprintReader";
import {FingerprintAuthenticator} from "../src/FingerprintAuthenticator";
import {PasswordReader} from "../src/PasswordReader";
import {PasswordAuthenticator} from "../src/PasswordAuthenticator";

describe('Abstract Fabric pattern demonstration', function () {
    it('create password-related auth pair by default', function () {
        let authFactory = new AbstractFactory();
        let authPair = authFactory.createAuth();
        let authFactor = authPair.reader.readAuthParameters();
        assert.instanceOf(authPair.reader, PasswordReader);
        assert.instanceOf(authPair.authenticator, PasswordAuthenticator);
        assert.isAtLeast(authFactor.length, 4);
        assert.equal(authFactor[0].length, 1);
    });

    it('create fingerprint-related auth pair', function () {
        let authFactory = new AbstractFactory(AuthType.Fingerprint);
        let authPair = authFactory.createAuth();
        let authFactor = authPair.reader.readAuthParameters();
        assert.instanceOf(authPair.reader, FingerprintReader);
        assert.instanceOf(authPair.authenticator, FingerprintAuthenticator);
        assert.equal(authFactor.length, 3);
        assert.equal(authFactor[0].length, 3);
    });

    it('passes password-related default instances authentication', function () {
        let authFactory = new AbstractFactory();
        let authPair = authFactory.createAuth();
        let authFactor = authPair.reader.readAuthParameters();
        assert.isTrue(authPair.authenticator.authenticate(authFactor));
    });

    it('passes fingerprint-related default instances authentication', function () {
        let authFactory = new AbstractFactory(AuthType.Fingerprint);
        let authPair = authFactory.createAuth();
        let authFactor = authPair.reader.readAuthParameters();
        assert.isTrue(authPair.authenticator.authenticate(authFactor));
    });

    it('fails password-related altered instances authentication', function () {
        let authFactory = new AbstractFactory();
        let authPair = authFactory.createAuth();
        let authFactor = authPair.reader.readAuthParameters();
        authPair.authenticator.changeSource('0987654321');
        assert.isFalse(authPair.authenticator.authenticate(authFactor));
    });

    it('fails fingerprint-related altered instances authentication', function () {
        let authFactory = new AbstractFactory(AuthType.Fingerprint);
        let authPair = authFactory.createAuth();
        let authFactor = authPair.reader.readAuthParameters();
        authPair.authenticator.changeSource([[0x99, 0x88, 0x77], [0x66, 0x55, 0x44], [0x33, 0x22, 0x11]]);
        assert.isFalse(authPair.authenticator.authenticate(authFactor));
    });
});
