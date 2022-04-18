import {FactorReader} from "./FactorReader";

export type Fingerprint = Array<Array<number>>;

export class FingerprintReader implements FactorReader<Fingerprint> {
    readAuthParameters(): Fingerprint {
        return [[0x11, 0x22, 0x33], [0x44, 0x55, 0x66], [0x77, 0x88, 0x99]];
    }
}

