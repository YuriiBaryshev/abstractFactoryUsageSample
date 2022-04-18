import {Authenticator} from "./Authenticator";

export class PasswordAuthenticator implements Authenticator<string> {
    constructor(private idealValue: string = '1234567890') {
    }

    authenticate(authRawData: string): boolean {
        return this.idealValue === authRawData;
    }

    changeSource(newIdealValue: string): this {
        this.idealValue = newIdealValue;
        return this;
    }
}