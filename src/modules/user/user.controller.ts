import { Request, Response } from 'express';
import { Controller, MappedStatusCode } from '../../global/controller';
import { UserService } from './user.service';
import { AuthUserDTO, CreateUserDTO } from './user.typing';

export class UserController extends Controller {
  private service: UserService;

  protected mappedStatusCode: MappedStatusCode = {};

  constructor() {
    super();
    this.service = new UserService();
  }

  create = (req: Request, res: Response) => {
    const payload: CreateUserDTO = req.body;
    const response = this.resolve(() => this.service.create(payload));

    return res.handle(response, 201);
  };

  auth = (req: Request, res: Response) => {
    const payload: AuthUserDTO = req.body;
    const response = this.resolve(() => this.service.auth(payload));

    return res.handle(response);
  };
}

export default new UserController();
