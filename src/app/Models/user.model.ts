export class User {
  constructor(
    public email: string,
    public id: string,
    private idtoken: string,
    private refreshtoken: string,
    private tokenExpirationDate: Date
  ) {}

  get token() {
    if (!this.tokenExpirationDate || new Date() > this.tokenExpirationDate) {
      return null;
    }
    return this.idtoken;
  }
  // tslint:disable-next-line:typedef
  get refreshtoken1() {
    if (!this.tokenExpirationDate || new Date() > this.tokenExpirationDate) {
      return null;
    }
    return this.refreshtoken;
  }
}
