import { ControllerResolveResponse } from '../../src/global/controller';
import { JwtPayload } from '../../src/modules/user/user.typing';

export {};

declare global {
  namespace Express {
    interface User extends JwtPayload {}

    interface Response {
      handle: (
        controllerResponse: Promise<ControllerResolveResponse>,
        successStatusCode?: number
      ) => any;
    }
  }
}
