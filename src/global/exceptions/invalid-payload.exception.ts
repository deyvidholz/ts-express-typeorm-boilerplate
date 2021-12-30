export class InvalidPayloadException extends Error {
  static defaultStatusCode = 422;

  constructor(msg: string = 'One or more fields are invalid') {
    super(msg);
    Object.setPrototypeOf(this, InvalidPayloadException.prototype);
  }
}
