export interface Authenticator<T> {
    authenticate(authRawData: T): boolean;

    changeSource(newIdealValue: T): this;
}