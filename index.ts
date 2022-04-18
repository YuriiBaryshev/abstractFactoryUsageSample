import {FactorReader} from "./src/FactorReader";
import {Authenticator} from "./src/Authenticator";
import {PasswordReader} from "./src/PasswordReader";
import {PasswordAuthenticator} from "./src/PasswordAuthenticator";
import {FingerprintReader, FingerPrint} from "./src/FingerprintReader";
import {FingerprintAuthenticator} from "./src/FingerprintAuthenticator";

export type AuthPair = {
    reader: FactorReader<string | FingerPrint>,
    authenticator: Authenticator<string | FingerPrint>
};

export enum AuthType {
    Password = 'password',
    Fingerprint = 'fingerprint'
}

export class AbstractFactory {
    constructor(public authType: AuthType = AuthType.Password) {
    }

    createAuth(): AuthPair {
        if (this.authType === AuthType.Password) {
            return this.createPasswordAuth();
        }

        if (this.authType === AuthType.Fingerprint) {
            return this.createFingerprintAuth();
        }

        throw new Error('Unsupported authentication type');
    }

    createPasswordAuth(): AuthPair {
        return {
            reader: new PasswordReader(),
            authenticator: new PasswordAuthenticator(),
        };
    }

    createFingerprintAuth(): AuthPair {
        return {
            reader: new FingerprintReader(),
            authenticator: new FingerprintAuthenticator(),
        };
    }
}