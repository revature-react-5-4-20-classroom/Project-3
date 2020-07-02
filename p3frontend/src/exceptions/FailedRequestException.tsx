export class FailedRequestException extends Error {
  message: string;
  constructor(message: string) {
    super(message);
    this.message = message;
  }
}
