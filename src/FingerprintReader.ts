import {FactorReader} from "./FactorReader";

export type FingerPrint = Array<Array<number>>;

export class FingerprintReader implements FactorReader<FingerPrint> {
    readAuthParameters(): FingerPrint {
        return [[0x11, 0x22, 0x33], [0x44, 0x55, 0x66], [0x77, 0x88, 0x99]];
    }
}

