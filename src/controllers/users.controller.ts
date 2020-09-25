import { inject } from 'inversify';
import { JsonResult } from 'inversify-express-utils/dts/results';
import {
  BaseHttpController,
  controller,
  httpGet,
  httpPost,
  requestBody,
} from 'inversify-express-utils';

import TYPES from '../services/types';
import { UsersServiceInterface } from '../interfaces';
import { User } from '../models';

@controller('/users')
export class UsersController extends BaseHttpController {
  @inject(TYPES.UsersService) private usersService: UsersServiceInterface;

  @httpGet('/users')
  private async getAllUsers(): Promise<JsonResult> {
    const allUsers = await this.usersService
      .getAllUsers();

    return this.json(allUsers);
  }

  @httpPost('/register')
  private async createNewUser(
    @requestBody() userData: User,
  ): Promise<JsonResult> {
    const newUser = await this.usersService
      .registerUser(userData);

    return this.json(newUser);
  }
}
