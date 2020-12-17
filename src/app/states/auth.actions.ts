export class LoginAuth {
    static readonly type = '[auth] login auth';
    constructor(public auth: any) {}
}

export class SetToken {
    static readonly type = '[auth] set token';
    constructor(public token: string) { }
}