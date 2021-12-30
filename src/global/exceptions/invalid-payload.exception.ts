import { CustomError, ExceptionData } from '../typing';

export class InvalidPayloadException extends Error implements CustomError {
  static defaultStatusCode = 422;
  public data: any;

  constructor(err?: ExceptionData) {
    super(err?.msg || 'One or more fields are invalid');
    Object.setPrototypeOf(this, InvalidPayloadException.prototype);

    if (err?.data && typeof err !== 'string') {
      this.data = err.data;
    }
  }
}
