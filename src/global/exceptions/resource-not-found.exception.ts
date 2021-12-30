export class ResourceNotFoundException extends Error {
  static defaultStatusCode = 404;

  constructor(msg: string = 'Resource not found') {
    super(msg);
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}
