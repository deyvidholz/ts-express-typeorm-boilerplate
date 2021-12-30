import { CustomError, ExceptionData } from '../../../global/typing';

export class InvalidPasswordException extends Error implements CustomError {
  static defaultStatusCode = 403;
  public data: any;

  constructor(err?: ExceptionData) {
    super(err?.msg || 'Username or password is invalid');
    Object.setPrototypeOf(this, InvalidPasswordException.prototype);

    if (err?.data && typeof err !== 'string') {
      this.data = err.data;
    }
  }
}
