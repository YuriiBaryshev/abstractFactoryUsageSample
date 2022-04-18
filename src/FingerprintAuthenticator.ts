import {Authenticator} from "./Authenticator";
import {Fingerprint} from "./FingerprintReader";

export class FingerprintAuthenticator implements Authenticator<Fingerprint> {
    private idealValue: Fingerprint

    constructor() {
        this.idealValue = [[0x11, 0x22, 0x33], [0x44, 0x55, 0x66], [0x77, 0x88, 0x99]];
    }

    authenticate(authRawData: Fingerprint): boolean {
        let isIdentical = true;

        for (let i = 0; i < this.idealValue.length; i++) {
            for (let j = 0; j < this.idealValue[i].length; j++) {
                isIdentical = isIdentical && (this.idealValue[i][j] == authRawData[i][j]);
            }
        }

        return isIdentical;
    }

    changeSource(newIdealValue: Fingerprint): this {
        this.idealValue = newIdealValue;
        return this;
    }
}