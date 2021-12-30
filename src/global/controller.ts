export class Controller {
  protected mappedStatusCode: MappedStatusCode;

  constructor() {}

  protected async resolve(
    callback: () => any
  ): Promise<ControllerResolveResponse> {
    try {
      return {
        httpStatus: null,
        data: await callback(),
      };
    } catch (error: any) {
      const messagesByClass = {
        QueryFailedError: 'An unexpected error occurred', // security reasons
      };

      const message = messagesByClass[error.constructor.name] || error.message;
      const data = error.data;

      return {
        httpStatus:
          this.mappedStatusCode[error.constructor.name] ||
          error?.constructor.defaultStatusCode ||
          this.mappedStatusCode['Error'] ||
          500,
        data: {
          message,
          data,
        },
      };
    }
  }
}

export type MappedStatusCode = {
  [key: string]: number;
};

export type ControllerResolveResponse = {
  httpStatus: number;
  data: any;
};
