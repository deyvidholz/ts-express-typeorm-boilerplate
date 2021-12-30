export class UserAlreadyExistsException extends Error {
  static defaultStatusCode = 400;

  constructor(msg: string = 'Username already in use') {
    super(msg);
    Object.setPrototypeOf(this, UserAlreadyExistsException.prototype);
  }
}
