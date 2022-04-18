import {FactorReader} from "./FactorReader";

export class PasswordReader implements FactorReader<string> {
    readAuthParameters(): string {
        return '1234567890';
    }
}

