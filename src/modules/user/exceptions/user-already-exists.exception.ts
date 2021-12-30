import { CustomError, ExceptionData } from '../../../global/typing';

export class UserAlreadyExistsException extends Error implements CustomError {
  static defaultStatusCode = 409;
  public data: any;

  constructor(err?: ExceptionData) {
    super(err?.msg || 'Username already in use');
    Object.setPrototypeOf(this, UserAlreadyExistsException.prototype);

    if (err?.data && typeof err !== 'string') {
      this.data = err.data;
    }
  }
}
