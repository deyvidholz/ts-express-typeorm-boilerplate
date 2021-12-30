import { CustomError, ExceptionData } from '../typing';

export class ResourceNotFoundException extends Error implements CustomError {
  static defaultStatusCode = 404;
  public data: any;

  constructor(err?: ExceptionData) {
    super(err?.msg || 'Resource not found');
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);

    if (err?.data && typeof err !== 'string') {
      this.data = err.data;
    }
  }
}
