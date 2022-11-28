export class UnexpectedError extends Error {
  constructor(message?: string) {
    super(message || 'Something went wrong. try again later');
    this.name = 'UnexpectedError';
  }
}
