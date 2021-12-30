export class InvalidPasswordException extends Error {
  static defaultStatusCode = 422;

  constructor(msg: string = 'Username or password is invalid') {
    super(msg);
    Object.setPrototypeOf(this, InvalidPasswordException.prototype);
  }
}
